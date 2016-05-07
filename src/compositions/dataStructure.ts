import * as b from 'bobril';
import { color } from '../constants';
import { create as header, HeaderType } from '../components/header';

export interface IDataStructureCompositionData {
    title: string;
    content: b.IBobrilNode;
}

interface IDataStructureCompositionCtx extends b.IBobrilCtx {
    data: IDataStructureCompositionData;
}

function createLayout(content: b.IBobrilNode, title: string): b.IBobrilNode {
    return {
        tag: 'div',
        children: [
            header({ content: title, type: HeaderType.TopicHeader }),
            content
        ]
    }
};

let dataStructureComposition: b.IBobrilComponent = {
    render(ctx: IDataStructureCompositionCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.style = { paddingLeft: 4, marginBottom: 50 };
        me.children = createLayout(ctx.data.content, ctx.data.title);
    }
};

export function create(data: IDataStructureCompositionData): b.IBobrilNode {
    return { component: dataStructureComposition, data: data };
};
