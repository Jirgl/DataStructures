import * as f from 'bobflux';
import * as s from './state';
import * as c from './cursor';

export let changeAction = f.createAction<s.ILinkedListState, number>(c.linkedListCursor, (state, action) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedAction = action;
        if (action === s.Actions['add']) {
            let index = newState.parameters.indexOf('current');
            if (index > -1) newState.parameters.splice(index, 1);
            if (newState.selectedParameter === s.Parameters['current']) newState.selectedParameter = 0;
        } else if (action === s.Actions['remove']) {
            let index = newState.parameters.indexOf('current');
            if (index === -1) newState.parameters.splice(2, 0, 'current');
        }
    })
);

export let changeParameter = f.createAction<s.ILinkedListState, number>(c.linkedListCursor, (state, parameter) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedParameter = parameter;
    })
);

export let setContent = f.createAction<s.ILinkedListState, string>(c.linkedListCursor, (state, content) =>
    f.shallowCopy(state, (newState) => {
        newState.content = content;
    })
);

export let setIndexOfCurrentItem = f.createAction<s.ILinkedListState, number>(c.linkedListCursor, (state, index) =>
    f.shallowCopy(state, (newState) => {
        newState.indexOfCurrentItem = index;
    })
);

export let execute = f.createAction<s.ILinkedListState, number>(c.linkedListCursor, (state) =>
    f.shallowCopy(state, (newState) => {
        if (newState.selectedAction === s.Actions['add']) {
            if (newState.selectedParameter === s.Parameters['first']) {
                newState.linkedList.addFirstItem(newState.content);
            } else if (newState.selectedParameter === s.Parameters['predecessor']) {
                newState.linkedList.addPreviousItem(newState.content);
            } else if (newState.selectedParameter === s.Parameters['successor']) {
                newState.linkedList.addNextItem(newState.content);
            } else if (newState.selectedParameter === s.Parameters['last']) {
                newState.linkedList.addLastItem(newState.content);
            }
        } else if (newState.selectedAction === s.Actions['remove']) {
            if (newState.selectedParameter === s.Parameters['first']) {
                newState.linkedList.removeFirstItem();
            } else if (newState.selectedParameter === s.Parameters['predecessor']) {
                newState.linkedList.removePreviousItem();
            } else if (newState.selectedParameter === s.Parameters['current']) {
                newState.linkedList.removeCurrentItem();
            } else if (newState.selectedParameter === s.Parameters['successor']) {
                newState.linkedList.removeNextItem();
            } else if (newState.selectedParameter === s.Parameters['last']) {
                newState.linkedList.removeLastItem();
            }
        }
    })
);
