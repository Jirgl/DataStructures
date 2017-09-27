import 'mocha';
import { expect } from 'chai';
import { TreeGrid } from '../../../../src/playgrounds/treePlaygrounds/base/treeGrid';
import { TreeIterator } from '../../../../src/playgrounds/treePlaygrounds/base/treeIterator';
import { Structure } from '../../../../src/playgrounds/treePlaygrounds/binaryTree/graphicalStructure';

describe('Tree grid', () => {

    function getIterator(numberOfLevels: number): TreeIterator {
        const structure = new Structure();

        if (numberOfLevels > 0) {
            structure.addRoot('root');
        }

        if (numberOfLevels > 1) {
            for (let i = 0; i < numberOfLevels - 1; i++) {
                structure.addLeftChild('child');
                structure.getLeftChild();
            }
        }

        return structure.getIterator();
    }

    it('get height I', () => {
        const grid = new TreeGrid(500, getIterator(2));
        expect(grid.height).to.equal(160);
    });

    it('get height II', () => {
        const grid = new TreeGrid(500, getIterator(4));
        expect(grid.height).to.equal(320);
    });

});
