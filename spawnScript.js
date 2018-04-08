// Public prefabs
public var enemy : GameObject;
public var waveCount : int = 1;
public var spawnTime : float = 2;
private var Z_LOC : float = 0;


function Start () {
    // call the 'addEnemy' function in 0 seconds
    // then every 'spawnTime' seconds
    for (var i = 0; i < Random.Range(1,3); i++) {
        InvokeRepeating("addEnemy", Random.Range(0,4), spawnTime);
    }   
}

function addEnemy() {
    var render = GetComponent("Renderer");

    var yBoundTop = transform.position.y - render.bounds.size.y/2;
    var yBondBottom = transform.position.y + render.bounds.size.y/2;

    var yOffset = 0.5f;

    var spawnPoint = Vector3(transform.position.x, Random.Range(yBoundTop - yOffset, yBondBottom), Z_LOC);

    Instantiate(enemy, spawnPoint, Quaternion.Euler(Vector3(0, -153, -7)));
}