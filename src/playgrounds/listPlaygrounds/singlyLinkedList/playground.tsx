import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ControlBar } from '../../../components/controlBar';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const SinglyLinkedListPlayground = observer(() =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            settings={store.settings}
            onActionChange={store.setAction}
            onSettingsChange={store.setSettings}
            selectedActionValue={store.selectedAction}
            selectedSettingsValue={store.selectedSettings}
        />
    </Block>
);
