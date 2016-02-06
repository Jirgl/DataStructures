/// <reference path="../components/header.ts" />
/// <reference path="../components/paragraph.ts" />

module JirglStructures {
    export interface IDataStructureLayoutData {
        title: string;
        description: string;
        content: IBobrilNode;
    }

    interface IDataStructureCtx {
        data: IDataStructureLayoutData;
    }

    var createLayout = (content: IBobrilNode, title: string, description: string): IBobrilNode => {
        return {
            tag: "div",
            style: { marginBottom: 50 },
            children: [
                {
                    tag: "div",
                    style: { background: Color.lightForeground },
                    children: header({ content: title, type: HeaderType.TopicHeader })
                },
                {
                    tag: "div",
                    style: { overflow: "hidden", position: "relative", width: "100%" },
                    children: [
                        {
                            tag: "div",
                            style: { width: "70%" },
                            children: {
                                tag: "div",
                                style: { marginRight: 25, background: Color.grayBackground },
                                children: content
                            }
                        },
                        {
                            tag: "div",
                            style: {
                                height: "100%", width: "30%",
                                verticalAlign: "top",
                                position: "absolute",
                                right: 0, top: 0,
                                color: Color.lightForeground,
                                background: Color.darkBackground
                            },
                            children: paragraph({ content: description })
                        }
                    ]
                }
            ]
        }
    };

    var dataStructureLayoutComponent: IBobrilComponent = {
        render(ctx: IDataStructureCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children = createLayout(ctx.data.content, ctx.data.title, ctx.data.description);
        }
    };

    export function dataStructureLayout(data: IDataStructureLayoutData): IBobrilNode {
        return { component: dataStructureLayoutComponent, data: data };
    };
}