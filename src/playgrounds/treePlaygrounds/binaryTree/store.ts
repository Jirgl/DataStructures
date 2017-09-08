import { action, observable } from 'mobx';
import { IAction, IParameter } from '../../../components/controlBar';
import { Structure } from './graphicalStructure';
import { TreeIterator } from '../base/treeIterator';

class StackStore {
    actions: IAction[] = [
        { title: 'add' },
        { title: 'get' },
        { title: 'remove' }
    ];
    parameters: IParameter[] = [
        { title: 'root', disabled: false },
        { title: 'parent', disabled: false },
        { title: 'current', disabled: false },
        { title: 'leftChild', disabled: false },
        { title: 'rightChild', disabled: false }
    ]

    private structureFunctions: { [action: string]: { [parameter: string]: (content?: string) => void } };
    private structure: Structure;
    @observable iterator: TreeIterator;
    @observable selectedAction: number = 0;
    @observable selectedParameter: number = 0;

    constructor() {
        this.structure = new Structure();
        this.structure.addRoot('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'add': {
                'root': (content: string) => this.structure.addRoot(content),
                'leftChild': (content: string) => this.structure.addLeftChild(content),
                'rightChild': (content: string) => this.structure.addRightChild(content)
            },
            'get': {
                'root': () => this.structure.getRoot(),
                'current': () => this.structure.getCurrentNode(),
                'parent': () => this.structure.getParent(),
                'leftChild': () => this.structure.getLeftChild(),
                'rightChild': () => this.structure.getRightChild()
            },
            'remove': {
                'root': () => this.structure.removeRoot(),
                'leftChild': () => this.structure.removeLeftChild(),
                'rightChild': () => this.structure.removeRightChild()
            }
        };
    }

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
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

export const store = new StackStore();