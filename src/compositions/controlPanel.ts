import * as b from 'bobril';
import * as m from 'bobril-m';

export interface IControlPanelData {
    actions: b.IBobrilNode;
    options?: b.IBobrilNode;
    valueBox: b.IBobrilNode;
    submitButton: b.IBobrilNode;
}

function getBlock(children: b.IBobrilNode, left: number, bottom: number = 0): b.IBobrilNode {
    return {
        tag: 'div',
        style: {
            display: 'inline-block',
            position: 'absolute',
            paddingLeft: 10,
            paddingRight: 10,
            bottom: bottom,
            left: left
        },
        children: children
    };
}

function getLine(): b.IBobrilNode {
    return {
        tag: 'div',
        style: {
            height: 1,
            backgroundImage: '-webkit-gradient(linear, 0 0, 80% 0, from(' + m.primary1Color() + '), to(' + m.transparent + '))',
        }
    }
}

export function create(data: IControlPanelData): b.IBobrilNode {
    return {
        tag: 'div',
        style: {
            position: 'relative',
            height: 80
        },
        children: [
            getLine(),
            getBlock(data.actions, 0, 10),
            getBlock(data.options, 90, 10),
            getBlock(data.valueBox, 200),
            getBlock(data.submitButton, 420, 2)
        ]
    };
}