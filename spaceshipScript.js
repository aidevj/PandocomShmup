// A variable taht will contain our bullet prefab
public var bullet : GameObject;

// Get camera object for viewport dimensions
//GameObject mainCam = GameObject.Find("Main Camera");

// Function called about 60 times per second
function Update() {
    // Get the rigidbody component
    var r2d = GetComponent("Rigidbody2D");

    // Edge detection function call
    if (IsAtEdge(r2d))
        r2d.velocity = Vector2(0,0);


    // Move the spaceship when an arrow key is pressed
    if (Input.GetKey("up"))
        r2d.velocity.y = 10;
    else if (Input.GetKey("down"))
        r2d.velocity.y = -10;
    else if (Input.GetKey("left"))
        r2d.velocity.x = -10;
    else if (Input.GetKey("right"))
        r2d.velocity.x = 10;
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
    if (rigidbody.position.x >= Screen.width || rigidbody.position.y >= Screen.height)
        return true;
    return false;
}