import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ControlBar } from '../../../components/controlBar';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const QueuePlayground = observer(() =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            onActionChange={store.setAction}
            selectedActionValue={store.selectedAction}
        />
    </Block>
);
