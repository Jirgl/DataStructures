import * as f from 'bobflux';
import { IDoublyLinkedListState, createDefaultDoublyLinkedListState } from './doublyLinkedList/state';
import { ILinkedListState, createDefaultLinkedListState } from './linkedList/state';
import { IQueueState, createDefaultQueueState } from './queue/state';
import { IStackState, createDefaultStackState } from './stack/state';

export interface IListState extends f.IState {
    linkedList: ILinkedListState;
    doublyLinkedList: IDoublyLinkedListState;
    stack: IStackState;
    queue: IQueueState;
}

export const createDefaultListState = (): IListState => {
    return {
        linkedList: createDefaultLinkedListState(),
        doublyLinkedList: createDefaultDoublyLinkedListState(),
        stack: createDefaultStackState(),
        queue: createDefaultQueueState()
    };
}
