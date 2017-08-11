import * as f from 'bobflux';
import * as s from './state';
import * as c from './cursor';

export let changeAction = f.createAction<s.IStackState, number>(c.stackCursor, (state, action) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedAction = action;
    })
);

export let setContent = f.createAction<s.IStackState, string>(c.stackCursor, (state, content) =>
    f.shallowCopy(state, (newState) => {
        newState.content = content;
    })
);

export let execute = f.createAction<s.IStackState, number>(c.stackCursor, (state) =>
    f.shallowCopy(state, (newState) => {
        if (newState.selectedAction === s.Actions['push']) {
            newState.stack.push(newState.content);
        } else if (newState.selectedAction === s.Actions['pop']) {
            newState.stack.pop();
        }
    })
);
