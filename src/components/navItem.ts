import * as b from 'bobril';
import { color, font } from '../constants';

export interface INavItemData {
    content: string;
    isActive: boolean;
    routeParamName: string;
}

const rootStyle = {
    paddingLeft: 4,
    paddingRight: 50,
    display: 'inline-block'
};

function getStyle(isActive: boolean): Object {
    const style = {
        fontFamily: font.lightFontFamily,
        color: color.grayForeground,
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: 28
    }

    if (isActive) style.color = color.darkForeground;

    return style;
}

export function create(data: INavItemData): b.IBobrilNode {
    return {
        tag: 'div',
        style: rootStyle,
        children: b.link(b.styledDiv(data.content, getStyle(data.isActive)), data.routeParamName)
    };
}
