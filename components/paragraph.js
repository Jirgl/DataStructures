var JirglStructures;
(function (JirglStructures) {
    var paragraphComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.style = {
                fontSize: 16,
                fontFamily: JirglStructures.Font.baseFontFamily,
                color: JirglStructures.Color.baseForeground
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