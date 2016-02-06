var JirglStructures;
(function (JirglStructures) {
    var paragraphComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.style = {
                fontSize: 16,
                padding: 20,
                textAlign: "justify",
                fontFamily: JirglStructures.Font.lightFontFamily,
                color: JirglStructures.Color.lightForeground
            };
            me.children = ctx.data.content;
        }
    };
    function paragraph(data) {
        return { component: paragraphComponent, data: data };
    }
    JirglStructures.paragraph = paragraph;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=paragraph.js.map