import * as f from 'bobflux';
import * as s from './state';
import * as c from './cursor';

export let changeAction = f.createAction<s.IQueueState, number>(c.queueCursor, (state, action) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedAction = action;
    })
);

export let setContent = f.createAction<s.IQueueState, string>(c.queueCursor, (state, content) =>
    f.shallowCopy(state, (newState) => {
        newState.content = content;
    })
);

export let execute = f.createAction<s.IQueueState, number>(c.queueCursor, (state) =>
    f.shallowCopy(state, (newState) => {
        if (newState.selectedAction === s.Actions['enqueue']) {
            newState.queue.enqueue(newState.content);
        } else if (newState.selectedAction === s.Actions['dequeue']) {
            newState.queue.dequeue();
        }
    })
);
