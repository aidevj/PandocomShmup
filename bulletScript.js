private var speed : int = 10;
private var r2d;

function Start() {
    r2d = GetComponent("Rigidbody2D");
    r2d.velocity.x = speed;
}

function Update() {
	transform.position.z = 0;
}
	

function OnCollisionEnter2D(col : Collision2D) {

	if (col.gameObject.tag == "Enemy") {
		Destroy(gameObject);
		//Destroy(col.gameObject);
	}
}

function OnBecameInvisible() { 
    Destroy(gameObject);
}