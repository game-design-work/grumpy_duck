var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");

var Bird = function() {
	var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.5;
    physics.acceleration.y = -2;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    var collision = new collisionComponent.CircleCollisionComponent(this, 0.04);
    collision.onCollision = this.onCollision.bind(this);
    
    this.components = {
        physics: physics,
        graphics: graphics,
        collision: collision
    };
};

exports.Bird = Bird;