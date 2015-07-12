/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    (function (Type) {
        Type[Type["Direct"] = 0] = "Direct";
        Type[Type["Schema"] = 1] = "Schema";
    })(JirglStructures.Type || (JirglStructures.Type = {}));
    var Type = JirglStructures.Type;
    function drawSchemaLine(start, end) {
        var startArrowhead = { x: end.x - 10, y: end.y - 10 };
        var middleArrowhead = { x: end.x, y: end.y };
        var endArrowhead = { x: end.x - 10, y: end.y + 10 };
        var path = undefined;
        if (start.y === end.y && start.x < end.x) {
            path = ["M", start.x, start.y, "L", end.x, end.y];
        }
        else if (start.y === end.y && start.x > end.x) {
        }
        else if (start.x === end.x && start.y < end.y) {
        }
        else if (start.x === end.x && start.y > end.y) {
        }
        else if (start.x > end.x && start.y < end.y) {
            path = [
                "M",
                start.x,
                start.y,
                "L",
                start.x + 15,
                start.y,
                "L",
                start.x + 15,
                start.y + ((end.y - start.y) / 2),
                "L",
                end.x - 15,
                start.y + ((end.y - start.y) / 2),
                "L",
                end.x - 15,
                end.y,
                "L",
                end.x,
                end.y
            ];
        }
        return [
            {
                data: {
                    path: path,
                    stroke: "#000000",
                    strokeWidth: 3
                }
            },
            {
                data: {
                    path: [
                        "M",
                        startArrowhead.x,
                        startArrowhead.y,
                        "L",
                        middleArrowhead.x,
                        middleArrowhead.y,
                        "L",
                        endArrowhead.x,
                        endArrowhead.y
                    ],
                    stroke: "#000000",
                    strokeWidth: 3,
                    lineJoin: "miter"
                }
            }
        ];
    }
    function arrow(arrowPostion, type) {
        if (type === 1 /* Schema */) {
            return drawSchemaLine(arrowPostion.start, arrowPostion.end);
        }
        else if (type === 0 /* Direct */) {
        }
        return undefined;
    }
    JirglStructures.arrow = arrow;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=arrow.js.map