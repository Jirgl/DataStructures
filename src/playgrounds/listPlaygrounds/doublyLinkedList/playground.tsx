import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { ControlBar } from '../../../components/controlBar';
import { ListCanvas } from '../common/listCanvas';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const DoublyLinkedListPlayground = observer(() =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            settings={store.settings}
            onActionChange={store.setAction}
            onSettingsChange={store.setSettings}
            onExecute={store.execute}
            selectedActionValue={store.selectedAction}
            selectedSettingsValue={store.selectedSettings}
        />
        <ListCanvas
            arrowType={ArrowType.DirectOneWay}
            iterator={store.iterator}
            width={window.document.documentElement.clientWidth}
        />
    </Block>
);
