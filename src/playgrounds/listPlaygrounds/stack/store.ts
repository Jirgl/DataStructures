import { action, observable } from 'mobx';
import { Structure } from './graphicalStructure';
import { ListIterator } from '../base/listIterator';
import { StructureFunctionsType } from '../../base/types';

class StackStore {
    private structureFunctions: StructureFunctionsType;
    private structure: Structure;
    @observable iterator: ListIterator;
    @observable selectedAction: string;

    constructor() {
        this.structure = new Structure();
        this.structure.push('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'push': {
                disableContent: false,
                params: {
                    '': (content: string) => this.structure.push(content)
                }
            },
            'pop': {
                disableContent: true,
                params: {
                    '': () => this.structure.pop()
                }
            }
        };
        this.selectedAction = Object.keys(this.structureFunctions)[0];
    }

    get actions(): string[] {
        return Object.getOwnPropertyNames(this.structureFunctions);
    }

    get isContentDisabled(): boolean {
        return this.structureFunctions[this.selectedAction].disableContent;
    }

    @action.bound
    setAction(value: string) {
        this.selectedAction = value;
    }

    @action.bound
    execute(content?: string) {
        this.structureFunctions[this.selectedAction].params[''](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new StackStore();