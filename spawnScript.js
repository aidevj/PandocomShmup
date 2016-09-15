// Public prefabs
public var enemy : GameObject;
public var waveCount : int = 3;
public var spawnTime : float = 2;

function Start () {
    // call the 'addEnemy' function in 0 seconds
    // then every 'spawnTime' seconds
    for (var i = 0; i < waveCount; i++) {
        InvokeRepeating("addEnemy", Random.Range(0,4), spawnTime);
    }
        
}

// new function to spawn and enemy
function addEnemy() {
    // get the renderer component of the spawn object
    var render = GetComponent("Renderer");

    // position of the top & bottom edges of spawn obj
    var y1 = transform.position.y - render.bounds.size.y/2;
    var y2 = transform.position.y + render.bounds.size.y/2;

    // randomly pick a point within the spawn object
    var spawnPoint = Vector2(transform.position.x, Random.Range(y1, y2));

    // create an enemy at the spawnPoint position
    Instantiate(enemy, spawnPoint, Quaternion.identity);
}