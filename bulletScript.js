// public variable, can be directly edited in inspector
public var speed : int = 8;

// function called once when the bullet is created
function Start() {
    // get rigidbody component
    var r2d = GetComponent("Rigidbody2D");

    // make the bullet move sideways
    r2d.velocity.x = speed;
}

// Function called when the object goes out of the screen
function OnBecameInvisible() { // this is preset name function in unity(?)
    // destroy the bullet
    Destroy(gameObject);
}