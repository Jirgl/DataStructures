import { IArrowPosition, IItem, IPosition } from '../../../components/canvas/canvas';
import { itemSettings } from '../../../components/canvas/item';
import { ListIterator } from './listIterator';

export class ListGrid {
    arrows: IArrowPosition[] = [];
    items: IItem[] = [];

    constructor(private width: number, iterator: ListIterator) {
        iterator.reset();
        while (iterator.hasNext()) {
            const item = iterator.next();
            const currentPosition = this.getItemPosition(item.index);
            this.items.push({
                content: item.content,
                isActive: item.isActive,
                position: currentPosition
            });

            if (item.previousIndex >= 0) {
                this.arrows.push(...this.getArrowsPositions(this.getItemPosition(item.previousIndex), currentPosition));
            }
        }
    }

    private getItemPosition(index: number): IPosition {
        const itemWidthWithMargin = (itemSettings.size + (itemSettings.margin.outer * 2));
        const itemsPerLine = Math.floor(this.width / itemWidthWithMargin);

        return {
            x: (index % itemsPerLine) * itemWidthWithMargin,
            y: Math.floor(index / itemsPerLine) * itemWidthWithMargin
        };
    }

    private getArrowsPositions(previousPosition: IPosition, position: IPosition): IArrowPosition[] {
        return [{
            start: {
                x: previousPosition.x + itemSettings.size + itemSettings.margin.outer + itemSettings.margin.inner,
                y: previousPosition.y + itemSettings.size / 2 + itemSettings.margin.outer
            },
            end: {
                x: position.x + itemSettings.margin.outer - itemSettings.margin.inner,
                y: position.y + itemSettings.size / 2 + itemSettings.margin.outer
            }
        }];
    }
}
