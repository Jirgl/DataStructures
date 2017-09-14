import * as React from 'react';
import { settings } from '../../appSettings';
import { Block } from '../../components/block';
import { Playground } from '../../components/playground';
import { SinglyLinkedListPlayground } from './singlyLinkedList/playground';
import { DoublyLinkedListPlayground } from './doublyLinkedList/playground';
import { StackPlayground } from './stack/playground';
import { QueuePlayground } from './queue/playground';

export const ListPlaygrounds = () => {
    const width = window.document.documentElement.clientWidth * settings.contentWidth;

    return (<Block>
        <Playground title='Singly linked list'>
            <SinglyLinkedListPlayground width={width} />
        </Playground>
        <Playground title='Doubly linked list'>
            <DoublyLinkedListPlayground width={width} />
        </Playground>
        <Playground title='Queue'>
            <QueuePlayground width={width} />
        </Playground>
        <Playground title='Stack'>
            <StackPlayground width={width} />
        </Playground>
    </Block>);
}
