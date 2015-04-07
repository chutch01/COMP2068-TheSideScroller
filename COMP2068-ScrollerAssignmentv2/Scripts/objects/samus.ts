module objects {

    export class Samus extends objects.GameObject {
        private _container: createjs.Container;
        public width: number;
        public height: number;
        public name: string;
        public laser: objects.Laser;
        public lasers: objects.Laser[] = [];
        public totalLasers: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(container: createjs.Container) {

            super("samus");
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

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public shoot() {
            createjs.Sound.play("lasersound");
            this.lasers[this.totalLasers] = new objects.Laser(this.x, this.y);
            this._container.addChild(this.lasers[this.totalLasers]);
            this.totalLasers++;
        }
        public update() {
            this.y = stage.mouseY;
        }

        public actionStart(key) {
            if (key == 32) {
                console.log("firing");
                this.shoot();
            } //if ends
        }
    }

} 