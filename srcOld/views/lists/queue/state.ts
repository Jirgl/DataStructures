import * as f from 'bobflux';
import { Structure as Queue } from '../graphicalEnricher/queue';

export interface IQueueState extends f.IState {
    queue: Queue;
    content: string;
    actions: string[];
    selectedAction: number;
}

export const Actions = {
    enqueue: 0,
    dequeue: 1
}

export const createDefaultQueueState = (): IQueueState => {
    const queue = new Queue();
    queue.enqueue('init item');
    return {
        queue: queue,
        content: '',
        actions: Object.keys(Actions),
        selectedAction: 0
    };
}
