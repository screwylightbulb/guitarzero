#pragma strict

private var nextBeat : float  = 0;
private var beatRate : float =  0.12;

var counter : int = 0;

var adrum : AudioSource; 
var asnare : AudioSource; 
var abass : AudioSource; 
var aguit : AudioSource; 

var sequence : String = "";

var countObj : UnityEngine.UI.Text;

function Start () {
    countObj = GameObject.Find("Count").GetComponent(UI.Text);
}

function Update () {
    
    if (Time.time > nextBeat) {
        nextBeat = Time.time + beatRate;
        Beat();
    }
    
    if (Input.GetKeyDown("h")) {
        aguit.pitch =  1.1;
        aguit.Play();
        sequence = sequence + counter.ToString();
        CheckSeq();
    }
    if (Input.GetKeyDown("j")) {
        aguit.pitch =  1.2;
        aguit.Play();
        sequence = sequence + counter.ToString();
        CheckSeq();
    }
    if (Input.GetKeyDown("k")) {
        aguit.pitch =  1.3;
        aguit.Play();
        sequence = sequence + counter.ToString();
        CheckSeq();
    }
    if (Input.GetKeyDown("l")) {
        aguit.pitch =  1.4;
        aguit.Play();
        sequence = sequence + counter.ToString();
        CheckSeq();
    }
    
}

function CheckSeq() {
    Debug.Log(sequence);
}

function Beat(){ 
    
    if (counter == 0) {
        Debug.Log("start");
    }

    if (counter % 2 == 0) {
        abass.Play();
    }

    if (counter % 4 == 0) {
        adrum.Play();
    }
    
    if (counter % 8 == 0) {
        asnare.Play();
    }
    
    counter++;
    
    if (counter == 15) {
        sequence = "";
    }
    if (counter == 16) {
        counter = 0;
    }
    
    countObj.text = counter.ToString();
}


