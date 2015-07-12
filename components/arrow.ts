/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export enum Type {
        Direct,
        Schema
    }

    function drawSchemaLine(start: Position, end: Position): any {
        var startArrowhead: Position = { x: end.x - 10, y: end.y - 10 };
        var middleArrowhead: Position = { x: end.x, y: end.y };
        var endArrowhead: Position = { x: end.x - 10, y: end.y + 10 };
        var path: any[] = undefined;

        if (start.y === end.y && start.x < end.x) {
            path = ["M", start.x, start.y, "L", end.x, end.y];
        } else if (start.y === end.y && start.x > end.x) {

        } else if (start.x === end.x && start.y < end.y) {

        } else if (start.x === end.x && start.y > end.y) {

        } else if (start.x > end.x && start.y < end.y) {
            path = [
                "M", start.x, start.y,
                "L", start.x + 15, start.y,
                "L", start.x + 15, start.y + ((end.y - start.y) / 2),
                "L", end.x - 15, start.y + ((end.y - start.y) / 2),
                "L", end.x - 15, end.y,
                "L", end.x, end.y
            ];
        }

        return [
            {
                data: {
                    path: path,
                    stroke: "#000000",
                    strokeWidth: 3
                }
            }, {
                data: {
                    path: [
                        "M", startArrowhead.x, startArrowhead.y,
                        "L", middleArrowhead.x, middleArrowhead.y,
                        "L", endArrowhead.x, endArrowhead.y
                    ],
                    stroke: "#000000",
                    strokeWidth: 3,
                    lineJoin: "miter"
                }
            }
        ];
    }

    export function arrow(arrowPostion: ArrowPosition, type: Type): any {
        if (type === Type.Schema) {
            return drawSchemaLine(arrowPostion.start, arrowPostion.end);
        } else if (type === Type.Direct) {

        }

        return undefined;
    }
}