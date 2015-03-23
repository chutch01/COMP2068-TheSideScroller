var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Enemy() {
            _super.call(this, "enemy");
            this.name = "enemy";
            this.soundString = "explosion";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype._reset = function () {
            // set the island to start at a random x value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = Math.floor(Math.random() * constants.SCREEN_HEIGHT) + constants.SCREEN_WIDTH;
            // add drift to the cloud 
            //this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = -5;
        };
        Enemy.prototype._checkBounds = function () {
            if (this.x <= 0 - this.width) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype.update = function () {
            //this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map