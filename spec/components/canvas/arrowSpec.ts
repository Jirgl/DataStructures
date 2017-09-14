import 'mocha';
import { expect } from 'chai';
import { Arrow, ArrowType } from '../../../src/components/canvas/arrow';
import { IPosition } from '../../../src/components/canvas/position';

function checkArrow(start: IPosition, end: IPosition, type: ArrowType,
    childIndex: number, expectedChild: string) {
    const arrow = Arrow({ type, start: start, end: end });

    expect(arrow.props.children[childIndex].props.d).equal(expectedChild);
}

describe('Get arrow path', () => {

    describe('Line - schema line', () => {

        it('right/top direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 100, y: 0 }, ArrowType.SchemaOneWay, 0, 'M 50 50 L 75 50 L 75 0 L 100 0');
        });

        it('right/bottom direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 100, y: 100 }, ArrowType.SchemaOneWay, 0, 'M 50 50 L 75 50 L 75 100 L 100 100');
        });

        it('left/top direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 20, y: 0 }, ArrowType.SchemaOneWay, 0, 'M 50 50 L 70 50 L 70 25 L 0 25 L 0 0 L 20 0');
        });

        it('left/bottom direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 20, y: 100 }, ArrowType.SchemaOneWay, 0, 'M 50 50 L 70 50 L 70 75 L 0 75 L 0 100 L 20 100');
        });

    });

    describe('Line - direct line', () => {

        it('right/top direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 100, y: 0 }, ArrowType.DirectOneWay, 0, 'M 50 50 L 100 0');
        });

        it('left/bottom direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 0, y: 100 }, ArrowType.DirectOneWay, 0, 'M 50 50 L 0 100');
        });

    });

    describe('Arrow - schema line', () => {

        it('left/right direction', () => {
            checkArrow({ x: 0, y: 0 }, { x: 100, y: 0 }, ArrowType.SchemaTwoWay, 1, 'M 91 -10 L 100 -5 L 91 0 M 9 10 L 0 5 L 9 0');
        });

        it('left/bottom/right direction', () => {
            checkArrow({ x: 100, y: 10 }, { x: 0, y: 100 }, ArrowType.SchemaTwoWay, 1, 'M -9 90 L 0 95 L -9 100 M 109 20 L 100 15 L 109 10');
        });

    });

    describe('Arrow - direct line', () => {

        it('right/top direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 100, y: 0 }, ArrowType.DirectOneWay, 1, 'M 90 3 L 100 0 L 97 10');
        });

        it('right/bottom direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 100, y: 100 }, ArrowType.DirectOneWay, 1, 'M 97 90 L 100 100 L 90 97');
        });

        it('Left/top direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 0, y: 0 }, ArrowType.DirectOneWay, 1, 'M 3 10 L 0 0 L 10 3');
        });

        it('left/bottom direction', () => {
            checkArrow({ x: 50, y: 50 }, { x: 0, y: 100 }, ArrowType.DirectOneWay, 1, 'M 10 97 L 0 100 L 3 90');
        });

    });

});
