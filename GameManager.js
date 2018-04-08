#pragma strict

public class GameManager extends MonoBehaviour{
    // Prefabs //
    public var playerPrefab : GameObject;
    public var spawnPrefab : GameObject;

    public var wave1 : int;		// number of type1 enemy in first wave
    public var wave2 : int;
    public var wave3 : int;

    public var hp : int;
    
    // use for initialization 
    function Start () {
        // create player
        // take out initialization code from spaceshipscript?
    }

    function Update () {

    }
}
