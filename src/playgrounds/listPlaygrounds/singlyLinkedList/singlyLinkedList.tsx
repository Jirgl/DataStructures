import * as React from 'react';
import { Block } from '../../../components/block';
import { ControlBar } from '../../../components/controlBar';

const actions = [
    { title: 'add', disabled: false },
    { title: 'remove', disabled: false }
];
const settings = [
    { title: 'first', disabled: false },
    { title: 'predecessor', disabled: false },
    { title: 'current', disabled: true },
    { title: 'successor', disabled: false },
    { title: 'last', disabled: false }
];

const boxStyle = {
    paddingTop: 20
};

export const SinglyLinkedList = () =>
    <Block style={boxStyle}>
        <ControlBar actions={actions} additionalSettings={settings} />
    </Block>;
