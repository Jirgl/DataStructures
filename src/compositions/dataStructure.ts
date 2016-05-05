import * as b from 'bobril';
import { color } from '../constants';
import { create as header, HeaderType } from '../components/header';

export interface IDataStructureCompositionData {
    title: string;
    description: string;
    content: b.IBobrilNode;
}

interface IDataStructureCompositionCtx extends b.IBobrilCtx {
    data: IDataStructureCompositionData;
}

var createLayout = (content: b.IBobrilNode, title: string, description: string): b.IBobrilNode => {
    return {
        tag: 'div',
        style: { marginBottom: 50 },
        children: [
            {
                tag: 'div',
                style: { background: color.lightForeground },
                children: header({ content: title, type: HeaderType.TopicHeader })
            },
            {
                tag: 'div',
                style: {
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    display: 'table'
                },
                children: {
                    tag: 'div',
                    style: {
                        width: 100 + '%',
                        display: 'table-cell',
                        background: color.grayBackground,
                        borderRight: `solid 20px ${color.lightForeground}`
                    },
                    children: content
                }
            }
        ]
    }
};

var dataStructureCompositionComponent: b.IBobrilComponent = {
    render(ctx: IDataStructureCompositionCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = createLayout(ctx.data.content, ctx.data.title, ctx.data.description);
    }
};

export function create(data: IDataStructureCompositionData): b.IBobrilNode {
    return { component: dataStructureCompositionComponent, data: data };
};
