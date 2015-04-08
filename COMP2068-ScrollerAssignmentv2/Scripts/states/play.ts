/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ball.ts" />
/// <reference path="../objects/hallway.ts" />
/// <reference path="../objects/samus.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/laser.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    // PLAY STATE
    export class Play {
        private _container: createjs.Container;
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public samus: objects.Samus;
        public ball: objects.Ball;
        public laser: objects.Laser;
        public lasers: objects.Laser[] = [];
        public enemies: objects.Enemy[] = [];
        public hallway: objects.Hallway;
        public scoreboard: objects.ScoreBoard;



        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            createjs.Sound.play("brinstar", { loop: -1 });
            // Instantiate Game Container

            this.game = new createjs.Container();
            

            // Add ocean to game
            this.hallway = new objects.Hallway();
            
            this.game.addChild(this.hallway);
   
       


            // Add island to game
            this.ball = new objects.Ball();
            this.game.addChild(this.ball);

            //add scoreboard to the game
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add plane to game
            this.samus = new objects.Samus(this.game);
            this.game.addChild(this.samus);

            // Add clouds to game
            for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                this.enemies[enemy] = new objects.Enemy(this.scoreboard);
                this.game.addChild(this.enemies[enemy]);
            }
            

          

                document.addEventListener("keydown", function (event) {
                    event.preventDefault(); //stops the page from scrolling down when space is pressed
                    play.samus.actionStart(event.keyCode); //send the plane the key that was pressed
                });


            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        // Calculate the distance between two points
        distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } // distance end

        // CHeck Collision Method
        checkCollision(collider1: objects.GameObject, hit1: boolean, collider2: objects.GameObject, hit2: boolean) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = collider1.x;
            p1.y = collider1.y;
            p2.x = collider2.x;
            p2.y = collider2.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((collider1.height * 0.5) + (collider2.height * 0.5))) {
                if (!collider2.isColliding && !collider1.isColliding) { // Collision has occurred
                    createjs.Sound.play(collider2.soundString);
                    collider1.isColliding = true;
                    collider2.isColliding = true;

                    switch (collider2.name) {
                        case "ball":
                            this.scoreboard.score += 100;
                            break;
                        case "enemy":
                            this.scoreboard.lives--;
                            break;
                    }

                    switch (collider1.name) {
                        case "enemy":
                    }
                    if (hit1) {
                        collider1.hit();
                    }
                    if (hit2) {
                        collider2.hit();
                    }
                }
            } else {
                collider1.isColliding = false;
                collider2.isColliding = false;
            }
    } // checkCollision end
        
        // UPDATE METHOD
        public update() {

            this.hallway.update();
            this.samus.update();
            this.ball.update();
            //collision between enemy and Samus
            if (this.scoreboard.lives > 0) {
                for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                    this.enemies[enemy].update();
                    this.checkCollision(this.samus, true, this.enemies[enemy], true);
                    
                }
      
                    

                    //COLLISION BETWEEN ENEMY AND LASER
                    for (var laser = this.samus.totalLasers - 1; laser >= 0; laser--) {
                        this.samus.lasers[laser].update();
                        

                        for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                            if (this.samus.lasers[laser] != null) {
                                this.checkCollision(this.enemies[enemy], true, this.samus.lasers[laser], true);
                            }  

                        } //if ends
                    } //for ends

                //collision between samus and ball
                this.checkCollision(this.samus, false, this.ball, true);
               
                
            }

            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
        }// update method end

        public fire() {
            
      
            

        }

        }


    }
  
    