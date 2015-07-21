module JirglStructures.GuiExtender {
    export class GuiQueue<T> {
        private guiList: GuiDoublyLinkedList<T>;

        constructor() {
            this.guiList = new GuiDoublyLinkedList<T>();
        }

        clear(): void {
            this.guiList.clear();
        }

        isEmpty(): boolean {
            return this.guiList.isEmpty();
        }

        getFirstGuiItem(): Lists.Item<GuiItem<T>> {
            return this.guiList.getFirstGuiItem();
        }

        enqueue(item: GuiItem<T>): void {
            this.guiList.addLastItem(item);
        }

        dequeue(): GuiItem<T> {
            return this.guiList.removeFirstItem();
        }

        getIterator(): GuiListIterator<T> {
            return new GuiListIterator<T>(this.getFirstGuiItem());
        }
    }
}