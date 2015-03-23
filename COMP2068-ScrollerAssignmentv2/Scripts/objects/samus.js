var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Samus = (function (_super) {
        __extends(Samus, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Samus() {
            _super.call(this, "samus");
            this.lasers = [];
            this.name = "samus";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 50;
            // createjs.Sound.play("engine", { loop: -1 });
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Samus.prototype.update = function () {
            this.y = stage.mouseY;
        };
        Samus.prototype.hit = function () {
        };
        return Samus;
    })(objects.GameObject);
    objects.Samus = Samus;
})(objects || (objects = {}));
//# sourceMappingURL=samus.js.map