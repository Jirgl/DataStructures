import * as b from 'bobril';
import * as m from 'bobril-m';
import { font } from '../constants';

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

function getInnerDivStyle(isActive: boolean): Object {
    return {
        fontFamily: font.lightFontFamily,
        color: isActive ? m.grey700 : m.grey400,
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: 28,
        borderBottom: isActive ? '2px solid ' + m.primary1Color() : undefined
    };
}

export function create(data: INavItemData): b.IBobrilNode {
    return {
        tag: 'div',
        style: rootStyle,
        children: b.link(b.styledDiv(data.content, getInnerDivStyle(data.isActive)), data.routeParamName)
    };
}
