#pragma strict

var moveSpeed : float =  10.0;

private var player : GameObject;

private var moveRight : boolean = false;
private var moveLeft : boolean = false;
private var moveForward : boolean = false;
private var moveBackward : boolean = false;

function Start() {
   	player = GameObject.Find("Player");
}

function Update () {
    
	if (Input.GetKeyUp(KeyCode.Escape)) {
//		Application.LoadLevel("menu");
	}


	if (Input.GetKeyDown("d") || Input.GetKeyDown(KeyCode.RightArrow)) {
    	moveRight=true;
	}
	if (Input.GetKeyUp("d") || Input.GetKeyUp(KeyCode.RightArrow)) {
	    moveRight=false;
	}

	if (Input.GetKeyDown("a") || Input.GetKeyDown(KeyCode.LeftArrow)) {
	    moveLeft=true;
	}
	if (Input.GetKeyUp("a") || Input.GetKeyUp(KeyCode.LeftArrow)) {
	    moveLeft=false;
	}

	if (Input.GetKeyDown("w") || Input.GetKeyDown(KeyCode.UpArrow)) {
	    moveForward=true;
	}
	if (Input.GetKeyUp("w") || Input.GetKeyUp(KeyCode.UpArrow)) {
	    moveForward=false;
	}

	if (Input.GetKeyDown("s") || Input.GetKeyDown(KeyCode.DownArrow)) {
	    moveBackward=true;
	}
	if (Input.GetKeyUp("s") || Input.GetKeyUp(KeyCode.DownArrow)) {
	    moveBackward=false;
	}
}

function FixedUpdate () {
    
	if (moveRight) {
            rigidbody.velocity.x = moveSpeed;
            player.transform.rotation.eulerAngles.y = 0;
            //player.transform.rotation.eulerAngles.z = -10;
	} else if (moveLeft) {
	    rigidbody.velocity.x = 0-moveSpeed;
            player.transform.rotation.eulerAngles.y = 180;
	    //player.transform.rotation.eulerAngles.z = 10;
	} 
	
	if (!moveRight && !moveLeft) {
	    rigidbody.velocity.x = 0;
   	    //player.transform.rotation.eulerAngles.z = 0;
        }

	if (moveForward) {
	    rigidbody.velocity.z = moveSpeed;
	} else if (moveBackward) {
	    rigidbody.velocity.z = 0-moveSpeed;
	} 

	if (!moveForward && !moveBackward) {
	    rigidbody.velocity.z = 0;
	}	

	//if (go.NoControl) {
        //    rigidbody.velocity.x = 0;
        //    rigidbody.velocity.z = 0;
	//}

	if (transform.localPosition.x > 18.5) {
            transform.localPosition.x = 18.5;
	}
	if (transform.localPosition.x < -14.5) {
            transform.localPosition.x = -14.5;
	}
	
	/*
	var go = GameObject.Find("State").GetComponent(State);
	if (go.powerUp6 == true) {
		fireRate = 0.3;
	} else {
		fireRate = 0.8;
	}
	if (go.powerUp1 == true) {
		moveSpeed = 15.0;
	} else {
		moveSpeed = 10.0;
	}

	if (go.powerUp5 == true && shieldUp) {
		shield.renderer.active = true;
	} else {
		shield.renderer.active = false;
	}
        */	
}

