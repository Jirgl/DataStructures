import * as f from 'bobflux';
import * as s from './state';

export const queueCursor: f.ICursor<s.IQueueState> = {
    key: 'list.queue'
}
