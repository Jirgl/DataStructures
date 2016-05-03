export enum ArrowType {
    DirectOneWay,
    DirectTwoWay,
    SchemaOneWay,
    SchemaTwoWay
}

let arrowLength = 10;
let itemBorder = 20;
let arrowAngle = 30;

function getArrowhead(startX: number, startY: number, endX: number, endY: number): any {
    let currentAngle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    let angle = currentAngle + arrowAngle;
    let arrowStartX = Math.round(arrowLength * Math.cos(angle * Math.PI / 180));
    let arrowStartY = Math.round(arrowLength * Math.sin(angle * Math.PI / 180));

    angle = currentAngle - arrowAngle;
    let arrowEndX = Math.round(arrowLength * Math.cos(angle * Math.PI / 180));
    let arrowEndY = Math.round(arrowLength * Math.sin(angle * Math.PI / 180));

    return [
        'M', startX + arrowStartX, startY + arrowStartY,
        'L', startX, startY,
        'L', startX + arrowEndX, startY + arrowEndY
    ];
}

function getDirectLine(startX: number, startY: number, endX: number, endY: number): any {
    return [
        'M', startX, startY,
        'L', endX, endY
    ];
}

function getSchemaLine(startX: number, startY: number, endX: number, endY: number): any {
    if (startX < endX) {
        return [
            'M', startX, startY,
            'L', startX + ((endX - startX) / 2), startY,
            'L', startX + ((endX - startX) / 2), startY + (endY - startY),
            'L', endX, endY
        ];
    } else {
        return [
            'M', startX, startY,
            'L', startX + itemBorder, startY,
            'L', startX + itemBorder, startY + ((endY - startY) / 2),
            'L', endX - itemBorder, startY + ((endY - startY) / 2),
            'L', endX - itemBorder, endY,
            'L', endX, endY
        ];
    }
}

export function create(startX: number, startY: number, endX: number, endY: number, type: ArrowType): any {
    let endForArrowX = endX;
    let endForArrowY = endY;
    let startForOppositeArrowX = startX;
    let startForOppositeArrowY = startY;

    if ((type === ArrowType.SchemaOneWay || type === ArrowType.SchemaTwoWay) && startY !== endY) {
        endForArrowX = startX + 5;
        endForArrowY = startY;

        if (type === ArrowType.SchemaTwoWay || type === ArrowType.DirectTwoWay) {
            startForOppositeArrowX = endX - 5;
            startForOppositeArrowY = endY;
        }
    }

    let arrowPaths = getArrowhead(startX, startY, endForArrowX, endForArrowY);
    if (type === ArrowType.SchemaTwoWay || type === ArrowType.DirectTwoWay) {
        let arrowPath = getArrowhead(endX, endY, startForOppositeArrowX, startForOppositeArrowY);
        for (let i = 0; i < arrowPath.length; i++) {
            arrowPaths.push(arrowPath[i]);
        }
    }

    return [
        {
            data: {
                path: (type === ArrowType.SchemaOneWay || type === ArrowType.SchemaTwoWay)
                    ? getSchemaLine(startX, startY, endX, endY)
                    : getDirectLine(startX, startY, endX, endY),
                stroke: '#000000',
                strokeWidth: 2
            }
        }, {
            data: {
                path: arrowPaths,
                stroke: '#000000',
                strokeWidth: 2,
                lineJoin: 'miter'
            }
        }
    ];
}
