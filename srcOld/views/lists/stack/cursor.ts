import * as f from 'bobflux';
import * as s from './state';

export const stackCursor: f.ICursor<s.IStackState> = {
    key: 'list.stack'
}
