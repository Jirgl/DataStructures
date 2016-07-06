import * as b from 'bobril';
import { color, font } from '../constants';

export enum HeaderType {
    AppHeader,
    PageHeader,
    TopicHeader
}

export interface IHeaderData {
    content: string;
    type: HeaderType;
}

function getSize(type: HeaderType): number {
    switch (type) {
        case HeaderType.AppHeader:
            return 52;
        case HeaderType.TopicHeader:
            return 28;
        default:
            return 26;
    }
}

function getStyle(type: HeaderType): Object {
    return {
        fontSize: getSize(type),
        fontFamily: font.lightFontFamily,
        color: color.darkForeground
    };
}

export function create(data: IHeaderData): b.IBobrilNode {
    return {
        tag: 'div',
        style: getStyle(data.type),
        children: data.content
    };
}
