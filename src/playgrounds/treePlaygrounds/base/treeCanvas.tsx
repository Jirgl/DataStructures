import * as React from 'react';
import { ArrowType } from '../../../components/canvas/arrow';
import { Canvas } from '../../../components/canvas/canvas';
import { TreeGrid } from './treeGrid';
import { TreeIterator } from './treeIterator';

export interface ITreeCanvasProps {
    arrowType: ArrowType;
    iterator: TreeIterator;
    width: number;
}

export const TreeCanvas = (props: ITreeCanvasProps) => {
    const grid = new TreeGrid(props.width, props.iterator);
    return (<Canvas
        arrowType={props.arrowType}
        arrows={grid.arrows}
        items={grid.items}
        height={grid.height}
        width={grid.width}
        zoom={grid.zoom}
    />);
};
