import * as React from 'react';
import { ArrowType } from '../../../components/canvas/arrow';
import { Canvas } from '../../../components/canvas/canvas';
import { ListGrid } from './listGrid';
import { ListIterator } from './listIterator';

export interface IListCanvasProps {
    arrowType: ArrowType;
    iterator: ListIterator;
    width: number;
}

export const ListCanvas = (props: IListCanvasProps) => {
    const grid = new ListGrid(props.width, props.iterator);
    return (<Canvas
        arrowType={props.arrowType}
        arrows={grid.arrows}
        items={grid.items}
        height={200}
        width={props.width}
    />);
};
