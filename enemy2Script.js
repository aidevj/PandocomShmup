// TYPE2 ENEMY:
//when hit, bursts into 3 smaller regular moving enemies

public var velocity : int = -3;
public var miniEnemy : GameObject;

function Start() {
    var r2d = GetComponent("Rigidbody2D");

    r2d.velocity.x = velocity;

    // make the enemy rotate on itself
    //r2d.angularVelocity = Random.Range(-200, 200);
}


// Update Function
function Update(){ 

    transform.position.z = 0;
    if (transform.position.x < -8f) { Destroy(gameObject); }	//left bound
}


function OnCollisionEnter2D(col : Collision2D) {


    Debug.Log("enemy colliding");
    if (col.gameObject.tag == "Player" || col.gameObject.tag == "Bullet") {
        Death();
    }
}

function Death() {
	// spawn 3 minis upon death
	for (var i = 0; i < 3; i++) {
		Instantiate(miniEnemy, transform.position, Quaternion.Euler(Vector3(0, -153, -7)));
	}

	Destroy(gameObject);
}