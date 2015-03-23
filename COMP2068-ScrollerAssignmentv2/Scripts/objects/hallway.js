var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Hallway = (function (_super) {
        __extends(Hallway, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Hallway() {
            _super.call(this, assetLoader.getResult("hallway"));
            // PRIVATE VARIABLE
            this._dx = -5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Hallway.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = constants.OCEAN_RESET_WIDTH;
            this.y = 0;
        };
        Hallway.prototype._checkBounds = function () {
            if (this.x <= -125) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Hallway.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Hallway;
    })(createjs.Bitmap);
    objects.Hallway = Hallway;
})(objects || (objects = {}));
//# sourceMappingURL=hallway.js.map