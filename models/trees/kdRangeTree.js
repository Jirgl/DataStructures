var JirglStructures;
(function (JirglStructures) {
    var Trees;
    (function (Trees) {
        var Tree = (function () {
            function Tree() {
            }
            return Tree;
        })();
        Trees.Tree = Tree;
        var RangeNode = (function () {
            function RangeNode() {
            }
            return RangeNode;
        })();
        Trees.RangeNode = RangeNode;
        var KdRangeTree = (function () {
            function KdRangeTree() {
            }
            KdRangeTree.prototype.clear = function () {
                this.tree = undefined;
            };
            KdRangeTree.prototype.build = function (array, comparisons) {
                this.clear();
                this.dimensions = comparisons.length;
                this.tree = this.buildDimension(array, 0, comparisons);
            };
            KdRangeTree.prototype.buildDimension = function (array, currentDimension, comparisons) {
                if (comparisons.length === 0)
                    return undefined;
                var sortedArray = array.sort(comparisons[0]);
                var normalizedArray = this.normalizeArrayLength(sortedArray);
                var data = [];
                comparisons = comparisons.splice(1, comparisons.length - 1);
                currentDimension++;
                var que = new JirglStructures.Lists.Queue();
                que.enqueue(normalizedArray);
                while (!que.isEmpty()) {
                    var subtree = que.dequeue();
                    if (subtree.length > 1) {
                        var splittedArray = this.splitArray(subtree.slice());
                        que.enqueue(splittedArray[0]);
                        que.enqueue(splittedArray[1]);
                        var item1 = splittedArray[0][splittedArray[0].length - 1];
                        var item2 = splittedArray[1][0];
                        data.push(this.createRangeNode(undefined, (item1.ranges[currentDimension - 1] + item2.ranges[currentDimension - 1]) / 2, this.buildDimension(subtree, currentDimension, comparisons)));
                    }
                    else {
                        data.push(this.createRangeNode(subtree[0], undefined, undefined));
                    }
                }
                var tree = new Tree();
                tree.rawData = data;
                return tree;
            };
            KdRangeTree.prototype.createRangeNode = function (data, median, subtree) {
                var node = new RangeNode();
                node.rangeData = data;
                node.median = median;
                node.subtree = subtree;
                return node;
            };
            KdRangeTree.prototype.normalizeArrayLength = function (array) {
                var returnArray = array.slice();
                var item = returnArray[returnArray.length - 1];
                for (var i = array.length; i < Math.pow(2, this.getClosestPower(array.length)); i++)
                    returnArray.push(item);
                return returnArray;
            };
            KdRangeTree.prototype.getClosestPower = function (length) {
                var power = 1;
                while (length > Math.pow(2, power))
                    power++;
                return power;
            };
            KdRangeTree.prototype.splitArray = function (array) {
                var sliceIndex = array.length % 2 === 0
                    ? array.length / 2
                    : array.length / 2 + 1;
                return [
                    array.slice(0, sliceIndex),
                    array.splice(sliceIndex, array.length - sliceIndex)
                ];
            };
            KdRangeTree.prototype.findInRange = function (rangesFrom, rangesTo) {
                if (rangesFrom.length !== this.dimensions || rangesTo.length !== this.dimensions)
                    return [];
                return this.findInDimension(rangesFrom, rangesTo, 0, this.tree);
            };
            KdRangeTree.prototype.findInDimension = function (rangesFrom, rangesTo, currentRange, tree) {
                var index = 1;
                while (true) {
                    var range1 = rangesFrom[currentRange];
                    var range2 = rangesTo[currentRange];
                    if (tree.rawData[index - 1].rangeData === undefined) {
                        if (range2 < tree.rawData[index - 1].median) {
                            index *= 2;
                        }
                        else if (range1 > tree.rawData[index - 1].median) {
                            index *= 2;
                            index++;
                        }
                        else if (range1 <= tree.rawData[index - 1].median && range2 >= tree.rawData[index - 1].median) {
                            if (tree.rawData[index - 1].subtree !== undefined) {
                                return this.findInDimension(rangesFrom, rangesTo, ++currentRange, tree.rawData[index - 1].subtree);
                            }
                            else {
                                return this.findInTree(rangesFrom, rangesTo, index, tree);
                            }
                        }
                    }
                    else {
                        return [tree.rawData[index - 1].rangeData.data];
                    }
                }
            };
            KdRangeTree.prototype.findInTree = function (rangesFrom, rangesTo, currentIndex, tree) {
                var depth = 0;
                while (true) {
                    if (tree.rawData[currentIndex - 1].rangeData === undefined) {
                        depth++;
                        currentIndex *= 2;
                    }
                    else {
                        var count = Math.pow(2, depth);
                        var result = [];
                        for (var i = currentIndex - 1; i < count; i++) {
                            if (this.isInRange(tree.rawData[currentIndex - 1].rangeData, rangesFrom, rangesTo))
                                result.push(tree.rawData[currentIndex - 1].rangeData.data);
                        }
                        return result; //TODO distinct
                    }
                }
            };
            KdRangeTree.prototype.isInRange = function (data, rangesFrom, rangesTo) {
                if (data.ranges.length !== rangesFrom.length || data.ranges.length !== rangesTo.length) {
                    return false;
                }
                for (var i = 0; i < data.ranges.length; i++) {
                    if (data.ranges[i] < rangesFrom[i] || data.ranges[i] > rangesTo[i])
                        return false;
                }
                return true;
            };
            return KdRangeTree;
        })();
        Trees.KdRangeTree = KdRangeTree;
    })(Trees = JirglStructures.Trees || (JirglStructures.Trees = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=kdRangeTree.js.map