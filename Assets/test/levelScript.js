#pragma strict

function Start () {

}

function Update () {

}



public var imageTest_bg0 :Texture2D;	 
public var imageTest_bg1 :Texture2D;	 
public var imageTest_bg2 :Texture2D;	

function OnGUI () {
//if(GUILayout.Button("Demo level 1"))Application.LoadLevel(1);
//if(GUILayout.Button("Demo level 2"))Application.LoadLevel(2);
GUI.DrawTexture(Rect(pcx(0),pcy(0),pcx(100),pcy(100)),imageTest_bg0, ScaleMode.StretchToFill,true);	
GUI.DrawTexture(Rect(pcx(11.16),pcy(14.79),pcx(21.62),pcy(12.11)),imageTest_bg1, ScaleMode.StretchToFill,true);	
if(Rect(pcx(11.16),pcy(14.79),pcx(21.62),pcy(12.11)).Contains(Event.current.mousePosition)){	
if(Input.GetMouseButtonUp(0)){	Application.LoadLevel(1);  } 
}
GUI.DrawTexture(Rect(pcx(10.74),pcy(29.39),pcx(22.45),pcy(12.75)),imageTest_bg2, ScaleMode.StretchToFill,true);	
if(Rect(pcx(10.74),pcy(29.39),pcx(22.45),pcy(12.75)).Contains(Event.current.mousePosition)){	
if(Input.GetMouseButtonUp(0)){	Application.LoadLevel(2);  } }
}

function pcx(xx:float):float{
return (xx*Screen.width*0.01);
}
function pcy(xx:float):float{
return (xx*Screen.height*0.01);
}