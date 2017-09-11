import { IArrowPosition } from '../../../components/canvas/arrow';
import { IItem } from '../../../components/canvas/canvas';
import { IPosition } from '../../../components/canvas/position';
import { itemSettings } from '../../../components/canvas/item';
import { ListIterator } from './listIterator';

const itemSizeWithMargin = (itemSettings.size + (itemSettings.margin.outer * 2));

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

    public get height(): number {
        const itemsPerLine = Math.floor(this.width / itemSizeWithMargin);
        const numberOfLines = Math.ceil(this.items.length / itemsPerLine);

        return numberOfLines * itemSizeWithMargin;
    }

    private getItemPosition(index: number): IPosition {
        const itemsPerLine = Math.floor(this.width / itemSizeWithMargin);

        return {
            x: (index % itemsPerLine) * itemSizeWithMargin,
            y: Math.floor(index / itemsPerLine) * itemSizeWithMargin
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
