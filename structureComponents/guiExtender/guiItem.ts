module JirglStructures.GuiExtender {
    //this type is returning from next() function of iterator and contains information about key
    export interface IGuiItem {
        key: string;
        data: string;
        isCurrent: boolean;
    }

    export class GuiItem {
        data: string;
        isCurrent: boolean;

        constructor(data: string) {
            this.data = data;
        }
    }
}