import * as React from 'react';
import { Block } from '../../components/block';
import { Playground } from '../../components/playground';
import { SinglyLinkedList } from './singlyLinkedList/singlyLinkedList'

export const ListPlaygrounds = () =>
    <Block>
        <Playground title='Singly linked list'>
            <SinglyLinkedList />
        </Playground>
        <Playground title='Doubly linked list'>
            comming soon...
        </Playground>
        <Playground title='Queue'>
            comming soon...
        </Playground>
        <Playground title='Stack'>
            comming soon...
        </Playground>
    </Block>;
