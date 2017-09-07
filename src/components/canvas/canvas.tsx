import * as React from 'react';
import { IIterator } from 'jirgl-data-structures';
import { Arrow, ArrowType } from './arrow';
import { IGrid } from './grid';
import { Block } from '../block';
import { Item, itemSettings } from './item';

const styles = {
    relative: { position: 'relative' }
};

export interface IGraphicalContent {
    content: string;
    isActive: boolean;
}

export interface ICanvasProps {
    arrowType: ArrowType;
    grid: IGrid;
    iterator: IIterator<IGraphicalContent>;
    width: number;
}

export const Canvas = (props: ICanvasProps) => {
    const arrows: React.ReactChild[] = [];
    const children: React.ReactChild[] = [];
    let maxHeight = itemSettings.size + (2 * itemSettings.margin.outer);
    let index = 0;

    props.iterator.reset();
    while (props.iterator.hasNext()) {
        const currentItem = props.iterator.next();
        const position = props.grid.getPositionOfItemAtIndex(index);
        children.push(
            <Item x={position.x} y={position.y} isActive={currentItem.isActive}>
                {currentItem.content}
            </Item>
        );

        index++;
        if (index > 0) {
            const previousPosition = props.grid.getPositionOfItemAtIndex(index - 1);
            props.grid.getArrowsPositions(previousPosition, position)
                .forEach((item) => {
                    arrows.push(
                        <Arrow type={props.arrowType}
                            startX={item.start.x}
                            startY={item.start.y}
                            endX={item.end.x}
                            endY={item.end.y}
                        />
                    );
                });
        }

        const currentHeight = position.y + itemSettings.size + (2 * itemSettings.margin.outer);
        if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
        }
    }

    const svgStyle = {
        //shapeRendering: 'crispEdges',
        width: props.width,
        height: maxHeight,
        zIndex: 100
    };
    children.push(<svg style={svgStyle}>{arrows}</svg>);

    return <Block style={Object.assign({}, styles.relative, { width: props.width, height: maxHeight })}>
        {children}
    </Block>;
}
