/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    (function (ArrowType) {
        ArrowType[ArrowType["DirectOneWay"] = 0] = "DirectOneWay";
        ArrowType[ArrowType["DirectTwoWay"] = 1] = "DirectTwoWay";
        ArrowType[ArrowType["SchemaOneWay"] = 2] = "SchemaOneWay";
        ArrowType[ArrowType["SchemaTwoWay"] = 3] = "SchemaTwoWay";
    })(JirglStructures.ArrowType || (JirglStructures.ArrowType = {}));
    var ArrowType = JirglStructures.ArrowType;
    var Arrow = (function () {
        function Arrow() {
            this.arrowLength = 10;
            this.itemBorder = 20;
            this.arrowAngle = 30;
        }
        Arrow.prototype.getArrowhead = function (start, end) {
            var currentAngle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
            var angle = currentAngle + this.arrowAngle;
            var arrowStartX = Math.round(this.arrowLength * Math.cos(angle * Math.PI / 180));
            var arrowStartY = Math.round(this.arrowLength * Math.sin(angle * Math.PI / 180));
            angle = currentAngle - this.arrowAngle;
            var arrowEndX = Math.round(this.arrowLength * Math.cos(angle * Math.PI / 180));
            var arrowEndY = Math.round(this.arrowLength * Math.sin(angle * Math.PI / 180));
            return [
                "M", start.x + arrowStartX, start.y + arrowStartY,
                "L", start.x, start.y,
                "L", start.x + arrowEndX, start.y + arrowEndY
            ];
        };
        Arrow.prototype.getDirectLine = function (start, end) {
            return [
                "M", start.x, start.y,
                "L", end.x, end.y
            ];
        };
        Arrow.prototype.getSchemaLine = function (start, end) {
            if (start.x < end.x) {
                return [
                    "M", start.x, start.y,
                    "L", start.x + ((end.x - start.x) / 2), start.y,
                    "L", start.x + ((end.x - start.x) / 2), start.y + (end.y - start.y),
                    "L", end.x, end.y
                ];
            }
            else {
                return [
                    "M", start.x, start.y,
                    "L", start.x + this.itemBorder, start.y,
                    "L", start.x + this.itemBorder, start.y + ((end.y - start.y) / 2),
                    "L", end.x - this.itemBorder, start.y + ((end.y - start.y) / 2),
                    "L", end.x - this.itemBorder, end.y,
                    "L", end.x, end.y
                ];
            }
        };
        Arrow.prototype.getArrowPath = function (start, end, type) {
            var endForArrow = end;
            var startForOppositeArrow = start;
            if ((type === ArrowType.SchemaOneWay || type === ArrowType.SchemaTwoWay) && start.y !== end.y) {
                endForArrow = { x: start.x + 5, y: start.y };
                if (type === ArrowType.SchemaTwoWay || type === ArrowType.DirectTwoWay) {
                    startForOppositeArrow = { x: end.x - 5, y: end.y };
                }
            }
            var arrowPaths = this.getArrowhead(start, endForArrow);
            if (type === ArrowType.SchemaTwoWay || type === ArrowType.DirectTwoWay) {
                var arrowPath = this.getArrowhead(end, startForOppositeArrow);
                for (var i = 0; i < arrowPath.length; i++) {
                    arrowPaths.push(arrowPath[i]);
                }
            }
            return [
                {
                    data: {
                        path: (type === ArrowType.SchemaOneWay || type === ArrowType.SchemaTwoWay)
                            ? this.getSchemaLine(start, end)
                            : this.getDirectLine(start, end),
                        stroke: "#000000",
                        strokeWidth: 2
                    }
                }, {
                    data: {
                        path: arrowPaths,
                        stroke: "#000000",
                        strokeWidth: 2,
                        lineJoin: "miter"
                    }
                }
            ];
        };
        return Arrow;
    })();
    JirglStructures.Arrow = Arrow;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=arrow.js.map