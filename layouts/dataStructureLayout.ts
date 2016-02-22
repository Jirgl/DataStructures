/// <reference path="../components/header.ts" />
/// <reference path="../components/paragraph.ts" />
/// <reference path="../constants.ts" />

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
                    style: {
                        overflow: "hidden",
                        position: "relative",
                        width: "100%",
                        display: "table"
                    },
                    children: [
                        {
                            tag: "div",
                            style: {
                                width: DataStructureLayout.leftContentWidth + "%",
                                display: "table-cell",
                                background: Color.grayBackground,
                                borderRight: `solid 20px ${Color.lightForeground}`
                            },
                            children: content
                        },
                        {
                            tag: "div",
                            style: {
                                width: DataStructureLayout.rightContentWidth + "%",
                                display: "table-cell",
                                verticalAlign: "top",
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