#pragma strict
class ControllerGameScript extends JoypadScript{
	 var player:int=0;
	 var zoom:float=70;
	 var zoomADD:float=10;
	 private var zoomNew:float=40;
	 function Start () {
		 var c : CharacterController;
		 c = GetComponent(CharacterController);
		 c.detectCollisions = true;
		 }
	 private var init:boolean=true;
	 var miroGUIJoypadScript:MiroGUIJoypadScript;
	 function Update () {
		 if(miroGUIJoypadScript.isPlay){
			 if(init){
				 if(miroGUIJoypadScript.JoypadPlayer[player-1]!=Joypad.none){
					 initPlayerButtons(miroGUIJoypadScript.JoypadPlayer[player-1]);
					 init=false;
					 }
				 }
			 if(!init)controllerPlayer();
			 else anim(2);
			 }
		 }
	 var speed : float = 10.0;
	 var projectile : GameObject;
	 var fireRate : float = 0.5;
	 private var nextFire : float = 0.0;
	 var rotateSpeed = 500.0;
	 private var moveDirection = Vector3.zero;
	 function controllerPlayer(){
		 if ((Input.GetKeyDown(ButtonA)||Input.GetKeyDown(ButtonB)) && Time.time > nextFire) {
			 nextFire = Time.time + fireRate;
			 var clone : GameObject = Instantiate(projectile, transform.position, transform.rotation) as GameObject;
			 }
		 if(Input.GetKeyDown(ButtonR1)||Input.GetKeyDown(ButtonL2)||Input.GetKeyDown(KeyCode.LeftControl))zoomNew+=zoomADD;
		 if(Input.GetKeyDown(ButtonL1)||Input.GetKeyDown(ButtonR2)||Input.GetKeyDown(KeyCode.LeftShift))zoomNew-=zoomADD;
		 if(zoomNew>zoom-2)zoomNew-=Time.deltaTime*5;
		 else if(zoomNew<zoom+2)zoomNew+=Time.deltaTime*5;
		 else zoom=zoomNew;
		 Camera.main.fieldOfView=zoomNew;
		 if(Input.GetKeyDown(ButtonStart)||Input.GetKeyDown(KeyCode.Escape)){
			 miroGUIJoypadScript.isPlay=false;
			 init=true;
			}
		 if ((Mathf.Abs(Input.GetAxis(Vertical)) > 0.7)||(Mathf.Abs(Input.GetAxis(Horizontal)) > 0.7)){
			 transform.Translate ((Input.GetAxis (Vertical) * speed * Time.deltaTime) , 0, (Input.GetAxis (Horizontal) * speed * Time.deltaTime));
			 var targetDirection = Vector3(Input.GetAxis(Vertical),0,Input.GetAxis(Horizontal));
			 var step = speed * Time.deltaTime;
			 var newDir = Vector3.RotateTowards(character1.transform.forward, targetDirection, step, 0.0);
			 character1.transform.rotation = Quaternion.LookRotation(newDir);
			 anim(1);
			 }
		else anim(0);
		 }
	 public var idleAnimation : AnimationClip;
	 public var idleAnimationJump : AnimationClip;
	 public var runAnimation : AnimationClip;
	 public var character1:GameObject;
	 function anim(a:int){
		 if(a==0)character1.animation.CrossFade(idleAnimation.name);
		 else if(a==1) character1.animation.CrossFade(runAnimation.name);
		 else if(a==2){
			 character1.animation[idleAnimationJump.name].speed = 0.05;
			 character1.animation.CrossFade(idleAnimationJump.name,0.05);
			 }
		 }
	 var pushPower:int = 1.3;
	 function OnCollisionEnter(collision : Collision) {
		 if(collision.gameObject.tag!="ball")return;
		 collision.transform.rotation = Quaternion.FromToRotation (Vector3.up, character1.transform.forward);
		 collision.gameObject.rigidbody.velocity = pushPower * character1.transform.forward*collision.relativeVelocity.magnitude;
		 }
	function OnDestroy() {
		WinScript.score++;
		 }
		  
	 }

 