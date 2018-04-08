// TYPE MINI ENEMY:
//bursts from bigger enemies


function Start() {
    var r2d = GetComponent("Rigidbody2D");

    var angle = Random.Range(30f, 150f) + Random.Range(0,2) * 180f;
    var radAngle = angle * Mathf.Deg2Rad;

    var dir : Vector2 = new Vector2(Mathf.Cos(radAngle), Mathf.Sin(radAngle)) * 6;

    r2d.velocity = dir;

   // give a random direction to go in
}


// Update Function
function Update() { 
    transform.position.z = 0;

    if (transform.position.x < -8f) { Destroy(gameObject); }	//left bound
}

function OnBecameInvisible() {
	Destroy(gameObject);
}


function OnCollisionEnter2D(col : Collision2D) {

    Debug.Log("enemy colliding");
    if (col.gameObject.tag == "Player") {
        Death();
    }
}

function Death() {
	Destroy(gameObject);
}