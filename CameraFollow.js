// public variables
public var target : Transform;

function Start () {
	var camera = GetComponent("Camera");
}

function Update () {
	camera.orthographicSize = (Screen.height/100f) / 4f; // 4f is an arbitrary scaling number
}