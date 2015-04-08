/*
 * this is the laser that the player fires from the character it will be removed if it collides with something
 */
module objects {
    export class Laser extends objects.GameObject {


        //constructor ++++++++++++++++++++++++++++
        constructor(x: number, y: number) {
            super("laser");
            this._dx = 5;
            this.x = x;
            this.y = y;
            this.soundString = "laser_sound";
        }

        //public methods+++++++++++++++++++++++++++

        private _checkBounds() {
            if (this.x > 680 - this.width) {
                stage.removeChild(this);

            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            
            this.x += 5;
            this._checkBounds();
        }
        public hit() {
            stage.removeChild(this);
        }

    }
}  