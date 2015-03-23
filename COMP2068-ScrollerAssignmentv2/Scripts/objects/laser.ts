module objects {

    export class Laser extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("laser");
            this.name = "laser";
            this.soundString = "explosion";
            this._dx = 5;


        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++

        private _checkBounds() {
            if (this.x >= 680 + this.width) {
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            //this.y += this._dy;
            this.x += this._dx;


            this._checkBounds();
        }
        public hit() {
        }

    }

}  