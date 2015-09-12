/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export enum ArrowType {
        DirectOneWay,
        DirectTwoWay,
        SchemaOneWay,
        SchemaTwoWay
    }

    export class Arrow {
        private arrowLength = 10;
        private itemBorder = 20;
        private arrowAngle = 30;

        private getArrowhead(start: Position, end: Position): any {
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
        }

        private getDirectLine(start: Position, end: Position): any {
            return [
                "M", start.x, start.y,
                "L", end.x, end.y
            ];
        }

        private getSchemaLine(start: Position, end: Position): any {
            if (start.x < end.x) {
                return [
                    "M", start.x, start.y,
                    "L", start.x + ((end.x - start.x) / 2), start.y,
                    "L", start.x + ((end.x - start.x) / 2), start.y + (end.y - start.y),
                    "L", end.x, end.y
                ];
            } else {
                return [
                    "M", start.x, start.y,
                    "L", start.x + this.itemBorder, start.y,
                    "L", start.x + this.itemBorder, start.y + ((end.y - start.y) / 2),
                    "L", end.x - this.itemBorder, start.y + ((end.y - start.y) / 2),
                    "L", end.x - this.itemBorder, end.y,
                    "L", end.x, end.y
                ];
            }
        }

        getArrowPath(start: Position, end: Position, type: ArrowType): any {
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
        }
    }
}