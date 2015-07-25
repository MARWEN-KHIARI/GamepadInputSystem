 private var count:int=4;
 private var collOther:GameObject;
 var text1:TextMesh;
 var text2:TextMesh;
 var text3:TextMesh;
 var explose:ParticleEmitter;
 function Start(){
	 textChg(0);
	 }

 function OnCollisionEnter(collision : Collision) {
	 if(collision.gameObject.tag!="Player")return;
	 if(collOther!=collision.gameObject){
		collOther=collision.gameObject;
		 count--;
		 }
	 textChg(count);
	 if(count<=0){
		 explose.emit=true;
		 transform.DetachChildren();
		 Destroy(collision.gameObject);
		 Destroy(text1.gameObject);
		 Destroy(text2.gameObject);
		 Destroy(text3.gameObject);
		 Destroy(gameObject);
		 }
	 }

 function textChg(nb:int){
	 text1.text=""+nb;
	 text2.text=""+nb;
	 text3.text=""+nb;
	 }

 