import * as React from 'react';
import { Arrow, ArrowType, IArrowPosition } from './arrow';
import { IPosition } from './position';
import { Block } from '../block';
import { Item } from './item';

const styles = {
    relative: { position: 'relative' }
};

export interface IItem {
    content: string;
    isActive: boolean;
    position: IPosition;
}

export interface ICanvasProps {
    arrowType: ArrowType;
    arrows: IArrowPosition[];
    items: IItem[];
    width: number;
    height: number;
}

export const Canvas = (props: ICanvasProps) => {
    const arrows = props.arrows.map(arrow =>
        <Arrow type={props.arrowType}
            start={arrow.start}
            end={arrow.end}
        />
    );

    const items = props.items.map(item =>
        <Item x={item.position.x} y={item.position.y} isActive={item.isActive}>
            {item.content}
        </Item>
    );

    const svgStyle = {
        // shapeRendering: 'crispEdges',
        width: props.width,
        height: props.height,
        // zIndex: 100
    };

    const blockStyle = Object.assign(
        {},
        styles.relative,
        { width: props.width, height: props.height }
    );

    return <Block style={blockStyle}>
        {[...items, (<svg style={svgStyle}>{arrows}</svg>)]}
    </Block>;
}
