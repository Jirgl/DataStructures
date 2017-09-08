import { action, observable } from 'mobx';
import { Structure } from './graphicalStructure';
import { ListIterator } from '../common/listIterator';

class DoublyLinkedListStore {
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
    private structure: Structure;
    @observable iterator: ListIterator;
    @observable selectedAction: number = 0;
    @observable selectedSettings: number = 0;

    constructor() {
        this.structure = new Structure();
        this.structure.addLastItem('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'add': {
                'first': (content: string) => this.structure.addFirstItem(content),
                'predecessor': (content: string) => this.structure.addPreviousItem(content),
                'successor': (content: string) => this.structure.addNextItem(content),
                'last': (content: string) => this.structure.addLastItem(content)
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
        this.iterator = this.structure.getIterator();
    }
}

export const store = new DoublyLinkedListStore();