/// <reference path="../components/header.ts" />
/// <reference path="../components/paragraph.ts" />
/// <reference path="../constants.ts" />
var JirglStructures;
(function (JirglStructures) {
    var createLayout = function (content, title, description) {
        return {
            tag: "div",
            style: { marginBottom: 50 },
            children: [
                {
                    tag: "div",
                    style: { background: JirglStructures.Color.lightForeground },
                    children: JirglStructures.header({ content: title, type: JirglStructures.HeaderType.TopicHeader })
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
                                width: JirglStructures.DataStructureLayout.leftContentWidth + "%",
                                display: "table-cell",
                                background: JirglStructures.Color.grayBackground,
                                borderRight: "solid 20px " + JirglStructures.Color.lightForeground
                            },
                            children: content
                        },
                        {
                            tag: "div",
                            style: {
                                width: JirglStructures.DataStructureLayout.rightContentWidth + "%",
                                display: "table-cell",
                                verticalAlign: "top",
                                right: 0, top: 0,
                                color: JirglStructures.Color.lightForeground,
                                background: JirglStructures.Color.darkBackground
                            },
                            children: JirglStructures.paragraph({ content: description })
                        }
                    ]
                }
            ]
        };
    };
    var dataStructureLayoutComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = createLayout(ctx.data.content, ctx.data.title, ctx.data.description);
        }
    };
    function dataStructureLayout(data) {
        return { component: dataStructureLayoutComponent, data: data };
    }
    JirglStructures.dataStructureLayout = dataStructureLayout;
    ;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=dataStructureLayout.js.map