import { IArrowPosition } from '../../../components/canvas/arrow';
import { IItem } from '../../../components/canvas/canvas';
import { IPosition } from '../../../components/canvas/position';
import { itemSettings } from '../../../components/canvas/item';
import { TreeIterator } from './treeIterator';

const levelHeight = 80;
const itemWidthWithMargin = itemSettings.size + (itemSettings.margin.outer);

export class TreeGrid {
    arrows: IArrowPosition[] = [];
    items: IItem[] = [];
    private maxDepth: number = 0;
    private treeWidth: number = 0;

    constructor(private awidth: number, iterator: TreeIterator) {
        this.findMaxDepth(iterator);
        this.treeWidth = Math.pow(2, this.maxDepth) * itemWidthWithMargin;

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

            if (item.currentNodePosition.depth > this.maxDepth) {
                this.maxDepth = item.currentNodePosition.depth;
            }
        }
    }

    get height(): number {
        return (this.maxDepth + 1) * (levelHeight + itemSettings.size);
    }

    get width(): number {
        return this.treeWidth;
    }

    get zoom(): number {
        const scale = this.awidth / this.treeWidth * 100;
        return scale < 100 ? scale : 100;
    }

    private findMaxDepth(iterator: TreeIterator) {
        iterator.reset();
        while (iterator.hasNext()) {
            const item = iterator.next();

            if (item.currentNodePosition.depth > this.maxDepth) {
                this.maxDepth = item.currentNodePosition.depth;
            }
        }
    }

    private getItemPosition(depth: number, orderInLevel: number): IPosition {
        const countInLevel = Math.pow(2, depth);
        const widthPerItem = this.treeWidth / countInLevel;

        return {
            x: orderInLevel * widthPerItem + widthPerItem / 2 - itemWidthWithMargin / 2,
            y: depth * (itemWidthWithMargin + 30)
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
