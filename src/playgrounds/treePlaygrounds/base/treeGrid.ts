import { IArrowPosition } from '../../../components/canvas/arrow';
import { IItem } from '../../../components/canvas/canvas';
import { IPosition } from '../../../components/canvas/position';
import { itemSettings } from '../../../components/canvas/item';
import { TreeIterator } from './treeIterator';

const levelHeight = 80;

export class TreeGrid {
    arrows: IArrowPosition[] = [];
    items: IItem[] = [];

    constructor(private width: number, iterator: TreeIterator) {
        iterator.reset();
        while (iterator.hasNext()) {
            const item = iterator.next();
            const currentPosition = this.getItemPosition(
                item.currentNodePosition.depth,
                item.currentNodePosition.orderInLevel
            );
            this.items.push({
                content: item.content,
                isActive: item.isActive,
                position: currentPosition
            });

            if (item.previousNodePosition) {
                this.arrows.push(...this.getArrowsPositions(
                    this.getItemPosition(
                        item.previousNodePosition.depth,
                        item.previousNodePosition.orderInLevel
                    ), currentPosition)
                );
            }
        }
    }

    private getItemPosition(depth: number, orderInLevel: number): IPosition {
        let countInLevel = Math.pow(2, depth);
        let itemWidthWithMargin = itemSettings.size + (itemSettings.margin.outer * 2);
        let widthPerItem = Math.max(this.width / countInLevel, itemWidthWithMargin);

        let height = 0;
        for (let i = depth; i > 0; i--) {
            height += (depth - i) * levelHeight;
        }

        return {
            x: orderInLevel * widthPerItem + widthPerItem / 2 - itemWidthWithMargin / 2,
            y: depth * itemWidthWithMargin + height
        };
    }

    private getArrowsPositions(previousPosition: IPosition, position: IPosition): IArrowPosition[] {
        let childArrowOffset = position.x < previousPosition.x
            ? -itemSettings.margin.inner
            : itemSettings.margin.inner;

        return [
            {
                start: {
                    x: previousPosition.x + itemSettings.size / 2 + itemSettings.margin.outer + childArrowOffset,
                    y: previousPosition.y + itemSettings.size + itemSettings.margin.outer + itemSettings.margin.inner
                },
                end: {
                    x: position.x + itemSettings.size / 2 + itemSettings.margin.outer,
                    y: position.y + itemSettings.margin.outer - itemSettings.margin.inner
                }
            }
        ];
    }
}
