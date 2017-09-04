import { itemSettings } from '../../components/canvas/item';
import { IGrid, IArrowPosition, IPosition } from '../../components/canvas/grid';

export class ListGrid implements IGrid {//TODO write test
    private width: number;

    constructor(width: number) {
        this.width = width;
    }

    getPositionOfItemAtIndex(index: number): IPosition {
        return this.getItemPosition(index);
    }

    getArrowsPositions(previousPosition: IPosition, position: IPosition): IArrowPosition[] {
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

    private getItemPosition(index: number): IPosition {
        const itemWidthWithMargin = (itemSettings.size + (itemSettings.margin.outer * 2));
        const itemsPerLine = Math.floor(this.width / itemWidthWithMargin);

        return {
            x: ((index - 1) % itemsPerLine) * itemWidthWithMargin,
            y: Math.floor((index - 1) / itemsPerLine) * itemWidthWithMargin
        };
    }
}
