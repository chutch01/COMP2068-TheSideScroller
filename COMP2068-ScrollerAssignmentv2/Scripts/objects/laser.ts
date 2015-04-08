/*
 * this is the laser that the player fires from the character it will be removed if it collides with something
 */
module objects {
    export class Laser extends objects.GameObject {
        public _container: createjs.Container;
        public samus: objects.Samus;
        //constructor ++++++++++++++++++++++++++++
        constructor(x: number, y: number, samus: objects.Samus, container: createjs.Container ) {
            super("laser");
            this._dx = 5;
            this.x = x;
            this.y = y;
            this.soundString = "laser_sound";
            this.samus = samus;
            this._container = container;
        }

        //public methods+++++++++++++++++++++++++++
        private _reset() {
            
            this._container.removeChild(this);
            this.samus.lasers.splice(this.samus.lasers.indexOf(this), 1);
            this.samus.totalLasers--;
            
        }

        private _checkBounds() {
            //console.log("checking bounds");
            if (this.x >= 680 + this.width) {
                this._reset();

            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            
            this.x += 5;
           // console.log("about to check bounds");
            this._checkBounds();
        }
        public hit() {
            createjs.Sound.play("enemyexplosion");
            this._reset();
        }

    }
}  