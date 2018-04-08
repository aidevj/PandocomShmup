public var bullet : GameObject;
public var sprite : GameObject;

private var r2d;
private var HP : int = 3;

private var velocity : int = -5;
private var amplitude : float = 1.5;
private var frequency : float = .2; 

private var spriteRend;


function Start() {
	r2d = GetComponent("Rigidbody2D");

	spriteRend = sprite.GetComponent.<SpriteRenderer>();
}

function Update() {
    // Check if player has died
    if (isDead()){ 
        death(); 
    }

    // Edge detection function call
    //if (IsAtEdge(r2d))
    //    r2d.velocity = Vector2(0,0);
    transform.rotation.x += amplitude * (Mathf.Sin(2 * Mathf.PI * frequency * Time.time) - Mathf.Sin(2 * Mathf.PI * frequency*(Time.time - Time.deltaTime))) * transform.rotation.x;
   
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

    // Bullet fire
    if (Input.GetKeyDown("space")) {
        Instantiate(bullet, Vector3(transform.position.x + .05, transform.position.y + 1.76f, transform.position.z), Quaternion.Euler(Vector3(0, 0, 0)));	// should spawn at position of  player at time of fire

    }
}

function OnCollisionEnter2D( col : Collision2D) {
	if (col.gameObject.tag == "Wall") Debug.Log("hit wall");
	if (col.gameObject.tag == "Enemy") decreaseHP();	// for now one hit death
}

// checks if player has died
function isDead(){
    return HP <= 0 ? true : false;
}

function decreaseHP() {
	HP--;

	switch(HP) {
		case 3:
			spriteRend.color = new Color(1,1,1,1);
			break;
		case 2:
			spriteRend.color = new Color(1,.5,.5,1);
			break;
		case 1:
			spriteRend.color = new Color(1,.2,.2,1);
			break;
		case 0:
			spriteRend.color = new Color(0,0,0,1);
			break;
	}
}

// death animation function here
function death(){
   // to do

   Destroy(gameObject);
}


// movement of character controls scrolling background
// character can only go as far as the center verticle, any more forward and the background will scroll
// unless at the end of the backgroun where the character can move until the edge of the map
// character backing up to the left edge slowly backs up the background scrolling as well
// (as to prevent overusing backing up as a means of escaping enemies)
// http://answers.unity3d.com/questions/600429/stop-movement-at-edge-of-screen-2d-shooter.html