import 'mocha';
import { expect } from 'chai';
import { calculateDepth } from '../../../../src/playgrounds/treePlaygrounds/base/depthHelper';

describe('Tree depth helper', () => {

    it('calculate depth', () => {
        expect(calculateDepth(0)).to.equal(0);
        expect(calculateDepth(1)).to.equal(1);
        expect(calculateDepth(2)).to.equal(1);
        expect(calculateDepth(3)).to.equal(2);
        expect(calculateDepth(4)).to.equal(2);
        expect(calculateDepth(5)).to.equal(2);
        expect(calculateDepth(6)).to.equal(2);
    });

});
