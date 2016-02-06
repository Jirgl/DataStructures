/// <reference path="../components/header.ts" />
/// <reference path="../components/paragraph.ts" />
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
                    style: { overflow: "hidden", position: "relative", width: "100%" },
                    children: [
                        {
                            tag: "div",
                            style: { width: "70%" },
                            children: {
                                tag: "div",
                                style: { marginRight: 25, background: JirglStructures.Color.grayBackground },
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
                                foreground: JirglStructures.Color.lightForeground,
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