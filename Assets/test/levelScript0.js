#pragma strict

function Start () {

}

function Update () {

}



	 
public var imageTest_bg1 :Texture2D;	 
public var imageTest_bg2 :Texture2D;	
public var lev1:boolean =false;	
function OnGUI () {
if(lev1){
GUI.DrawTexture(Rect(pcx(90),pcy(90),pcx(9),pcy(7)),imageTest_bg1, ScaleMode.StretchToFill,true);	
if(Rect(pcx(90),pcy(90),pcx(9),pcy(7)).Contains(Event.current.mousePosition)){	
if(Input.GetMouseButtonUp(0)){	Application.LoadLevel(1);  } 
}
}else{
GUI.DrawTexture(Rect(pcx(90),pcy(90),pcx(9),pcy(7)),imageTest_bg2, ScaleMode.StretchToFill,true);	
if(Rect(pcx(90),pcy(90),pcx(9),pcy(7)).Contains(Event.current.mousePosition)){	
if(Input.GetMouseButtonUp(0)){	Application.LoadLevel(2);  }
}
}
}

function pcx(xx:float):float{
return (xx*Screen.width*0.01);
}
function pcy(xx:float):float{
return (xx*Screen.height*0.01);
}