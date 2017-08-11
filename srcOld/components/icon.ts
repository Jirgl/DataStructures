import * as b from 'bobril';
import { color } from '../constants';

const ICON_SIZE = 21;

export enum IconType {
    Time
}

export interface IIconData {
    type: IconType;
}

function getTimeIconPaths(): b.IBobrilNode[] {
    let radius = ICON_SIZE / 2;
    return [
        {
            tag: 'circle',
            attrs: {
                cx: radius,
                cy: radius,
                r: radius - 2,
                stroke: color.darkBackground,
                fill: 'none',
            }
        }, {
            tag: 'path',
            attrs: {
                d: [
                    'M', radius - 1, ICON_SIZE / 5,
                    'L', radius - 1, radius + 1,
                    'L', ICON_SIZE - ICON_SIZE / 5, radius + 1
                ].join(' '),
                stroke: color.darkBackground,
                fill: 'none'
            }
        }
    ];
}

export function create(data: IIconData): b.IBobrilNode {
    let paths = [];
    switch (data.type) {
        case IconType.Time:
            paths = getTimeIconPaths();
            break;
    }

    return {
        tag: 'svg',
        style: { width: ICON_SIZE, height: ICON_SIZE },
        children: paths
    };
}
