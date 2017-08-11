import * as f from 'bobflux';
import { Structure as DoublyLinkedList } from '../graphicalEnricher/doublyLinkedList';
import { IteratorManager } from '../../iteratorManager';

export const Actions = {
    add: 0,
    remove: 1
}

export const Parameters = {
    first: 0,
    predecessor: 1,
    successor: 2,
    last: 3,
    current: 4
}

export interface IDoublyLinkedListState extends f.IState {
    doublyLinkedList: DoublyLinkedList;
    iteratorManager: IteratorManager;
    content: string;
    actions: string[];
    selectedAction: number;
    parameters: string[];
    selectedParameter: number;
    indexOfCurrentItem: number;
}

export const createDefaultDoublyLinkedListState = (): IDoublyLinkedListState => {
    const doublyLinkedList = new DoublyLinkedList();
    let params = Object.keys(Parameters);
    params.splice(4, 1);
    doublyLinkedList.addFirstItem('init item');
    return {
        doublyLinkedList: doublyLinkedList,
        iteratorManager: new IteratorManager(),
        content: '',
        actions: Object.keys(Actions),
        selectedAction: 0,
        parameters: params,
        selectedParameter: 0,
        indexOfCurrentItem: -1
    };
}
