import * as React from 'react';
import { settings } from '../../appSettings';
import { Block } from '../../components/block';
import { Playground } from '../../components/playground';
import { BinaryTreePlayground } from './binaryTree/playground';

export const TreePlaygrounds = () => {
    const width = window.document.documentElement.clientWidth * settings.contentWidth;

    return <Block>
        <Playground title='Binary tree'>
            <BinaryTreePlayground width={width} />
        </Playground>
        <Playground title='Binary search tree'>
            comming soon...
        </Playground>
    </Block>;
}
