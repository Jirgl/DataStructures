module JirglStructures
{
    export class GuiQueue extends Lists.Queue<GuiItem> {
        private guiList: GuiDoublyLinkedList;

        getFirstGuiItem(): Lists.Item<GuiItem> {
            return this.guiList.getFirstGuiItem();
        }
    }
}