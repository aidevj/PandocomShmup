// A variable taht will contain our bullet prefab
public var bullet : GameObject;

private var CEILING_Y : float = 5.0; // to be added to a Game Manager class scritp
private var FLOOR_Y : float = 5.0;
//private var topLeft = Camera.main.ViewportToWorldPoint(new Vector3(0, 1, planeDistance));
//private var topRight = Camera.main.ViewportToWorldPoint(new Vector3(1, 1, planeDistance));
//private var bottomLeft = Camera.main.ViewportToWorldPoint(new Vector3(0, 0, planeDistance));
//private var bottomRight = Camera.main.ViewportToWorldPoint(new Vector3(1, 0, planeDistance));

// Function called about 60 times per second
function Update() {
    var r2d = GetComponent("Rigidbody2D");

    // Edge detection function call
    if (IsAtEdge(r2d))
        r2d.velocity = Vector2(0,0);


    // Move the spaceship when an arrow key is pressed
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
    // When space bar is pressed
    if (Input.GetKeyDown("space")) {
        // create a new bullet at "transform.position"
        // which is the current position of the ship
        // Quaternion.identity = add the bullet with no rotation
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
}

// edge detection
function IsAtEdge(rigidbody){
    // get edges of screen
    if (rigidbody.position.y >= CEILING_Y || rigidbody.position.y <= FLOOR_Y)
        return true;
    return false;
}


// movement of character controls scrolling background
// character can only go as far as the center verticle, any more forward and the background will scroll
// unless at the end of the backgroun where the character can move until the edge of the map
// character backing up to the left edge slowly backs up the background scrolling as well
// (as to prevent overusing backing up as a means of escaping enemies)
// http://answers.unity3d.com/questions/600429/stop-movement-at-edge-of-screen-2d-shooter.html