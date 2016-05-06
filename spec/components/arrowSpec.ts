import * as b from 'bobril';
import * as Arrow from '../../src/components/arrow';

function checkArrow(arrowPaths: b.IBobrilNode[], expectedLine: string, expectedArrow: string) {
    expect(arrowPaths.length).toBe(2);
    if (expectedLine) {
        expect(arrowPaths[0].attrs['d']).toEqual(expectedLine);
    }
    if (expectedArrow) {
        expect(arrowPaths[1].attrs['d']).toEqual(expectedArrow);
    }
}

describe('Get arrow path', function () {
    describe('Line - schema line', function () {

        it('right/top direction', function () {
            checkArrow(Arrow.create(50, 50, 100, 0, Arrow.ArrowType.SchemaOneWay),
                'M 50 50 L 75 50 L 75 0 L 100 0', undefined);
        });

        it('right/bottom direction', function () {
            checkArrow(Arrow.create(50, 50, 100, 100, Arrow.ArrowType.SchemaOneWay),
                'M 50 50 L 75 50 L 75 100 L 100 100', undefined);
        });

        it('left/top direction', function () {
            checkArrow(Arrow.create(50, 50, 20, 0, Arrow.ArrowType.SchemaOneWay),
                'M 50 50 L 70 50 L 70 25 L 0 25 L 0 0 L 20 0', undefined);
        });

        it('left/bottom direction', function () {
            checkArrow(Arrow.create(50, 50, 20, 100, Arrow.ArrowType.SchemaOneWay),
                'M 50 50 L 70 50 L 70 75 L 0 75 L 0 100 L 20 100', undefined);
        });
    });

    describe('Line - direct line', function () {

        it('right/top direction', function () {
            checkArrow(Arrow.create(50, 50, 100, 0, Arrow.ArrowType.DirectOneWay),
                'M 50 50 L 100 0', undefined);
        });

        it('left/bottom direction', function () {
            checkArrow(Arrow.create(50, 50, 0, 100, Arrow.ArrowType.DirectOneWay),
                'M 50 50 L 0 100', undefined);
        });
    });

    describe('Arrow', function () {

        it('right/top direction', function () {
            checkArrow(Arrow.create(50, 50, 100, 0, Arrow.ArrowType.DirectOneWay),
                undefined, 'M 90 3 L 100 0 L 97 10');
        });

        it('right/bottom direction', function () {
            checkArrow(Arrow.create(50, 50, 100, 100, Arrow.ArrowType.DirectOneWay),
                undefined, 'M 97 90 L 100 100 L 90 97');
        });

        it('Left/top direction', function () {
            checkArrow(Arrow.create(50, 50, 0, 0, Arrow.ArrowType.DirectOneWay),
                undefined, 'M 3 10 L 0 0 L 10 3');
        });

        it('left/bottom direction', function () {
            checkArrow(Arrow.create(50, 50, 0, 100, Arrow.ArrowType.DirectOneWay),
                undefined, 'M 10 97 L 0 100 L 3 90');
        });
    });
});
