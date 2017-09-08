import * as React from 'react';
import { Block } from '../../components/block';
import { Playground } from '../../components/playground';
import { BinaryTreePlayground } from './binaryTree/playground';

export const TreePlaygrounds = () =>
    <Block>
        <Playground title='Binary tree'>
            <BinaryTreePlayground />
        </Playground>
        <Playground title='Binary search tree'>
            comming soon...
        </Playground>
    </Block>;
