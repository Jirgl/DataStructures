import * as React from 'react';
import * as Colors from 'material-ui/styles/colors';
import { IPosition } from './position';

const doubleLineDistance = 5;

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

export interface IArrowPosition {
    start: IPosition;
    end: IPosition;
}

export interface IArrowProps {
    type: ArrowType;
    start: IPosition
    end: IPosition;
}

function getHeadDefinition(start: IPosition, end: IPosition): string {
    const currentAngle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
    let angle = currentAngle + arrowSettings.angle;
    const arrowStartX = Math.round(arrowSettings.length * Math.cos(angle * Math.PI / 180));
    const arrowStartY = Math.round(arrowSettings.length * Math.sin(angle * Math.PI / 180));

    angle = currentAngle - arrowSettings.angle;
    const arrowEndX = Math.round(arrowSettings.length * Math.cos(angle * Math.PI / 180));
    const arrowEndY = Math.round(arrowSettings.length * Math.sin(angle * Math.PI / 180));

    return [
        'M', start.x + arrowStartX, start.y + arrowStartY,
        'L', start.x, start.y,
        'L', start.x + arrowEndX, start.y + arrowEndY
    ].join(' ');
}

function getDirectLineDefinition(start: IPosition, end: IPosition): string {
    return [
        'M', start.x, start.y,
        'L', end.x, end.y
    ].join(' ');
}

function getSchemaLineDefinition(start: IPosition, end: IPosition, doubleLine: boolean): string {
    let elements;
    if (start.x < end.x) {
        elements = doubleLine
            ? [
                'M', start.x, start.y - doubleLineDistance,
                'L', start.x + ((end.x - start.x) / 2), start.y - doubleLineDistance,
                'L', start.x + ((end.x - start.x) / 2), start.y + (end.y - start.y) - doubleLineDistance,
                'L', end.x, end.y - doubleLineDistance,
                'M', start.x, start.y + doubleLineDistance,
                'L', start.x + ((end.x - start.x) / 2), start.y + doubleLineDistance,
                'L', start.x + ((end.x - start.x) / 2), start.y + (end.y - start.y) + doubleLineDistance,
                'L', end.x, end.y + doubleLineDistance
            ]
            : [
                'M', start.x, start.y,
                'L', start.x + ((end.x - start.x) / 2), start.y,
                'L', start.x + ((end.x - start.x) / 2), start.y + (end.y - start.y),
                'L', end.x, end.y
            ];
    } else {
        elements = doubleLine
            ? [
                'M', start.x, start.y - doubleLineDistance,
                'L', start.x - doubleLineDistance + arrowSettings.itemBorder, start.y - doubleLineDistance,
                'L', start.x - doubleLineDistance + arrowSettings.itemBorder, start.y + ((end.y - start.y) / 2) - doubleLineDistance,
                'L', end.x - arrowSettings.itemBorder, start.y + ((end.y - start.y) / 2) - doubleLineDistance,
                'L', end.x - arrowSettings.itemBorder, end.y - doubleLineDistance,
                'L', end.x, end.y - doubleLineDistance,
                'M', start.x, start.y + doubleLineDistance,
                'L', start.x + arrowSettings.itemBorder, start.y + doubleLineDistance,
                'L', start.x + arrowSettings.itemBorder, start.y + ((end.y - start.y) / 2) + doubleLineDistance,
                'L', end.x + doubleLineDistance - arrowSettings.itemBorder, start.y + ((end.y - start.y) / 2) + doubleLineDistance,
                'L', end.x + doubleLineDistance - arrowSettings.itemBorder, end.y + doubleLineDistance,
                'L', end.x, end.y + doubleLineDistance
            ]
            : [
                'M', start.x, start.y,
                'L', start.x + arrowSettings.itemBorder, start.y,
                'L', start.x + arrowSettings.itemBorder, start.y + ((end.y - start.y) / 2),
                'L', end.x - arrowSettings.itemBorder, start.y + ((end.y - start.y) / 2),
                'L', end.x - arrowSettings.itemBorder, end.y,
                'L', end.x, end.y
            ];
    }

    return elements.join(' ');
}

function getLine(props: IArrowProps): string {
    return (props.type === ArrowType.SchemaOneWay || props.type === ArrowType.SchemaTwoWay)
        ? getSchemaLineDefinition(props.start, props.end, props.type === ArrowType.SchemaTwoWay)
        : getDirectLineDefinition(props.start, props.end);
}

function getHead(props: IArrowProps): string {
    if (props.type === ArrowType.SchemaOneWay && props.start.x > props.end.x) {
        return getHeadDefinition(props.end, { x: props.end.x - 1, y: props.end.y });
    } else if (props.type === ArrowType.SchemaTwoWay && props.start.x > props.end.x) {
        let arrows = getHeadDefinition(
            { x: props.end.x, y: props.end.y - doubleLineDistance },
            { x: props.end.x - 1, y: props.end.y - doubleLineDistance }
        );
        arrows += ' ';
        arrows += getHeadDefinition(
            { x: props.start.x, y: props.start.y + doubleLineDistance },
            { x: props.start.x + 1, y: props.start.y + doubleLineDistance }
        );

        return arrows;
    } else if (props.type === ArrowType.SchemaTwoWay) {
        let arrows = getHeadDefinition(
            { x: props.end.x, y: props.end.y - doubleLineDistance },
            { x: props.start.x, y: props.start.y - doubleLineDistance }
        );
        arrows += ' ';
        arrows += getHeadDefinition(
            { x: props.start.x, y: props.start.y + doubleLineDistance },
            { x: props.end.x, y: props.end.y + doubleLineDistance }
        );

        return arrows;
    }

    return getHeadDefinition(props.end, props.start);
}

export const Arrow = (props: IArrowProps) => <g>
    <path d={getLine(props)} stroke={Colors.grey400} fill={'none'} />
    <path d={getHead(props)} stroke={Colors.grey400} fill={'none'} />
</g>;
