import * as React from 'react';

const arrowSettings = {
    length: 10,
    itemBorder: 20,
    angle: 30
}

export enum ArrowType {
    DirectOneWay,
    DirectTwoWay,
    SchemaOneWay,
    SchemaTwoWay
}

export interface IArrowProps {
    type: ArrowType;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

function getHeadDefinition(startX: number, startY: number, endX: number, endY: number): string {
    const currentAngle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    let angle = currentAngle + arrowSettings.angle;
    const arrowStartX = Math.round(arrowSettings.length * Math.cos(angle * Math.PI / 180));
    const arrowStartY = Math.round(arrowSettings.length * Math.sin(angle * Math.PI / 180));

    angle = currentAngle - arrowSettings.angle;
    const arrowEndX = Math.round(arrowSettings.length * Math.cos(angle * Math.PI / 180));
    const arrowEndY = Math.round(arrowSettings.length * Math.sin(angle * Math.PI / 180));

    return [
        'M', startX + arrowStartX, startY + arrowStartY,
        'L', startX, startY,
        'L', startX + arrowEndX, startY + arrowEndY
    ].join(' ');
}

function getDirectLineDefinition(startX: number, startY: number, endX: number, endY: number): string {
    return [
        'M', startX, startY,
        'L', endX, endY
    ].join(' ');
}

function getSchemaLineDefinition(startX: number, startY: number, endX: number, endY: number): string {
    let elements;
    if (startX < endX) {
        elements = [
            'M', startX, startY,
            'L', startX + ((endX - startX) / 2), startY,
            'L', startX + ((endX - startX) / 2), startY + (endY - startY),
            'L', endX, endY
        ];
    } else {
        elements = [
            'M', startX, startY,
            'L', startX + arrowSettings.itemBorder, startY,
            'L', startX + arrowSettings.itemBorder, startY + ((endY - startY) / 2),
            'L', endX - arrowSettings.itemBorder, startY + ((endY - startY) / 2),
            'L', endX - arrowSettings.itemBorder, endY,
            'L', endX, endY
        ];
    }

    return elements.join(' ');
}

function getLine(props: IArrowProps): string {
    return (props.type === ArrowType.SchemaOneWay || props.type === ArrowType.SchemaTwoWay)
        ? getSchemaLineDefinition(props.startX, props.startY, props.endX, props.endY)
        : getDirectLineDefinition(props.startX, props.startY, props.endX, props.endY);
}

function getHead(props: IArrowProps): string {
    let endForArrowX = props.endX;
    let endForArrowY = props.endY;
    let startForOppositeArrowX = props.startX;
    let startForOppositeArrowY = props.startY;

    if ((props.type === ArrowType.SchemaOneWay || props.type === ArrowType.SchemaTwoWay) && props.startY !== props.endY) {
        endForArrowX = props.startX + 5;
        endForArrowY = props.startY;

        if (props.type === ArrowType.SchemaTwoWay) {
            startForOppositeArrowX = props.endX - 5;
            startForOppositeArrowY = props.endY;
        }
    }

    return getHeadDefinition(props.endX, props.endY, startForOppositeArrowX, startForOppositeArrowY);
}

export const Arrow = (props: IArrowProps) => <g>
    <path d={getLine(props)} stroke={'red'} fill={'none'} />
    <path d={getHead(props)} stroke={'red'} fill={'none'} />
</g>;
