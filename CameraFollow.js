// public variables
public var target : Transform;
public var camSpeed : float = 0.8f;

public var firstWall : Transform;
public var lastWall : Transform;

private var distFromFirstWall : float;
private var distFromLastWall : float;
private var safeFollowDistance : float = 7.5f;


function Start () {
	//var camera = GetComponent("Camera");
}

function Update () {
	//GetComponent.<Camera>().orthographicSize = (Screen.height/100f) / 1f; // 2f is an arbitrary scaling number
	
	// calculate the targets distance from the walls (with offset)
	distFromFirstWall = Mathf.Abs(target.transform.position.x - firstWall.transform.position.x) + 1f;
	distFromLastWall = Mathf.Abs(target.transform.position.x - lastWall.transform.position.x) + 1f;
	
	// if target is NOT within (greater than) 7f of either of the walls, it is ok to follow
	if (distFromFirstWall > safeFollowDistance && distFromLastWall > safeFollowDistance) {
		transform.position = Vector3.Lerp(transform.position, target.position, camSpeed);
		transform.position.y = 0; //lock y movement
		transform.position.z = -10; //lock z movement
	}//IT WORKS
	
	
	// NORMAL WORKING LERP FOLLOW without psuedo"wall detection"
	/*if (target) {
		transform.position = Vector3.Lerp(transform.position, target.position, camSpeed);
		transform.position.y = 0; //lock y movement
		transform.position.z = -10; //lock z movement
	}/**/
	
	//nope
	// when the target is in line with the cameras center verticle line (x), move with target
	/*if (target.transform.position.x == transform.position.x){
		transform.position = Vector3(target.transform.position.x, 0, -10);
	}/**/

}