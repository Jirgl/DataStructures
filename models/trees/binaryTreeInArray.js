var JirglStructures;
(function (JirglStructures) {
    var Trees;
    (function (Trees) {
        var BinaryTreeInArray = (function () {
            function BinaryTreeInArray() {
            }
            BinaryTreeInArray.prototype.clear = function () {
                this.data = [];
            };
            BinaryTreeInArray.prototype.build = function (data) {
                /*
                var _dataStromu = new List<IPrvekStromu<O>>();
            Array.Sort(poleDat, porovnej);
            var pole = zkontrolujPole(poleDat);
            var fronta = new Queue<O[]>();
            fronta.Enqueue(pole.ToArray());
    
            while (fronta.Count != 0) {
                var podstrom = new List<O>(fronta.Dequeue());
                if (podstrom.Count > 1) {
                    var rozdeleno = Rozdel(podstrom.ToArray());
                    fronta.Enqueue(rozdeleno[0]);
                    fronta.Enqueue(rozdeleno[1]);
    
                    var prvek1 = rozdeleno[0][rozdeleno[0].Length - 1];
                    var prvek2 = rozdeleno[1][0];
    
                    var prvek = dimenze == 1 ?
                        new prvekStromu((prvek1.DejPrimarniKlic() + prvek2.DejPrimarniKlic()) / 2) { VlastniPrvky = podstrom } :
                    new prvekStromu((prvek1.DejSekundarniKlic() + prvek2.DejSekundarniKlic()) / 2) { VlastniPrvky = podstrom };
                    _dataStromu.Add(prvek);
                }
                else {
                    var prvek = new prvekStromu(podstrom[0]);
                    _dataStromu.Add(prvek);
                }
            }
    
            return _dataStromu;
                */
            };
            return BinaryTreeInArray;
        })();
        Trees.BinaryTreeInArray = BinaryTreeInArray;
    })(Trees = JirglStructures.Trees || (JirglStructures.Trees = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=binaryTreeInArray.js.map