import * as b from 'bobril';
import { ArrowType } from '../../components/arrow';
import { itemProps } from '../../components/item';
import { IGrid, ArrowPosition, Position } from '../grid';
import { TreeIterator } from './graphicalEnricher/treeIterator';

export class TreeGrid implements IGrid {
    private depth: number;
    private iterator: TreeIterator;
    private widthReduction = 450;
    private levelHeight = 80;

    constructor(depth: number, iterator: TreeIterator) {
        this.depth = depth;
        this.iterator = iterator;
    }

    getArrowType(): ArrowType {
        return ArrowType.DirectTwoWay;
    }

    getPosition(): Position {
        return this.getItemPosition(this.iterator.orderInLevel, this.iterator.depth);
    }

    getPositionOfPreviousItem(): Position {
        if (this.iterator.depth === 0) {
            return undefined;
        }

        let parentIndex = Math.floor((this.iterator.indexOfCurrentNode - 1) / 2);
        let parentOrderInLevel = (parentIndex + 1) - Math.pow(2, this.iterator.depth - 1);
        let position = this.getItemPosition(parentOrderInLevel, this.iterator.depth - 1);

        return position;
    }

    private getItemPosition(orderInLevel: number, depth: number): Position {
        let countInLevel = Math.pow(2, depth);
        let itemWidthWithMargin = itemProps.width + (itemProps.margin * 2);
        let widthPerItem = Math.max(this.getWidth() / countInLevel, itemWidthWithMargin);

        let height = 0;
        for (let i = depth; i > 0; i--) {
            height += (this.depth - i) * this.levelHeight;
        }

        return {
            x: orderInLevel * widthPerItem + widthPerItem / 2 - itemWidthWithMargin / 2,
            y: depth * itemWidthWithMargin + height
        };
    }

    getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[] {
        let childArrowOffset = position.x < previousPosition.x
            ? -itemProps.arrowMargin
            : itemProps.arrowMargin;

        return [
            {
                start: {
                    x: previousPosition.x + itemProps.width / 2 + itemProps.margin + childArrowOffset,
                    y: previousPosition.y + itemProps.height + itemProps.margin + itemProps.arrowMargin
                },
                end: {
                    x: position.x + itemProps.width / 2 + itemProps.margin,
                    y: position.y + itemProps.margin - itemProps.arrowMargin
                }
            }
        ];
    }

    getWidth(): number {
        let baseWidth = b.getMedia().width - this.widthReduction;
        let treeWidth = Math.pow(2, this.depth) * (itemProps.width + (2 * itemProps.margin));

        return Math.max(baseWidth, treeWidth);
    }
}
