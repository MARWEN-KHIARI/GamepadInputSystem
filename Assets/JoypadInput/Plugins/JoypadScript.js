#pragma strict
/* by Khiari Marwen 
* maroien88@Gmail.com 	 */
 enum JoyButton{
	 ButtonA, ButtonB, ButtonX, ButtonY, ButtonL1, ButtonL2, ButtonR1, ButtonR2, ButtonStart, ButtonSelect }

 enum Joypad{
	 none, Joypad1, Joypad2, Joypad3, Joypad4 }

 private var Joy1ButtonA:KeyCode;
 private var Joy1ButtonB:KeyCode;
 private var Joy1ButtonX:KeyCode;
 private var Joy1ButtonY:KeyCode;
 private var Joy1ButtonL1:KeyCode;
 private var Joy1ButtonL2:KeyCode;
 private var Joy1ButtonR1:KeyCode;
 private var Joy1ButtonR2:KeyCode;
 private var Joy1ButtonStart:KeyCode;
 private var Joy1ButtonSelect:KeyCode;
 private var Joy2ButtonA:KeyCode;
 private var Joy2ButtonB:KeyCode;
 private var Joy2ButtonX:KeyCode;
 private var Joy2ButtonY:KeyCode;
 private var Joy2ButtonL1:KeyCode;
 private var Joy2ButtonL2:KeyCode;
 private var Joy2ButtonR1:KeyCode;
 private var Joy2ButtonR2:KeyCode;
 private var Joy2ButtonStart:KeyCode;
 private var Joy2ButtonSelect:KeyCode;
 private var Joy3ButtonA:KeyCode;
 private var Joy3ButtonB:KeyCode;
 private var Joy3ButtonX:KeyCode;
 private var Joy3ButtonY:KeyCode;
 private var Joy3ButtonL1:KeyCode;
 private var Joy3ButtonL2:KeyCode;
 private var Joy3ButtonR1:KeyCode;
 private var Joy3ButtonR2:KeyCode;
 private var Joy3ButtonStart:KeyCode;
 private var Joy3ButtonSelect:KeyCode;
 private var Joy4ButtonA:KeyCode;
 private var Joy4ButtonB:KeyCode;
 private var Joy4ButtonX:KeyCode;
 private var Joy4ButtonY:KeyCode;
 private var Joy4ButtonL1:KeyCode;
 private var Joy4ButtonL2:KeyCode;
 private var Joy4ButtonR1:KeyCode;
 private var Joy4ButtonR2:KeyCode;
 private var Joy4ButtonStart:KeyCode;
 private var Joy4ButtonSelect:KeyCode;
 public var ButtonA:KeyCode;
 public var ButtonB:KeyCode;
 public var ButtonX:KeyCode;
 public var ButtonY:KeyCode;
 public var ButtonL1:KeyCode;
 public var ButtonL2:KeyCode;
 public var ButtonR1:KeyCode;
 public var ButtonR2:KeyCode;
 public var ButtonStart:KeyCode;
 public var ButtonSelect:KeyCode;
 public var Vertical:String;
 public var Horizontal:String;
 function initPlayerButtons(joypad:Joypad){
	 LoadButtons(joypad);
	 if(buttonNotFoundedCOUNT > 2){
			ResetDefaultButton(joypad);
		}
	 if(joypad==Joypad.Joypad1){
		 Vertical="Joy1X";
		 Horizontal="Joy1Y";
		 ButtonA=Joy1ButtonA;
		 ButtonB=Joy1ButtonB;
		 ButtonX=Joy1ButtonX;
		 ButtonY=Joy1ButtonY;
		 ButtonL1=Joy1ButtonL1;
		 ButtonL2=Joy1ButtonL2;
		 ButtonR1=Joy1ButtonR1;
		 ButtonR2=Joy1ButtonR2;
		 ButtonStart=Joy1ButtonStart;
		 ButtonSelect=Joy1ButtonSelect;
		 }
	 else if(joypad==Joypad.Joypad2){
		 Vertical="Joy2X";
		 Horizontal="Joy2Y";
		 ButtonA=Joy2ButtonA;
		 ButtonB=Joy2ButtonB;
		 ButtonX=Joy2ButtonX;
		 ButtonY=Joy2ButtonY;
		 ButtonL1=Joy2ButtonL1;
		 ButtonL2=Joy2ButtonL2;
		 ButtonR1=Joy2ButtonR1;
		 ButtonR2=Joy2ButtonR2;
		 ButtonStart=Joy2ButtonStart;
		 ButtonSelect=Joy2ButtonSelect;
		 }
	 else if(joypad==Joypad.Joypad3){
		 Vertical="Joy3X";
		 Horizontal="Joy3Y";
		 ButtonA=Joy3ButtonA;
		 ButtonB=Joy3ButtonB;
		 ButtonX=Joy3ButtonX;
		 ButtonY=Joy3ButtonY;
		 ButtonL1=Joy3ButtonL1;
		 ButtonL2=Joy3ButtonL2;
		 ButtonR1=Joy3ButtonR1;
		 ButtonR2=Joy3ButtonR2;
		 ButtonStart=Joy3ButtonStart;
		 ButtonSelect=Joy3ButtonSelect;
		 }
	 else if(joypad==Joypad.Joypad4){
		 Vertical="Joy4X";
		 Horizontal="Joy4Y";
		 ButtonA=Joy4ButtonA;
		 ButtonB=Joy4ButtonB;
		 ButtonX=Joy4ButtonX;
		 ButtonY=Joy4ButtonY;
		 ButtonL1=Joy4ButtonL1;
		 ButtonL2=Joy4ButtonL2;
		 ButtonR1=Joy4ButtonR1;
		 ButtonR2=Joy4ButtonR2;
		 ButtonStart=Joy4ButtonStart;
		 ButtonSelect=Joy4ButtonSelect;
		 }
	 }

 function saveButtons(joypad:Joypad){
	 if(joypad==Joypad.Joypad1){
		 saveButton("Joy1ButtonA",Joy1ButtonA);
		 saveButton("Joy1ButtonB",Joy1ButtonB);
		 saveButton("Joy1ButtonX",Joy1ButtonX);
		 saveButton("Joy1ButtonY",Joy1ButtonY);
		 saveButton("Joy1ButtonL1",Joy1ButtonL1);
		 saveButton("Joy1ButtonL2",Joy1ButtonL2);
		 saveButton("Joy1ButtonR1",Joy1ButtonR1);
		 saveButton("Joy1ButtonR2",Joy1ButtonR2);
		 saveButton("Joy1ButtonStart",Joy1ButtonStart);
		 saveButton("Joy1ButtonSelect",Joy1ButtonSelect);
		 PlayerPrefs.Save();
		 }
	 else if(joypad==Joypad.Joypad2){
		 saveButton("Joy2ButtonA",Joy2ButtonA);
		 saveButton("Joy2ButtonB",Joy2ButtonB);
		 saveButton("Joy2ButtonX",Joy2ButtonX);
		 saveButton("Joy2ButtonY",Joy2ButtonY);
		 saveButton("Joy2ButtonL1",Joy2ButtonL1);
		 saveButton("Joy2ButtonL2",Joy2ButtonL2);
		 saveButton("Joy2ButtonR1",Joy2ButtonR1);
		 saveButton("Joy2ButtonR2",Joy2ButtonR2);
		 saveButton("Joy2ButtonStart",Joy2ButtonStart);
		 saveButton("Joy2ButtonSelect",Joy2ButtonSelect);
		 PlayerPrefs.Save();
		 }
	 else if(joypad==Joypad.Joypad3){
		 saveButton("Joy3ButtonA",Joy3ButtonA);
		 saveButton("Joy3ButtonB",Joy3ButtonB);
		 saveButton("Joy3ButtonX",Joy3ButtonX);
		 saveButton("Joy3ButtonY",Joy3ButtonY);
		 saveButton("Joy3ButtonL1",Joy3ButtonL1);
		 saveButton("Joy3ButtonL2",Joy3ButtonL2);
		 saveButton("Joy3ButtonR1",Joy3ButtonR1);
		 saveButton("Joy3ButtonR2",Joy3ButtonR2);
		 saveButton("Joy3ButtonStart",Joy3ButtonStart);
		 saveButton("Joy3ButtonSelect",Joy3ButtonSelect);
		 PlayerPrefs.Save();
		 }
	 else if(joypad==Joypad.Joypad4){
		 saveButton("Joy4ButtonA",Joy4ButtonA);
		 saveButton("Joy4ButtonB",Joy4ButtonB);
		 saveButton("Joy4ButtonX",Joy4ButtonX);
		 saveButton("Joy4ButtonY",Joy4ButtonY);
		 saveButton("Joy4ButtonL1",Joy4ButtonL1);
		 saveButton("Joy4ButtonL2",Joy4ButtonL2);
		 saveButton("Joy4ButtonR1",Joy4ButtonR1);
		 saveButton("Joy4ButtonR2",Joy4ButtonR2);
		 saveButton("Joy4ButtonStart",Joy4ButtonStart);
		 saveButton("Joy4ButtonSelect",Joy4ButtonSelect);
		 PlayerPrefs.Save();
		 }
	 }

 function LoadButtons(joypad:Joypad){
	 buttonNotFoundedCOUNT=0;
	 if(joypad==Joypad.Joypad1){
		 Joy1ButtonA=LoadButton("Joy1ButtonA",joypad);
		 Joy1ButtonB=LoadButton("Joy1ButtonB",joypad);
		 Joy1ButtonX=LoadButton("Joy1ButtonX",joypad);
		 Joy1ButtonY=LoadButton("Joy1ButtonY",joypad);
		 Joy1ButtonL1=LoadButton("Joy1ButtonL1",joypad);
		 Joy1ButtonL2=LoadButton("Joy1ButtonL2",joypad);
		 Joy1ButtonR1=LoadButton("Joy1ButtonR1",joypad);
		 Joy1ButtonR2=LoadButton("Joy1ButtonR2",joypad);
		 Joy1ButtonStart=LoadButton("Joy1ButtonStart",joypad);
		 Joy1ButtonSelect=LoadButton("Joy1ButtonSelect",joypad);
		 }
	 else if(joypad==Joypad.Joypad2){
		 Joy2ButtonA=LoadButton("Joy2ButtonA",joypad);
		 Joy2ButtonB=LoadButton("Joy2ButtonB",joypad);
		 Joy2ButtonX=LoadButton("Joy2ButtonX",joypad);
		 Joy2ButtonY=LoadButton("Joy2ButtonY",joypad);
		 Joy2ButtonL1=LoadButton("Joy2ButtonL1",joypad);
		 Joy2ButtonL2=LoadButton("Joy2ButtonL2",joypad);
		 Joy2ButtonR1=LoadButton("Joy2ButtonR1",joypad);
		 Joy2ButtonR2=LoadButton("Joy2ButtonR2",joypad);
		 Joy2ButtonStart=LoadButton("Joy2ButtonStart",joypad);
		 Joy2ButtonSelect=LoadButton("Joy2ButtonSelect",joypad);
		 }
	 else if(joypad==Joypad.Joypad3){
		 Joy3ButtonA=LoadButton("Joy3ButtonA",joypad);
		 Joy3ButtonB=LoadButton("Joy3ButtonB",joypad);
		 Joy3ButtonX=LoadButton("Joy3ButtonX",joypad);
		 Joy3ButtonY=LoadButton("Joy3ButtonY",joypad);
		 Joy3ButtonL1=LoadButton("Joy3ButtonL1",joypad);
		 Joy3ButtonL2=LoadButton("Joy3ButtonL2",joypad);
		 Joy3ButtonR1=LoadButton("Joy3ButtonR1",joypad);
		 Joy3ButtonR2=LoadButton("Joy3ButtonR2",joypad);
		 Joy3ButtonStart=LoadButton("Joy3ButtonStart",joypad);
		 Joy3ButtonSelect=LoadButton("Joy3ButtonSelect",joypad);
		 }
	 else if(joypad==Joypad.Joypad4){
		 Joy4ButtonA=LoadButton("Joy4ButtonA",joypad);
		 Joy4ButtonB=LoadButton("Joy4ButtonB",joypad);
		 Joy4ButtonX=LoadButton("Joy4ButtonX",joypad);
		 Joy4ButtonY=LoadButton("Joy4ButtonY",joypad);
		 Joy4ButtonL1=LoadButton("Joy4ButtonL1",joypad);
		 Joy4ButtonL2=LoadButton("Joy4ButtonL2",joypad);
		 Joy4ButtonR1=LoadButton("Joy4ButtonR1",joypad);
		 Joy4ButtonR2=LoadButton("Joy4ButtonR2",joypad);
		 Joy4ButtonStart=LoadButton("Joy4ButtonStart",joypad);
		 Joy4ButtonSelect=LoadButton("Joy4ButtonSelect",joypad);
		 }
	 }

 function saveButton(NameButton:String,KeyButton:KeyCode){
	 PlayerPrefs.SetString(NameButton, ""+KeyButton);
	 FindButton(NameButton,Joypad.Joypad1);
	 }

 function LoadButton(NameButton:String,joypad:Joypad):KeyCode{
	 var KeyButton:KeyCode;
	 var KeyButtonStr:String=PlayerPrefs.GetString(NameButton);
	 if(KeyButtonStr!=null&&KeyButtonStr!="") {
		 FindButton(KeyButtonStr,joypad);
		 KeyButton=buttonFounded;
		 }
	 else KeyButton=KeyCode.None;
	 return KeyButton;
	 }

 public var joyClick:boolean=false; 
 public var joyMenuNotActive:boolean=false;
 public var mouseMenuNotActive:boolean=false;
 public var mouseMenuNotActiveAlways:boolean=false;
 public var joyMenuSelected:int=0;
 public var joyMenuCount:int=16;
 private var DeltaRateAxis:float=0;
 public var rateAxis:float=0.2;
 public var joyVerticalStep:int=1;
 public var axisSensitivity:float=0.4;
 function JoyMenu(){
	 if(joyMenuNotActive)return;
	 if((Input.GetKeyUp(KeyCode.JoystickButton0)||Input.GetKeyUp(KeyCode.JoystickButton1)||Input.GetKeyUp(KeyCode.Space))&&waitButtonDelay<=0)joyClick= true;
	 else joyClick=false;
	 if(waitButtonDelay>0)waitButtonDelay-=Time.deltaTime;
	 if(DeltaRateAxis<0){
		 DeltaRateAxis=rateAxis;
		 if(!mouseMenuNotActiveAlways){
			 if(Input.GetAxis("Horizontal")>axisSensitivity){
				 joyMenuSelected+=1;
				 mouseMenuNotActive=true;
				 }
			 else if(Input.GetAxis("Vertical")>axisSensitivity){
				 joyMenuSelected+=joyVerticalStep;
				 mouseMenuNotActive=true;
				 }
			 else if(Input.GetAxis("Horizontal")<-axisSensitivity){
				 joyMenuSelected-=1;
				 mouseMenuNotActive=true;
				 }
			 else if(Input.GetAxis("Vertical")<-axisSensitivity){
				 joyMenuSelected-=joyVerticalStep;
				 mouseMenuNotActive=true;
				 }
			 else {
				 mouseMenuNotActive=false;
				 DeltaRateAxis=-0.1;
				 }
			 }
		 else {
			 if(Input.GetAxis("Vertical")>axisSensitivity)joyMenuSelected+=joyVerticalStep;
			 else if(Input.GetAxis("Horizontal")>axisSensitivity) joyMenuSelected+=1;
			 else if(Input.GetAxis("Vertical")<-axisSensitivity)joyMenuSelected-=joyVerticalStep;
			 else if(Input.GetAxis("Horizontal")<-axisSensitivity) joyMenuSelected-=1;
			 else {
				 DeltaRateAxis=-0.1;
				 }
			 mouseMenuNotActive=true;
			 }
		 if(joyMenuSelected<0)joyMenuSelected=joyMenuCount;
		 else if(joyMenuSelected>joyMenuCount)joyMenuSelected=0;
		 }
	 else{
		 DeltaRateAxis-=Time.deltaTime;
		 }
	 }

 function getJoystickSelected(ply:int):Joypad{
	 waitButtonDelay=0.6;
	 if(Input.GetKey(KeyCode.JoystickButton1)||Input.GetKey(KeyCode.JoystickButton0)){
		 if(Input.GetKey(KeyCode.Joystick1Button0)||Input.GetKey(KeyCode.Joystick1Button1)) {
			 joypadName[ply]=Input.GetJoystickNames()[0];
			 return Joypad.Joypad1;
			 }
		 else if(Input.GetKey(KeyCode.Joystick2Button0)||Input.GetKey(KeyCode.Joystick2Button1)) {
			 joypadName[ply]=Input.GetJoystickNames()[1];
			 return Joypad.Joypad2;
			 }
		 else if(Input.GetKey(KeyCode.Joystick3Button0)||Input.GetKey(KeyCode.Joystick3Button1)) {
			 joypadName[ply]=Input.GetJoystickNames()[2];
			 return Joypad.Joypad3;
			 }
		 else if(Input.GetKey(KeyCode.Joystick4Button0)||Input.GetKey(KeyCode.Joystick4Button1)) {
			 joypadName[ply]=Input.GetJoystickNames()[3];
			 return Joypad.Joypad4;
			 }
		 }
	 for (var i : int = 1;
			 i <= 4;
			 i++) {
		 if (Mathf.Abs(Input.GetAxis("Joy"+i+"X")) > 0.7 || Mathf.Abs(Input.GetAxis("Joy"+i+"Y")) > 0.7){
			 joypadName[ply]=Input.GetJoystickNames()[i-1];
			 if(i==1)return Joypad.Joypad1;
			 else if(i==2)return Joypad.Joypad2;
			 else if(i==3)return Joypad.Joypad3;
			 else if(i==4)return Joypad.Joypad4;
			 }
		 }
	 return Joypad.none;
	 }

 function getJoystickSelectedx():Joypad{
	 waitButtonDelay=0.6;
	 if(Input.GetKey(KeyCode.JoystickButton1)||Input.GetKey(KeyCode.JoystickButton0)){
		 if(Input.GetKey(KeyCode.Joystick1Button0)||Input.GetKey(KeyCode.Joystick1Button1)) {
			 joypadName[0]=Input.GetJoystickNames()[0];
			 return Joypad.Joypad1;
			 }
		 else if(Input.GetKey(KeyCode.Joystick2Button0)||Input.GetKey(KeyCode.Joystick2Button1)) {
			 joypadName[1]=Input.GetJoystickNames()[1];
			 return Joypad.Joypad2;
			 }
		 else if(Input.GetKey(KeyCode.Joystick3Button0)||Input.GetKey(KeyCode.Joystick3Button1)) {
			 joypadName[2]=Input.GetJoystickNames()[2];
			 return Joypad.Joypad3;
			 }
		 else if(Input.GetKey(KeyCode.Joystick4Button0)||Input.GetKey(KeyCode.Joystick4Button1)) {
			 joypadName[3]=Input.GetJoystickNames()[3];
			 return Joypad.Joypad4;
			 }
		 }
	 for (var i : int = 1;
			 i <= 4;
			 i++) {
		 if (Mathf.Abs(Input.GetAxis("Joy"+i+"X")) > 0.7 || Mathf.Abs(Input.GetAxis("Joy"+i+"Y")) > 0.7){
			 joypadName[i-1]=Input.GetJoystickNames()[i-1];
			 if(i==1)return Joypad.Joypad1;
			 else if(i==2)return Joypad.Joypad2;
			 else if(i==3)return Joypad.Joypad3;
			 else if(i==4)return Joypad.Joypad4;
			 }
		 }
	 return Joypad.none;
	 }

 public var joypadName:String[]=new String[4];
 function getAllJoystickSelected():Joypad[]{
	 var joypadNum1:Joypad[]=new Joypad[4];
	 for (var i : int = 1;
			 i <= 4;
			 i++) {
		 if (Mathf.Abs(Input.GetAxis("Joy"+i+"X")) > 0.001 || Mathf.Abs(Input.GetAxis("Joy"+i+"Y")) > 0.001){
			 if(i==1){
				 joypadNum1[0]= Joypad.Joypad1;
				 joypadName[0]=Input.GetJoystickNames()[0];
				 }
			 else if(i==2){
				 joypadNum1[1]= Joypad.Joypad2;
				 joypadName[1]=Input.GetJoystickNames()[1];
				 }
			 else if(i==3){
				 joypadNum1[2]= Joypad.Joypad3;
				 joypadName[2]=Input.GetJoystickNames()[2];
				 }
			 else if(i==4){
				 joypadNum1[3]= Joypad.Joypad4;
				 joypadName[3]=Input.GetJoystickNames()[3];
				 }
			 }
		 }
	 return joypadNum1;
	 }

 private var waitButtonDelay:float=0;
 function getJoystickButton(joypad:Joypad,joyButton:JoyButton):boolean{
	 var waitButton:boolean=false;
	 waitButtonDelay=0.6;
	 if(joypad==Joypad.Joypad1){
		 switch(joyButton){
			 case JoyButton.ButtonA: Joy1ButtonA=getJoystick1Button();
			 if(Joy1ButtonA != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonB: Joy1ButtonB=getJoystick1Button();
			 if(Joy1ButtonB != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonX: Joy1ButtonX=getJoystick1Button();
			 if(Joy1ButtonX != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonY: Joy1ButtonY=getJoystick1Button();
			 if(Joy1ButtonY != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL1: Joy1ButtonL1=getJoystick1Button();
			 if(Joy1ButtonL1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL2: Joy1ButtonL2=getJoystick1Button();
			 if(Joy1ButtonL2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR1: Joy1ButtonR1=getJoystick1Button();
			 if(Joy1ButtonR1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR2: Joy1ButtonR2=getJoystick1Button();
			 if(Joy1ButtonR2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonStart: Joy1ButtonStart=getJoystick1Button();
			 if(Joy1ButtonStart != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonSelect: Joy1ButtonSelect=getJoystick1Button();
			 if(Joy1ButtonSelect != KeyCode.None)waitButton=true;
			 break;
			 }
		 }
	 else if(joypad==Joypad.Joypad2){
		 switch(joyButton){
			 case JoyButton.ButtonA: Joy2ButtonA=getJoystick2Button();
			 if(Joy2ButtonA != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonB: Joy2ButtonB=getJoystick2Button();
			 if(Joy2ButtonB != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonX: Joy2ButtonX=getJoystick2Button();
			 if(Joy2ButtonX != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonY: Joy2ButtonY=getJoystick2Button();
			 if(Joy2ButtonY != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL1: Joy2ButtonL1=getJoystick2Button();
			 if(Joy2ButtonL1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL2: Joy2ButtonL2=getJoystick2Button();
			 if(Joy2ButtonL2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR1: Joy2ButtonR1=getJoystick2Button();
			 if(Joy2ButtonR1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR2: Joy2ButtonR2=getJoystick2Button();
			 if(Joy2ButtonR2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonStart: Joy2ButtonStart=getJoystick2Button();
			 if(Joy2ButtonStart != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonSelect: Joy2ButtonSelect=getJoystick2Button();
			 if(Joy2ButtonSelect != KeyCode.None)waitButton=true;
			 break;
			 }
		 }
	 else if(joypad==Joypad.Joypad3){
		 switch(joyButton){
			 case JoyButton.ButtonA: Joy3ButtonA=getJoystick3Button();
			 if(Joy3ButtonA != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonB: Joy3ButtonB=getJoystick3Button();
			 if(Joy3ButtonB != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonX: Joy3ButtonX=getJoystick3Button();
			 if(Joy3ButtonX != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonY: Joy3ButtonY=getJoystick3Button();
			 if(Joy3ButtonY != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL1: Joy3ButtonL1=getJoystick3Button();
			 if(Joy3ButtonL1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL2: Joy3ButtonL2=getJoystick3Button();
			 if(Joy3ButtonL2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR1: Joy3ButtonR1=getJoystick3Button();
			 if(Joy3ButtonR1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR2: Joy3ButtonR2=getJoystick3Button();
			 if(Joy3ButtonR2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonStart: Joy3ButtonStart=getJoystick3Button();
			 if(Joy3ButtonStart != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonSelect: Joy3ButtonSelect=getJoystick3Button();
			 if(Joy3ButtonSelect != KeyCode.None)waitButton=true;
			 break;
			 }
		 }
	 else if(joypad==Joypad.Joypad4){
		 switch(joyButton){
			 case JoyButton.ButtonA: Joy4ButtonA=getJoystick4Button();
			 if(Joy4ButtonA != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonB: Joy4ButtonB=getJoystick4Button();
			 if(Joy4ButtonB != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonX: Joy4ButtonX=getJoystick4Button();
			 if(Joy4ButtonX != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonY: Joy4ButtonY=getJoystick4Button();
			 if(Joy4ButtonY != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL1: Joy4ButtonL1=getJoystick4Button();
			 if(Joy4ButtonL1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonL2: Joy4ButtonL2=getJoystick4Button();
			 if(Joy4ButtonL2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR1: Joy4ButtonR1=getJoystick4Button();
			 if(Joy4ButtonR1 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonR2: Joy4ButtonR2=getJoystick4Button();
			 if(Joy4ButtonR2 != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonStart: Joy4ButtonStart=getJoystick4Button();
			 if(Joy4ButtonStart != KeyCode.None)waitButton=true;
			 break;
			 case JoyButton.ButtonSelect: Joy4ButtonSelect=getJoystick4Button();
			 if(Joy4ButtonSelect != KeyCode.None)waitButton=true;
			 break;
			 }
		 }
	 return waitButton;
	 }

 function getJoystick1Button():KeyCode{
	 if(Input.GetKey(KeyCode.Joystick1Button0 ))return KeyCode.Joystick1Button0 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button1 ))return KeyCode.Joystick1Button1 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button2 ))return KeyCode.Joystick1Button2 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button3 ))return KeyCode.Joystick1Button3 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button4 ))return KeyCode.Joystick1Button4 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button5 ))return KeyCode.Joystick1Button5 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button6 ))return KeyCode.Joystick1Button6 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button7 ))return KeyCode.Joystick1Button7 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button8 ))return KeyCode.Joystick1Button8 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button9 ))return KeyCode.Joystick1Button9 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button10 ))return KeyCode.Joystick1Button10 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button11 ))return KeyCode.Joystick1Button11 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button12 ))return KeyCode.Joystick1Button12 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button13 ))return KeyCode.Joystick1Button13 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button14 ))return KeyCode.Joystick1Button14 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button15 ))return KeyCode.Joystick1Button15 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button16 ))return KeyCode.Joystick1Button16 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button17 ))return KeyCode.Joystick1Button17 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button18 ))return KeyCode.Joystick1Button18 ;
	 else if(Input.GetKey(KeyCode.Joystick1Button19 ))return KeyCode.Joystick1Button19 ;
	 else return KeyCode.None;
	 }

 function getJoystick2Button():KeyCode{
	 if(Input.GetKey(KeyCode.Joystick2Button0 ))return KeyCode.Joystick2Button0 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button1 ))return KeyCode.Joystick2Button1 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button2 ))return KeyCode.Joystick2Button2 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button3 ))return KeyCode.Joystick2Button3 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button4 ))return KeyCode.Joystick2Button4 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button5 ))return KeyCode.Joystick2Button5 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button6 ))return KeyCode.Joystick2Button6 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button7 ))return KeyCode.Joystick2Button7 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button8 ))return KeyCode.Joystick2Button8 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button9 ))return KeyCode.Joystick2Button9 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button10 ))return KeyCode.Joystick2Button10 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button11 ))return KeyCode.Joystick2Button11 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button12 ))return KeyCode.Joystick2Button12 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button13 ))return KeyCode.Joystick2Button13 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button14 ))return KeyCode.Joystick2Button14 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button15 ))return KeyCode.Joystick2Button15 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button16 ))return KeyCode.Joystick2Button16 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button17 ))return KeyCode.Joystick2Button17 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button18 ))return KeyCode.Joystick2Button18 ;
	 else if(Input.GetKey(KeyCode.Joystick2Button19 ))return KeyCode.Joystick2Button19 ;
	 else return KeyCode.None;
	 }

 function getJoystick3Button():KeyCode{
	 if(Input.GetKey(KeyCode.Joystick3Button0 ))return KeyCode.Joystick3Button0 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button1 ))return KeyCode.Joystick3Button1 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button2 ))return KeyCode.Joystick3Button2 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button3 ))return KeyCode.Joystick3Button3 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button4 ))return KeyCode.Joystick3Button4 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button5 ))return KeyCode.Joystick3Button5 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button6 ))return KeyCode.Joystick3Button6 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button7 ))return KeyCode.Joystick3Button7 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button8 ))return KeyCode.Joystick3Button8 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button9 ))return KeyCode.Joystick3Button9 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button10 ))return KeyCode.Joystick3Button10 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button11 ))return KeyCode.Joystick3Button11 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button12 ))return KeyCode.Joystick3Button12 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button13 ))return KeyCode.Joystick3Button13 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button14 ))return KeyCode.Joystick3Button14 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button15 ))return KeyCode.Joystick3Button15 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button16 ))return KeyCode.Joystick3Button16 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button17 ))return KeyCode.Joystick3Button17 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button18 ))return KeyCode.Joystick3Button18 ;
	 else if(Input.GetKey(KeyCode.Joystick3Button19 ))return KeyCode.Joystick3Button19 ;
	 else return KeyCode.None;
	 }

 function getJoystick4Button():KeyCode{
	 if(Input.GetKey(KeyCode.Joystick4Button0 ))return KeyCode.Joystick4Button0 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button1 ))return KeyCode.Joystick4Button1 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button2 ))return KeyCode.Joystick4Button2 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button3 ))return KeyCode.Joystick4Button3 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button4 ))return KeyCode.Joystick4Button4 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button5 ))return KeyCode.Joystick4Button5 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button6 ))return KeyCode.Joystick4Button6 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button7 ))return KeyCode.Joystick4Button7 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button8 ))return KeyCode.Joystick4Button8 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button9 ))return KeyCode.Joystick4Button9 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button10 ))return KeyCode.Joystick4Button10 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button11 ))return KeyCode.Joystick4Button11 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button12 ))return KeyCode.Joystick4Button12 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button13 ))return KeyCode.Joystick4Button13 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button14 ))return KeyCode.Joystick4Button14 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button15 ))return KeyCode.Joystick4Button15 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button16 ))return KeyCode.Joystick4Button16 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button17 ))return KeyCode.Joystick4Button17 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button18 ))return KeyCode.Joystick4Button18 ;
	 else if(Input.GetKey(KeyCode.Joystick4Button19 ))return KeyCode.Joystick4Button19 ;
	 else return KeyCode.None;
	 }

 function ResetDefaultButton (JoyX:Joypad) {
	 if(JoyX==Joypad.Joypad1){
		 Joy1ButtonA=KeyCode.Joystick1Button0;
		 Joy1ButtonB=KeyCode.Joystick1Button1;
		 Joy1ButtonX=KeyCode.Joystick1Button2;
		 Joy1ButtonY=KeyCode.Joystick1Button3;
		 Joy1ButtonL1=KeyCode.Joystick1Button4;
		 Joy1ButtonL2=KeyCode.Joystick1Button6;
		 Joy1ButtonR1=KeyCode.Joystick1Button5;
		 Joy1ButtonR2=KeyCode.Joystick1Button7;
		 Joy1ButtonStart=KeyCode.Joystick1Button9;
		 Joy1ButtonSelect=KeyCode.Joystick1Button8;
		 }
	 else if(JoyX==Joypad.Joypad2){
		 Joy2ButtonA=KeyCode.Joystick2Button0;
		 Joy2ButtonB=KeyCode.Joystick2Button1;
		 Joy2ButtonX=KeyCode.Joystick2Button2;
		 Joy2ButtonY=KeyCode.Joystick2Button3;
		 Joy2ButtonL1=KeyCode.Joystick2Button4;
		 Joy2ButtonL2=KeyCode.Joystick2Button6;
		 Joy2ButtonR1=KeyCode.Joystick2Button5;
		 Joy2ButtonR2=KeyCode.Joystick2Button7;
		 Joy2ButtonStart=KeyCode.Joystick2Button9;
		 Joy2ButtonSelect=KeyCode.Joystick2Button8;
		 }
	 else if(JoyX==Joypad.Joypad3){
		 Joy3ButtonA=KeyCode.Joystick3Button0;
		 Joy3ButtonB=KeyCode.Joystick3Button1;
		 Joy3ButtonX=KeyCode.Joystick3Button2;
		 Joy3ButtonY=KeyCode.Joystick3Button3;
		 Joy3ButtonL1=KeyCode.Joystick3Button4;
		 Joy3ButtonL2=KeyCode.Joystick3Button6;
		 Joy3ButtonR1=KeyCode.Joystick3Button5;
		 Joy3ButtonR2=KeyCode.Joystick3Button7;
		 Joy3ButtonStart=KeyCode.Joystick3Button9;
		 Joy3ButtonSelect=KeyCode.Joystick3Button8;
		 }
	 else if(JoyX==Joypad.Joypad4){
		 Joy4ButtonA=KeyCode.Joystick4Button0;
		 Joy4ButtonB=KeyCode.Joystick4Button1;
		 Joy4ButtonX=KeyCode.Joystick4Button2;
		 Joy4ButtonY=KeyCode.Joystick4Button3;
		 Joy4ButtonL1=KeyCode.Joystick4Button4;
		 Joy4ButtonL2=KeyCode.Joystick4Button6;
		 Joy4ButtonR1=KeyCode.Joystick4Button5;
		 Joy4ButtonR2=KeyCode.Joystick4Button7;
		 Joy4ButtonStart=KeyCode.Joystick4Button9;
		 Joy4ButtonSelect=KeyCode.Joystick4Button8;
		 }
	 }
 private var buttonNotFoundedCOUNT:int=0;
 private var buttonFounded:KeyCode;
 function FindButton(NameButton:String,joypad:Joypad){
	 if(joypad==Joypad.Joypad1){
		 switch (NameButton){
			 case "Joystick1Button0": buttonFounded= KeyCode.Joystick1Button0;
			 break;
			 case "Joystick1Button1": buttonFounded= KeyCode.Joystick1Button1;
			 break;
			 case "Joystick1Button2": buttonFounded= KeyCode.Joystick1Button2;
			 break;
			 case "Joystick1Button3": buttonFounded= KeyCode.Joystick1Button3;
			 break;
			 case "Joystick1Button4": buttonFounded= KeyCode.Joystick1Button4;
			 break;
			 case "Joystick1Button5": buttonFounded= KeyCode.Joystick1Button5;
			 break;
			 case "Joystick1Button6": buttonFounded= KeyCode.Joystick1Button6;
			 break;
			 case "Joystick1Button7": buttonFounded= KeyCode.Joystick1Button7;
			 break;
			 case "Joystick1Button8": buttonFounded= KeyCode.Joystick1Button8;
			 break;
			 case "Joystick1Button9": buttonFounded= KeyCode.Joystick1Button9;
			 break;
			 case "Joystick1Button10": buttonFounded= KeyCode.Joystick1Button10;
			 break;
			 case "Joystick1Button11": buttonFounded= KeyCode.Joystick1Button11;
			 break;
			 case "Joystick1Button12": buttonFounded= KeyCode.Joystick1Button12;
			 break;
			 case "Joystick1Button13": buttonFounded= KeyCode.Joystick1Button13;
			 break;
			 case "Joystick1Button14": buttonFounded= KeyCode.Joystick1Button14;
			 break;
			 case "Joystick1Button15": buttonFounded= KeyCode.Joystick1Button15;
			 break;
			 case "Joystick1Button16": buttonFounded= KeyCode.Joystick1Button16;
			 break;
			 case "Joystick1Button17": buttonFounded= KeyCode.Joystick1Button17;
			 break;
			 case "Joystick1Button18": buttonFounded= KeyCode.Joystick1Button18;
			 break;
			 case "Joystick1Button19": buttonFounded= KeyCode.Joystick1Button19;
			 break;
			 default:buttonFounded= KeyCode.None;
			 		 buttonNotFoundedCOUNT++;
			 break;
			 }
		 }
	 else if(joypad==Joypad.Joypad2){
		 switch (NameButton){
			 case "Joystick2Button0": buttonFounded= KeyCode.Joystick2Button0;
			 break;
			 case "Joystick2Button1": buttonFounded= KeyCode.Joystick2Button1;
			 break;
			 case "Joystick2Button2": buttonFounded= KeyCode.Joystick2Button2;
			 break;
			 case "Joystick2Button3": buttonFounded= KeyCode.Joystick2Button3;
			 break;
			 case "Joystick2Button4": buttonFounded= KeyCode.Joystick2Button4;
			 break;
			 case "Joystick2Button5": buttonFounded= KeyCode.Joystick2Button5;
			 break;
			 case "Joystick2Button6": buttonFounded= KeyCode.Joystick2Button6;
			 break;
			 case "Joystick2Button7": buttonFounded= KeyCode.Joystick2Button7;
			 break;
			 case "Joystick2Button8": buttonFounded= KeyCode.Joystick2Button8;
			 break;
			 case "Joystick2Button9": buttonFounded= KeyCode.Joystick2Button9;
			 break;
			 case "Joystick2Button10": buttonFounded= KeyCode.Joystick2Button10;
			 break;
			 case "Joystick2Button11": buttonFounded= KeyCode.Joystick2Button11;
			 break;
			 case "Joystick2Button12": buttonFounded= KeyCode.Joystick2Button12;
			 break;
			 case "Joystick2Button13": buttonFounded= KeyCode.Joystick2Button13;
			 break;
			 case "Joystick2Button14": buttonFounded= KeyCode.Joystick2Button14;
			 break;
			 case "Joystick2Button15": buttonFounded= KeyCode.Joystick2Button15;
			 break;
			 case "Joystick2Button16": buttonFounded= KeyCode.Joystick2Button16;
			 break;
			 case "Joystick2Button17": buttonFounded= KeyCode.Joystick2Button17;
			 break;
			 case "Joystick2Button18": buttonFounded= KeyCode.Joystick2Button18;
			 break;
			 case "Joystick2Button19": buttonFounded= KeyCode.Joystick2Button19;
			 break;
			 default:buttonFounded= KeyCode.None;
			 		 buttonNotFoundedCOUNT++;
			 break;
			 }
		 }
	 else if(joypad==Joypad.Joypad3){
		 switch (NameButton){
			 case "Joystick3Button0": buttonFounded= KeyCode.Joystick3Button0;
			 break;
			 case "Joystick3Button1": buttonFounded= KeyCode.Joystick3Button1;
			 break;
			 case "Joystick3Button2": buttonFounded= KeyCode.Joystick3Button2;
			 break;
			 case "Joystick3Button3": buttonFounded= KeyCode.Joystick3Button3;
			 break;
			 case "Joystick3Button4": buttonFounded= KeyCode.Joystick3Button4;
			 break;
			 case "Joystick3Button5": buttonFounded= KeyCode.Joystick3Button5;
			 break;
			 case "Joystick3Button6": buttonFounded= KeyCode.Joystick3Button6;
			 break;
			 case "Joystick3Button7": buttonFounded= KeyCode.Joystick3Button7;
			 break;
			 case "Joystick3Button8": buttonFounded= KeyCode.Joystick3Button8;
			 break;
			 case "Joystick3Button9": buttonFounded= KeyCode.Joystick3Button9;
			 break;
			 case "Joystick3Button10": buttonFounded= KeyCode.Joystick3Button10;
			 break;
			 case "Joystick3Button11": buttonFounded= KeyCode.Joystick3Button11;
			 break;
			 case "Joystick3Button12": buttonFounded= KeyCode.Joystick3Button12;
			 break;
			 case "Joystick3Button13": buttonFounded= KeyCode.Joystick3Button13;
			 break;
			 case "Joystick3Button14": buttonFounded= KeyCode.Joystick3Button14;
			 break;
			 case "Joystick3Button15": buttonFounded= KeyCode.Joystick3Button15;
			 break;
			 case "Joystick3Button16": buttonFounded= KeyCode.Joystick3Button16;
			 break;
			 case "Joystick3Button17": buttonFounded= KeyCode.Joystick3Button17;
			 break;
			 case "Joystick3Button18": buttonFounded= KeyCode.Joystick3Button18;
			 break;
			 case "Joystick3Button19": buttonFounded= KeyCode.Joystick3Button19;
			 break;
			 default:buttonFounded= KeyCode.None;
			 		 buttonNotFoundedCOUNT++;
			 break;
			 }
		 }
	 else if(joypad==Joypad.Joypad4){
		 switch (NameButton){
			 case "Joystick4Button0": buttonFounded= KeyCode.Joystick4Button0;
			 break;
			 case "Joystick4Button1": buttonFounded= KeyCode.Joystick4Button1;
			 break;
			 case "Joystick4Button2": buttonFounded= KeyCode.Joystick4Button2;
			 break;
			 case "Joystick4Button3": buttonFounded= KeyCode.Joystick4Button3;
			 break;
			 case "Joystick4Button4": buttonFounded= KeyCode.Joystick4Button4;
			 break;
			 case "Joystick4Button5": buttonFounded= KeyCode.Joystick4Button5;
			 break;
			 case "Joystick4Button6": buttonFounded= KeyCode.Joystick4Button6;
			 break;
			 case "Joystick4Button7": buttonFounded= KeyCode.Joystick4Button7;
			 break;
			 case "Joystick4Button8": buttonFounded= KeyCode.Joystick4Button8;
			 break;
			 case "Joystick4Button9": buttonFounded= KeyCode.Joystick4Button9;
			 break;
			 case "Joystick4Button10": buttonFounded= KeyCode.Joystick4Button10;
			 break;
			 case "Joystick4Button11": buttonFounded= KeyCode.Joystick4Button11;
			 break;
			 case "Joystick4Button12": buttonFounded= KeyCode.Joystick4Button12;
			 break;
			 case "Joystick4Button13": buttonFounded= KeyCode.Joystick4Button13;
			 break;
			 case "Joystick4Button14": buttonFounded= KeyCode.Joystick4Button14;
			 break;
			 case "Joystick4Button15": buttonFounded= KeyCode.Joystick4Button15;
			 break;
			 case "Joystick4Button16": buttonFounded= KeyCode.Joystick4Button16;
			 break;
			 case "Joystick4Button17": buttonFounded= KeyCode.Joystick4Button17;
			 break;
			 case "Joystick4Button18": buttonFounded= KeyCode.Joystick4Button18;
			 break;
			 case "Joystick4Button19": buttonFounded= KeyCode.Joystick4Button19;
			 break;
			 default:buttonFounded= KeyCode.None;
			 		 buttonNotFoundedCOUNT++;
			 break;
			 }
		 }
	 }
