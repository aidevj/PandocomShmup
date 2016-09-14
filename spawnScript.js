// Variable to store the enemy prefab
public var enemy : GameObject;
public var waveCount : int = 3;

// variable to know who fast we should create new enemies
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

    // position of the top edge of the spawn object
    // It's: (position of the center) minus (half the width)
    var y1 = transform.position.y - render.bounds.size.y/2;

    // right edge
    var y2 = transform.position.y + render.bounds.size.y/2;

    // randomly pick a point within the spawn object
    var spawnPoint = Vector2(transform.position.x, Random.Range(y1, y2));

    // create an enemy at the spawnPoint position
    Instantiate(enemy, spawnPoint, Quaternion.identity);
}