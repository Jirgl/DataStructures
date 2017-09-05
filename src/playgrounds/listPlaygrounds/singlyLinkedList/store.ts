import { action, observable } from 'mobx';
import { SinglyLinkedList, IIterator } from 'jirgl-data-structures';

class SinglyLinkedListStore {
    actions = [
        { title: 'add', disabled: false },
        { title: 'remove', disabled: false }
    ];
    settings = [
        { title: 'first', disabled: false },
        { title: 'predecessor', disabled: false },
        { title: 'current', disabled: true },
        { title: 'successor', disabled: false },
        { title: 'last', disabled: false }
    ];

    private structureFunctions: { [action: string]: { [settings: string]: (content?: string) => void } };

    private structure: SinglyLinkedList.Structure<string, string>;
    @observable selectedAction: number = 0;
    @observable selectedSettings: number = 0;

    constructor() {
        this.structure = new SinglyLinkedList.Structure<string, string>();
        this.structure.addLastItem('3', '3');
        this.structure.addLastItem('4', '4');
        this.structure.addLastItem('5', '5');

        this.structureFunctions = {
            'add': {
                'first': (content: string) => this.structure.addFirstItem(content, content),
                'predecessor': (content: string) => this.structure.addPreviousItem(content, content),
                'successor': (content: string) => this.structure.addNextItem(content, content),
                'last': (content: string) => this.structure.addLastItem(content, content)
            },
            'remove': {
                'first': () => this.structure.removeFirstItem(),
                'predecessor': () => this.structure.removePreviousItem(),
                'current': () => this.structure.removeCurrentItem(),
                'successor': () => this.structure.removeNextItem(),
                'last': () => this.structure.removeLastItem()
            }
        };
    }

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
        if (value === 1) {
            this.settings[2].disabled = false;
        } else {
            this.settings[2].disabled = true;
            if (this.selectedSettings === 2) this.selectedSettings = 0;
        }
    }

    @action.bound
    setSettings(value: number) {
        this.selectedSettings = value;
    }

    @action.bound
    execute(content?: string) {
        const action = this.actions[this.selectedAction].title;
        const settings = this.settings[this.selectedSettings].title;
        this.structureFunctions[action][settings](content);
    }

    getIterator(): IIterator<string> {
        return this.structure.getIterator();
    }
}

export const store = new SinglyLinkedListStore();