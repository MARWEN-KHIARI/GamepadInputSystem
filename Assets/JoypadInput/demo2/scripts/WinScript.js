#pragma strict
var wintext:Transform;
static var score:int=0;
function Update () {
if(score>=3){
Instantiate(wintext, Vector3(0.2,0.4,0), Quaternion.identity);
score=0;
}
}