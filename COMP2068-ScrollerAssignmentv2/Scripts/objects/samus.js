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
        function Samus(container) {
            _super.call(this, "samus");
            this.lasers = [];
            this._container = container;
            this.name = "samus";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 50;
            this.totalLasers = 0;
            // createjs.Sound.play("engine", { loop: -1 });
        }
        //private methods
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Samus.prototype.shoot = function () {
            createjs.Sound.play("lasersound");
            this.lasers[this.totalLasers] = new objects.Laser(this.x, this.y, this, this._container);
            this._container.addChild(this.lasers[this.totalLasers]);
            this.totalLasers++;
            console.log(this.totalLasers);
        };
        Samus.prototype.update = function () {
            this.y = stage.mouseY;
        };
        Samus.prototype.hit = function () {
        };
        Samus.prototype.actionStart = function (key) {
            if (key == 32) {
                //console.log("firing");
                this.shoot();
            } //if ends
        };
        return Samus;
    })(objects.GameObject);
    objects.Samus = Samus;
})(objects || (objects = {}));
//# sourceMappingURL=samus.js.map