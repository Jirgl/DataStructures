module JirglStructures {
    export class GuiItem {
        content: string;
        isCurrent: boolean;
    }

    export interface IGuiIterator {
        hasNext(): boolean;
        nextGuiItem(): GuiItem;
        reset(): void;
    }
}