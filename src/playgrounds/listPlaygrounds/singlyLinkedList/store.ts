import { action, observable } from 'mobx';
import { Structure } from './graphicalStructure';
import { ListIterator } from '../base/listIterator';
import { StructureFunctionsType } from '../../base/types';

class SinglyLinkedListStore {
    private structureFunctions: StructureFunctionsType;
    private structure: Structure;
    @observable iterator: ListIterator;
    @observable selectedAction: string;
    @observable selectedParameter: string;

    constructor() {
        this.structure = new Structure();
        this.structure.addLastItem('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'add': {
                disableContent: false,
                params: {
                    'first': (content: string) => this.structure.addFirstItem(content),
                    'predecessor': (content: string) => this.structure.addPreviousItem(content),
                    'successor': (content: string) => this.structure.addNextItem(content),
                    'last': (content: string) => this.structure.addLastItem(content)
                }
            },
            'remove': {
                disableContent: true,
                params: {
                    'first': () => this.structure.removeFirstItem(),
                    'predecessor': () => this.structure.removePreviousItem(),
                    'current': () => this.structure.removeCurrentItem(),
                    'successor': () => this.structure.removeNextItem(),
                    'last': () => this.structure.removeLastItem()
                }
            }
        };
        this.setAction(Object.keys(this.structureFunctions)[0]);
    }

    get actions(): string[] {
        return Object.getOwnPropertyNames(this.structureFunctions);
    }

    get parameters(): string[] {
        return Object.getOwnPropertyNames(this.structureFunctions[this.selectedAction].params);
    }

    get isContentDisabled(): boolean {
        return this.structureFunctions[this.selectedAction].disableContent;
    }

    @action.bound
    setAction(value: string) {
        this.selectedAction = value;
        this.setParameter(Object.keys(this.structureFunctions[this.selectedAction].params)[0]);
    }

    @action.bound
    setParameter(value: string) {
        this.selectedParameter = value;
    }

    @action.bound
    execute(content?: string) {
        this.structureFunctions[this.selectedAction].params[this.selectedParameter](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new SinglyLinkedListStore();