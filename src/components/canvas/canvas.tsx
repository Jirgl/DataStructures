import * as React from 'react';
import { IIterator } from 'jirgl-data-structures';
import { Arrow } from './arrow';
import { IGrid } from './grid';
import { Block } from '../block';
import { Item, itemSettings } from './item';

const styles = {
    relative: { position: 'relative' }
};

export interface IContent {
    content: string;
    isHighlighted: boolean;
}

export interface ICanvasProps {
    iterator: IIterator<IContent>;
    getIndexOfCurrentIteratorItem: () => number;
    grid: IGrid;
}

export const Canvas = (props: ICanvasProps) => {
    const arrows: React.ReactChild[] = [];
    const children: React.ReactChild[] = [];
    let maxHeight = itemSettings.size + (2 * itemSettings.margin.outer);
    let index = 0;

    while (props.iterator.hasNext()) {
        const guiItem = props.iterator.next();
        const position = props.grid.getPosition();
        const previousPosition = props.grid.getPositionOfPreviousItem();
        children.push(
            <Item x={position.x} y={position.y} isActive={props.getIndexOfCurrentIteratorItem() === index}>
                {guiItem.content}
            </Item>
        );

        index++;
        if (previousPosition) {
            props.grid.getArrowsPositions(previousPosition, position)
                .forEach((item) => {
                    arrows.push(
                        <Arrow type={props.grid.getArrowType()}
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
        width: props.grid.getWidth(),
        height: maxHeight,
        zIndex: 100
    };
    children.push(<svg style={svgStyle}>{arrows}</svg>);

    return <Block style={Object.assign({}, styles.relative, { width: props.grid.getWidth(), height: maxHeight })}>
        {children}
    </Block>;
}
