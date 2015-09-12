///<reference path="../jasmine/jasmine.js"/>
///<reference path="../components/arrow.js"/>

describe("Getting graphical schema line", function () {
    var arrow;

    beforeEach(function () {
        arrow = new JirglStructures.Arrow();
    });

    it("Schema line - right/top direction", function () {
        var path = arrow.getSchemaLine({ x: 50, y: 50 }, { x: 100, y: 0 });

        expect(path).toEqual([
            "M", 50, 50,
            "L", 75, 50,
            "L", 75, 0,
            "L", 100, 0
        ]);
    });

    it("Schema line - right/bottom direction", function () {
        var path = arrow.getSchemaLine({ x: 50, y: 50 }, { x: 100, y: 100 });

        expect(path).toEqual([
            "M", 50, 50,
            "L", 75, 50,
            "L", 75, 100,
            "L", 100, 100
        ]);
    });

    it("Schema line - left/top direction", function () {
        var path = arrow.getSchemaLine({ x: 50, y: 50 }, { x: 20, y: 0 });

        expect(path).toEqual([
            "M", 50, 50,
            "L", 70, 50,
            "L", 70, 25,
            "L", 0, 25,
            "L", 0, 0,
            "L", 20, 0
        ]);
    });

    it("Schema line - left/bottom direction", function () {
        var path = arrow.getSchemaLine({ x: 50, y: 50 }, { x: 20, y: 100 });

        expect(path).toEqual([
            "M", 50, 50,
            "L", 70, 50,
            "L", 70, 75,
            "L", 0, 75,
            "L", 0, 100,
            "L", 20, 100
        ]);
    });
});

describe("Getting graphical direct line", function () {
    var arrow;

    beforeEach(function () {
        arrow = new JirglStructures.Arrow();
    });

    it("Direct line - right/top direction", function () {
        var path = arrow.getDirectLine({ x: 50, y: 50 }, { x: 100, y: 0 });

        expect(path).toEqual([
            "M", 50, 50,
            "L", 100, 0
        ]);
    });

    it("Direct line - left/bottom direction", function () {
        var path = arrow.getDirectLine({ x: 50, y: 50 }, { x: 0, y: 100 });

        expect(path).toEqual([
            "M", 50, 50,
            "L", 0, 100
        ]);
    });
});

describe("Getting graphical arrowhead", function () {
    var arrow;
    var endPosition = { x: 50, y: 50 };

    beforeEach(function () {
        arrow = new JirglStructures.Arrow();
    });

    it("Arrowhead - right/top direction", function () {
        var path = arrow.getArrowhead({ x: 100, y: 0 }, endPosition);

        expect(path).toEqual([
            "M", 90, 3,
            "L", 100, 0,
            "L", 97, 10
        ]);
    });

    it("Arrowhead - right/bottom direction", function () {
        var path = arrow.getArrowhead({ x: 100, y: 100 }, endPosition);

        expect(path).toEqual([
            "M", 97, 90,
            "L", 100, 100,
            "L", 90, 97
        ]);
    });

    it("Arrowhead - left/top direction", function () {
        var path = arrow.getArrowhead({ x: 0, y: 0 }, endPosition);

        expect(path).toEqual([
            "M", 3, 10,
            "L", 0, 0,
            "L", 10, 3
        ]);
    });

    it("Arrowhead - left/bottom direction", function () {
        var path = arrow.getArrowhead({ x: 0, y: 100 }, endPosition);

        expect(path).toEqual([
            "M", 10, 97,
            "L", 0, 100,
            "L", 3, 90
        ]);
    });
});