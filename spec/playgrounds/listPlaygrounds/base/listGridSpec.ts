import 'mocha';
import { expect } from 'chai';
import { ListGrid } from '../../../../src/playgrounds/listPlaygrounds/base/listGrid';
import { ListIterator } from '../../../../src/playgrounds/listPlaygrounds/base/listIterator';
import { Structure } from '../../../../src/playgrounds/listPlaygrounds/singlyLinkedList/graphicalStructure';

describe('List grid', () => {

    function getIterator(numberOfItems: number): ListIterator {
        const structure = new Structure();
        for (let i = 0; i < numberOfItems; i++) {
            structure.addFirstItem('item');
        }

        return structure.getIterator();
    }

    it('get height I', () => {
        const grid = new ListGrid(500, getIterator(3));
        expect(140).equal(grid.height);
    });

    it('get height II', () => {
        const grid = new ListGrid(500, getIterator(4));
        expect(280).equal(grid.height);
    });

});
