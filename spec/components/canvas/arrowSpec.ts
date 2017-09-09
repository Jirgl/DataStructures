import 'mocha';
import { expect } from 'chai';
import { Arrow, ArrowType } from '../../../src/components/canvas/arrow';

function checkArrow(startX: number, startY: number,
    endX: number, endY: number, type: ArrowType,
    childIndex: number, expectedChild: string) {
    const arrow = Arrow({ type, startX, startY, endX, endY });

    expect(arrow.props.children[childIndex].props.d).equal(expectedChild);
}

describe('Get arrow path', () => {

    describe('Line - schema line', () => {

        it('right/top direction', () => {
            checkArrow(50, 50, 100, 0, ArrowType.SchemaOneWay, 0, 'M 50 50 L 75 50 L 75 0 L 100 0');
        });

        it('right/bottom direction', () => {
            checkArrow(50, 50, 100, 100, ArrowType.SchemaOneWay, 0, 'M 50 50 L 75 50 L 75 100 L 100 100');
        });

        it('left/top direction', () => {
            checkArrow(50, 50, 20, 0, ArrowType.SchemaOneWay, 0, 'M 50 50 L 70 50 L 70 25 L 0 25 L 0 0 L 20 0');
        });

        it('left/bottom direction', () => {
            checkArrow(50, 50, 20, 100, ArrowType.SchemaOneWay, 0, 'M 50 50 L 70 50 L 70 75 L 0 75 L 0 100 L 20 100');
        });

    });

    describe('Line - direct line', () => {

        it('right/top direction', () => {
            checkArrow(50, 50, 100, 0, ArrowType.DirectOneWay, 0, 'M 50 50 L 100 0');
        });

        it('left/bottom direction', () => {
            checkArrow(50, 50, 0, 100, ArrowType.DirectOneWay, 0, 'M 50 50 L 0 100');
        });

    });

    describe('Arrow', () => {

        it('right/top direction', () => {
            checkArrow(50, 50, 100, 0, ArrowType.DirectOneWay, 1, 'M 90 3 L 100 0 L 97 10');
        });

        it('right/bottom direction', () => {
            checkArrow(50, 50, 100, 100, ArrowType.DirectOneWay, 1, 'M 97 90 L 100 100 L 90 97');
        });

        it('Left/top direction', () => {
            checkArrow(50, 50, 0, 0, ArrowType.DirectOneWay, 1, 'M 3 10 L 0 0 L 10 3');
        });

        it('left/bottom direction', () => {
            checkArrow(50, 50, 0, 100, ArrowType.DirectOneWay, 1, 'M 10 97 L 0 100 L 3 90');
        });

    });

});
