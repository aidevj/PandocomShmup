public var bullet : GameObject;

private var r2d;
private var HP : int;

function Start() {
	r2d = GetComponent("Rigidbody2D");
}

function Update() {
    
    // Check if player has died
    if (isDead){ 
        death(); 
    }

    // Edge detection function call
    //if (IsAtEdge(r2d))
    //    r2d.velocity = Vector2(0,0);


    // Player Movement
    if (Input.GetKey("up"))
        r2d.velocity.y = 7;
    else if (Input.GetKey("down"))
        r2d.velocity.y = -7;
    else if (Input.GetKey("left"))
        r2d.velocity.x = -7;
    else if (Input.GetKey("right"))
        r2d.velocity.x = 7;
    else
        r2d.velocity = Vector2(0,0);

    // Bullet firing handling
    if (Input.GetKeyDown("space")) {
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
}

// checks if player has died
function isDead(){
    if (HP <= 0)
        return true;
    return false;
}

// death animation function here
function death(){
   // to do
}


// movement of character controls scrolling background
// character can only go as far as the center verticle, any more forward and the background will scroll
// unless at the end of the backgroun where the character can move until the edge of the map
// character backing up to the left edge slowly backs up the background scrolling as well
// (as to prevent overusing backing up as a means of escaping enemies)
// http://answers.unity3d.com/questions/600429/stop-movement-at-edge-of-screen-2d-shooter.html