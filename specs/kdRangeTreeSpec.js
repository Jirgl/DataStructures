///<reference path="../jasmine/jasmine.js"/>
///<reference path="../models/trees/kdRangeTree.js"/>

describe("Range tree - build", function () {
    var rangeTree;

    var z = { data: "Z", ranges: [5, 5] };
    var y = { data: "Y", ranges: [33, 63] };
    var m = { data: "M", ranges: [47, 35] };
    var w = { data: "W", ranges: [22, 60] };
    var c = { data: "C", ranges: [15, 45] };
    var r = { data: "R", ranges: [28, 50] };
    var k = { data: "K", ranges: [42, 65] };
    var f = { data: "F", ranges: [38, 52] };

    var initData = [z, y, w, m, r, f, k, c];

    var subtree1 = [
        {
            median: 51,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 40,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 61.5,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 20,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 47.5,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 56,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 64,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: z,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: m,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: c,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: r,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: f,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: w,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: y,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: k,
            subtree: undefined
        }
    ];

    var subtree2 = [
        {
            median: 47.5,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 25,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 55,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: z,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: c,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: r,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: w,
            subtree: undefined
        }
    ];

    var subtree3 = [
        {
            median: 57.5,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 43.5,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: 64,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: m,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: f,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: y,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: k,
            subtree: undefined
        }
    ];

    var subtree4 = [
        {
            median: 25,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: z,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: c,
            subtree: undefined
        }
    ];

    var subtree5 = [
        {
            median: 55,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: r,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: w,
            subtree: undefined
        }
    ];

    var subtree6 = [
        {
            median: 57.5,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: f,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: y,
            subtree: undefined
        }
    ];

    var subtree7 = [
        {
            median: 50,
            rangeData: undefined,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: m,
            subtree: undefined
        },
        {
            median: undefined,
            rangeData: k,
            subtree: undefined
        }
    ];

    beforeEach(function () {
        rangeTree = new JirglStructures.Trees.KdRangeTree();
    });

    function checkSubtree(outputSubtree, expectedSubtree) {
        expect(outputSubtree.length).toBe(expectedSubtree.length);
        for (var i = 0; i < outputSubtree.length; i++) {
            expect(outputSubtree[i].median).toBe(expectedSubtree[i].median);
            expect(outputSubtree[i].subtree).toBe(expectedSubtree[i].rawData);
            expect(outputSubtree[i].rangeData).toBe(expectedSubtree[i].rangeData);
        }
    }

    it("build tree", function () {
        rangeTree.build(initData, [
            function (a, b) { return a.ranges[0] - b.ranges[0]; },
            function (a, b) { return a.ranges[1] - b.ranges[1]; }
        ]);

        expect(rangeTree.tree.rawData[0].median).toBe(30.5);
        expect(rangeTree.tree.rawData[0].rangeData).toBe(undefined);
        checkSubtree(rangeTree.tree.rawData[0].subtree.rawData, subtree1);
        expect(rangeTree.tree.rawData[1].median).toBe(18.5);
        expect(rangeTree.tree.rawData[1].rangeData).toBe(undefined);
        checkSubtree(rangeTree.tree.rawData[1].subtree.rawData, subtree2);
        expect(rangeTree.tree.rawData[2].median).toBe(40);
        expect(rangeTree.tree.rawData[2].rangeData).toBe(undefined);
        checkSubtree(rangeTree.tree.rawData[2].subtree.rawData, subtree3);
        expect(rangeTree.tree.rawData[3].median).toBe(10);
        expect(rangeTree.tree.rawData[3].rangeData).toBe(undefined);
        checkSubtree(rangeTree.tree.rawData[3].subtree.rawData, subtree4);
        expect(rangeTree.tree.rawData[4].median).toBe(25);
        expect(rangeTree.tree.rawData[4].rangeData).toBe(undefined);
        checkSubtree(rangeTree.tree.rawData[4].subtree.rawData, subtree5);
        expect(rangeTree.tree.rawData[5].median).toBe(35.5);
        expect(rangeTree.tree.rawData[5].rangeData).toBe(undefined);
        checkSubtree(rangeTree.tree.rawData[5].subtree.rawData, subtree6);
        expect(rangeTree.tree.rawData[6].median).toBe(44.5);
        expect(rangeTree.tree.rawData[6].rangeData).toBe(undefined);
        checkSubtree(rangeTree.tree.rawData[6].subtree.rawData, subtree7);
        expect(rangeTree.tree.rawData[7].median).toBe(undefined);
        expect(rangeTree.tree.rawData[7].rangeData).toBe(z);
        expect(rangeTree.tree.rawData[7].subtree).toBe(undefined);
        expect(rangeTree.tree.rawData[8].median).toBe(undefined);
        expect(rangeTree.tree.rawData[8].rangeData).toBe(c);
        expect(rangeTree.tree.rawData[8].subtree).toBe(undefined);
        expect(rangeTree.tree.rawData[9].median).toBe(undefined);
        expect(rangeTree.tree.rawData[9].rangeData).toBe(w);
        expect(rangeTree.tree.rawData[9].subtree).toBe(undefined);
        expect(rangeTree.tree.rawData[10].median).toBe(undefined);
        expect(rangeTree.tree.rawData[10].rangeData).toBe(r);
        expect(rangeTree.tree.rawData[10].subtree).toBe(undefined);
        expect(rangeTree.tree.rawData[11].median).toBe(undefined);
        expect(rangeTree.tree.rawData[11].rangeData).toBe(y);
        expect(rangeTree.tree.rawData[11].subtree).toBe(undefined);
        expect(rangeTree.tree.rawData[12].median).toBe(undefined);
        expect(rangeTree.tree.rawData[12].rangeData).toBe(f);
        expect(rangeTree.tree.rawData[12].subtree).toBe(undefined);
        expect(rangeTree.tree.rawData[13].median).toBe(undefined);
        expect(rangeTree.tree.rawData[13].rangeData).toBe(k);
        expect(rangeTree.tree.rawData[13].subtree).toBe(undefined);
        expect(rangeTree.tree.rawData[14].median).toBe(undefined);
        expect(rangeTree.tree.rawData[14].rangeData).toBe(m);
        expect(rangeTree.tree.rawData[14].subtree).toBe(undefined);
    });

    it("find data", function() {
        rangeTree.build(initData, [
            function(a, b) { return a.range1 - b.range1; },
            function(a, b) { return a.range2 - b.range2; }
        ]);

        var result = rangeTree.findInRange(5, 15, 30, 70);
        expect(result.length).toBe(0);
    });
});
