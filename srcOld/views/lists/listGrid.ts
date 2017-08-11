import * as b from 'bobril';
import { ArrowType } from '../../components/arrow';
import { itemProps } from '../../components/item';
import { IGrid, ArrowPosition, Position } from '../../components/grid';
import { PagePadding } from '../../compositions/page';
import { ListIterator } from './graphicalEnricher/listIterator';

export class ListGrid implements IGrid {
    private iterator: ListIterator;

    constructor(iterator: ListIterator) {
        this.iterator = iterator;
    }

    getArrowType(): ArrowType {
        return ArrowType.SchemaTwoWay;
    }

    getPosition(): Position {
        return this.getItemPosition(this.iterator.orderOfItem);
    }

    getPositionOfPreviousItem(): Position {
        if (this.iterator.orderOfItem > 1) {
            return this.getItemPosition(this.iterator.orderOfItem - 1);
        } else {
            return undefined;
        }
    }

    private getItemPosition(orderOfItem: number): Position {
        const itemWidthWithMargin = (itemProps.size + (itemProps.margin * 2));
        const itemsPerLine = Math.floor(this.getWidth() / itemWidthWithMargin);

        return {
            x: ((orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
            y: Math.floor((orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
        };
    }

    getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[] {
        return [{
            start: {
                x: previousPosition.x + itemProps.size + itemProps.margin + itemProps.arrowMargin,
                y: previousPosition.y + itemProps.size / 2 + itemProps.margin
            },
            end: {
                x: position.x + itemProps.margin - itemProps.arrowMargin,
                y: position.y + itemProps.size / 2 + itemProps.margin
            }
        }];
    }

    getWidth(): number {
        return b.getMedia().width - (PagePadding * 2) - 50;
    }
}
