/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export enum ArrowType {
        DirectOneWay,
        DirectTwoWay,
        SchemaOneWay,
        SchemaTwoWay
    }

    class Arrow {
        private axisOffset = 5;
        private arrowheadOffset = 7;
        private itemArrowOffset = 17;

        drawSchemaLine(start: Position, end: Position, type: ArrowType): any {
            var linePath: any[] = undefined;
            var arrowPath: any[] = undefined;

            if (type === ArrowType.SchemaOneWay) {
                arrowPath = [
                    "M", end.x - this.arrowheadOffset, end.y - this.arrowheadOffset,
                    "L", end.x, end.y,
                    "L", end.x - this.arrowheadOffset, end.y + this.arrowheadOffset
                ];
            } else if (type === ArrowType.SchemaTwoWay) {
                arrowPath = [
                    "M", end.x - this.arrowheadOffset, end.y - this.arrowheadOffset - this.axisOffset,
                    "L", end.x, end.y - this.axisOffset,
                    "L", end.x - this.arrowheadOffset, end.y + this.arrowheadOffset - this.axisOffset,
                    "M", start.x + this.arrowheadOffset, start.y - this.arrowheadOffset + this.axisOffset,
                    "L", start.x, start.y + this.axisOffset,
                    "L", start.x + this.arrowheadOffset, start.y + this.arrowheadOffset + this.axisOffset
                ];
            }

            if (start.y === end.y && start.x < end.x) {
                if (type === ArrowType.SchemaOneWay) {
                    linePath = ["M", start.x, start.y, "L", end.x, end.y];
                } else if (type === ArrowType.SchemaTwoWay) {
                    linePath = [
                        "M", start.x, start.y - this.axisOffset,
                        "L", end.x, end.y - this.axisOffset,
                        "M", end.x, end.y + this.axisOffset,
                        "L", start.x, start.y + this.axisOffset
                    ];
                }
            } else if (start.y === end.y && start.x > end.x) {

            } else if (start.x === end.x && start.y < end.y) {

            } else if (start.x === end.x && start.y > end.y) {

            } else if (start.x > end.x && start.y < end.y) {
                if (type === ArrowType.SchemaOneWay) {
                    linePath = [
                        "M", start.x, start.y,
                        "L", start.x + this.itemArrowOffset, start.y,
                        "L", start.x + this.itemArrowOffset, start.y + ((end.y - start.y) / 2),
                        "L", end.x - this.itemArrowOffset, start.y + ((end.y - start.y) / 2),
                        "L", end.x - this.itemArrowOffset, end.y,
                        "L", end.x, end.y
                    ];
                }else if (type === ArrowType.SchemaTwoWay) {
                    linePath = [
                        "M", start.x, start.y - this.axisOffset,
                        "L", start.x + this.itemArrowOffset + this.axisOffset, start.y - this.axisOffset,
                        "L", start.x + this.itemArrowOffset + this.axisOffset, start.y + ((end.y - start.y) / 2) + this.axisOffset,
                        "L", end.x - this.itemArrowOffset + this.axisOffset, start.y + ((end.y - start.y) / 2) + this.axisOffset,
                        "L", end.x - this.itemArrowOffset + this.axisOffset, end.y - this.axisOffset,
                        "L", end.x, end.y - this.axisOffset,
                        "M", start.x, start.y + this.axisOffset,
                        "L", start.x + this.itemArrowOffset - this.axisOffset, start.y + this.axisOffset,
                        "L", start.x + this.itemArrowOffset - this.axisOffset, start.y + ((end.y - start.y) / 2) - this.axisOffset,
                        "L", end.x - this.itemArrowOffset - this.axisOffset, start.y + ((end.y - start.y) / 2) - this.axisOffset,
                        "L", end.x - this.itemArrowOffset - this.axisOffset, end.y + this.axisOffset,
                        "L", end.x, end.y + this.axisOffset
                    ];
                }
            }

            return [
                {
                    data: {
                        path: linePath,
                        stroke: "#000000",
                        strokeWidth: 2
                    }
                }, {
                    data: {
                        path: arrowPath,
                        stroke: "#000000",
                        strokeWidth: 2,
                        lineJoin: "miter"
                    }
                }
            ];
        }

        drawLine(start: Position, end: Position, type: ArrowType): any {
            if (type === ArrowType.SchemaOneWay || type === ArrowType.SchemaTwoWay) {
                return this.drawSchemaLine(start, end, type);
            }

            var linePath = ["M", start.x, start.y, "L", end.x, end.y];
            return [
                {
                    data: {
                        path: linePath,
                        stroke: "#000000",
                        strokeWidth: 2
                    }
                }/*, {
                    data: {
                        path: arrowPath,
                        stroke: "#000000",
                        strokeWidth: 2,
                        lineJoin: "miter"
                    }
                }*/
            ];
        }
    }

    export function arrow(arrowPostion: ArrowPosition, type: ArrowType): any {
        if (type === ArrowType.SchemaOneWay || type === ArrowType.SchemaTwoWay) {
            return new Arrow().drawSchemaLine(arrowPostion.start, arrowPostion.end, type);
        } else if (type === ArrowType.DirectOneWay || type === ArrowType.DirectTwoWay) {
            return new Arrow().drawLine(arrowPostion.start, arrowPostion.end, type);
        }

        return undefined;
    }
}