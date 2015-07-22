module JirglStructures.GuiExtender {
    export class GuiDoublyLinkedList extends Lists.DoublyLinkedList<GuiItem> {
        getCurrentGuiItem(): Lists.Item<GuiItem> {
            return this.currentItem;
        }

        getFirstGuiItem(): Lists.Item<GuiItem> {
            return this.firstItem;
        }

        getIterator(): GuiListIterator {
            return new GuiListIterator(this.firstItem, this.currentItem);
        }
    }
}