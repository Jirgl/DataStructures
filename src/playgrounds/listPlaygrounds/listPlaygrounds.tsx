import * as React from 'react';
import { Block } from '../../components/block';
import { Playground } from '../../components/playground';
import { SinglyLinkedListPlayground } from './singlyLinkedList/playground';
import { DoublyLinkedListPlayground } from './doublyLinkedList/playground';
import { StackPlayground } from './stack/playground';
import { QueuePlayground } from './queue/playground';

export const ListPlaygrounds = () =>
    <Block>
        <Playground title='Singly linked list'>
            <SinglyLinkedListPlayground />
        </Playground>
        <Playground title='Doubly linked list'>
            <DoublyLinkedListPlayground />
        </Playground>
        <Playground title='Queue'>
            <QueuePlayground />
        </Playground>
        <Playground title='Stack'>
            <StackPlayground />
        </Playground>
    </Block>;
