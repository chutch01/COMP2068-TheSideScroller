/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ball.ts" />
/// <reference path="../objects/hallway.ts" />
/// <reference path="../objects/samus.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // PLAY STATE
    var Play = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Play() {
            this.enemies = [];
            createjs.Sound.play("brinstar", { loop: -1 });
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add ocean to game
            this.hallway = new objects.Hallway();
            this.game.addChild(this.hallway);
            // Add island to game
            this.ball = new objects.Ball();
            this.game.addChild(this.ball);
            // Add plane to game
            this.samus = new objects.Samus();
            this.game.addChild(this.samus);
            for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                this.enemies[enemy] = new objects.Enemy();
                this.game.addChild(this.enemies[enemy]);
            }
            this.scoreboard = new objects.ScoreBoard(this.game);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Calculate the distance between two points
        Play.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; // distance end
        // CHeck Collision Method
        Play.prototype.checkCollision = function (collider1, hit1, collider2, hit2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = collider1.x;
            p1.y = collider1.y;
            p2.x = collider2.x;
            p2.y = collider2.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((collider1.height * 0.5) + (collider2.height * 0.5))) {
                if (!collider2.isColliding && !collider1.isColliding) {
                    createjs.Sound.play(collider2.soundString);
                    collider1.isColliding = true;
                    collider2.isColliding = true;
                    if (hit1) {
                        collider1.hit();
                    }
                    if (hit2) {
                        collider2.hit();
                    }
                }
            }
            else {
                collider1.isColliding = false;
                collider2.isColliding = false;
            }
        }; // checkCollision end
        // UPDATE METHOD
        Play.prototype.update = function () {
            this.hallway.update();
            this.samus.update();
            this.ball.update();
            //collision between enemy and Samus
            if (this.scoreboard.lives > 0) {
                for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                    this.enemies[enemy].update();
                    this.checkCollision(this.samus, true, this.enemies[enemy], true);
                }
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
        }; // update method end
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map