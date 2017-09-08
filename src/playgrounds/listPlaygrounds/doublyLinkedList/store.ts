import { action, observable } from 'mobx';
import { IAction, IParameter } from '../../../components/controlBar';
import { Structure } from './graphicalStructure';
import { ListIterator } from '../base/listIterator';

class DoublyLinkedListStore {
    actions: IAction[] = [
        { title: 'add' },
        { title: 'remove' }
    ];
    parameters: IParameter[] = [
        { title: 'first', disabled: false },
        { title: 'predecessor', disabled: false },
        { title: 'current', disabled: true },
        { title: 'successor', disabled: false },
        { title: 'last', disabled: false }
    ];

    private structureFunctions: { [action: string]: { [parameters: string]: (content?: string) => void } };
    private structure: Structure;
    @observable iterator: ListIterator;
    @observable selectedAction: number = 0;
    @observable selectedParameter: number = 0;

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
            this.parameters[2].disabled = false;
        } else {
            this.parameters[2].disabled = true;
            if (this.selectedParameter === 2) this.selectedParameter = 0;
        }
    }

    @action.bound
    setParameter(value: number) {
        this.selectedParameter = value;
    }

    @action.bound
    execute(content?: string) {
        const action = this.actions[this.selectedAction].title;
        const parameter = this.parameters[this.selectedParameter].title;
        this.structureFunctions[action][parameter](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new DoublyLinkedListStore();