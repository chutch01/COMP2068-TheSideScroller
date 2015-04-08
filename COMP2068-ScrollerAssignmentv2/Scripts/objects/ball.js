var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Ball = (function (_super) {
        __extends(Ball, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Ball() {
            _super.call(this, "ball");
            this.name = "ball";
            this._dx = 5;
            this.soundString = "randomize";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Ball.prototype._reset = function () {
            // set the island to start at a random x value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = Math.floor(Math.random() * constants.SCREEN_HEIGHT) + constants.SCREEN_WIDTH;
        };
        Ball.prototype._checkBounds = function () {
            if (this.x < 0 - this.width) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Ball.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Ball.prototype.hit = function () {
            this._reset();
        };
        return Ball;
    })(objects.GameObject);
    objects.Ball = Ball;
})(objects || (objects = {}));
//# sourceMappingURL=ball.js.map