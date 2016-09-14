// Public variable that contains the speed of the enemy
public var speed : int = -5;

// Fuction called when the enemy is created
function Start() {
    // Get the rigidbody component
    var r2d = GetComponent("Rigidbody2D");

    // Add a horizantal speed to the enemy
    r2d.velocity.x = speed;

    // make the enemy rotate on itself
    r2d.angularVelocity = Random.Range(-200, 200);
}

// Function called when the object goes out of the screen
function OnBecameInvisible(){
    // Destroy the enemy
    Destroy(gameObject);
}

// Function called when the enemy collides with another object
function OnTriggerEnter2D(obj) {
    // name of the obejct that collided with the enemy
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet(Clone)") {
        // destroy itself (the enemy) and bullet
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

    // If the enemy collided with the spaceshit
    if (name == "spaceship") {
        // destroy itself (the enemy) to keep things simple
        Destroy(gameObject);
    }
}