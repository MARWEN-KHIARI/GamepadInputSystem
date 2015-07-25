#pragma strict
class GUIJoypadScript extends JoypadScript{
	  var click : AudioClip;
      var press : AudioClip;
      private var joyMenuSelectedTemp:int=0;
	 function Start () {
		 JoypadPlayer=getAllJoystickSelected();
		 joyMenuCount=5;
		 rateAxis=0.2;
		 joyMenuNotActive=false;
		 mouseMenuNotActiveAlways=false;
		 }
	 private var JoypadPlayer:Joypad[]=new Joypad[4];
	 private var joypadButton:JoyButton;
	 private var PlayerNumber:int=0;
	 function Update () {
		 JoyMenu();
		
		/*detect all joypad to single move in the menu*/
		 if(beginGetJoystickButton){
			
			/*detect the button to edit*/
			joyMenuNotActive=true;
			 if(true == getJoystickButton(JoypadPlayer[PlayerNumber],joypadButton)){
				 beginGetJoystickButton=false;
				 joyMenuNotActive=false;
				}
			 }
		 if(beginGetJoystickSelected){
			
			/*detect the joypad to add, press any button or move the axis of joypad*/
			var Joypad1:Joypad=getJoystickSelected(PlayerNumber);
			 joyMenuNotActive=true;
			 if(Joypad.none != Joypad1){
				 verifJoypadSelected(Joypad1);
				 JoypadPlayer[PlayerNumber]=Joypad1;
				 ResetDefaultButton(JoypadPlayer[PlayerNumber]);
				
				/*or load Buttons*/
				 beginGetJoystickSelected=false;
				 joyMenuNotActive=false;
				 }
			 }
			 if(joyMenuSelectedTemp!=joyMenuSelected){
			 		joyMenuSelectedTemp=joyMenuSelected;
			 		audio.PlayOneShot(click, 0.7);
			 	}
		 }
	 private var beginGetJoystickButton:boolean=false;
	 private var beginGetJoystickSelected:boolean=false;
	 function OnGUI () {
		 GUISelectePlayer();
		 if((JoypadPlayer[PlayerNumber]!=Joypad.none)&&(!beginGetJoystickSelected)){
			 GUISelectButton();
			 GUILayout.BeginHorizontal("Box");
			 JoySelectedButton(16);
			 if((joyClick&&joyMenuSelected==16)|| GUILayout.Button("reset Buttons")){
				 joyMenuSelected=16;
				 ResetDefaultButton(JoypadPlayer[PlayerNumber]);
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				}
			 JoySelectedButton(17);
			 if((joyClick&&joyMenuSelected==17)|| GUILayout.Button("Load Buttons")){
				 joyMenuSelected=17;
				 LoadButtons(JoypadPlayer[PlayerNumber]);
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				}
			 JoySelectedButton(18);
			 if((joyClick&&joyMenuSelected==18)|| GUILayout.Button("Save Buttons")){
				 joyMenuSelected=18;
				 saveButtons(JoypadPlayer[PlayerNumber]);
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				}
			 GUILayout.EndHorizontal();
			 }
		 }
	 function verifJoypadSelected(JoypadPlayer11:Joypad){
		 for (var i : int = 0;
				 i < 4;
				 i++) {
			 if(JoypadPlayer11==JoypadPlayer[i] && i!=PlayerNumber){
				 JoypadPlayer[i]=Joypad.none;
				 joypadName[i]="";
				 }
			 }
		 }
	 function verifJoypadNotSelected(JoypadPlayer11:int):boolean{
		 var plytest:boolean=true;
		 for (var i : int = 0;
				 i < 4;
				 i++) {
			 if(JoypadPlayer11==JoypadPlayer[i] && JoypadPlayer[i] != Joypad.none && i!=PlayerNumber)plytest=false;
			 }
		 return plytest;
		 }
	 function JoySelectedButton(ik:int){
		 if(joyMenuSelected==ik) GUI.skin.button.normal.textColor=Color.red;
		 else GUI.skin.button.normal.textColor=Color.white;
		 }
	 function GUISelectePlayer(){
		 GUILayout.BeginVertical("Box");
		 JoySelectedButton(1);
		
		/*change the color of button*/
		if((joyClick&&joyMenuSelected==1)
				/*if the joypad is moved to this button*/ || GUILayout.Button("Get all joypad")){
			 joyMenuSelected=1;
			 JoypadPlayer=getAllJoystickSelected();
			 
			/*all joypad must be present and pressed*/
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			}
		 GUILayout.BeginHorizontal("Box");
		 JoySelectedButton(2);
		 if((joyClick&&joyMenuSelected==2)|| GUILayout.Button("Player1")){
			 joyMenuSelected=2;
			 PlayerNumber=0;
			 beginGetJoystickSelected=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			}
		 GUILayout.Box("-"+joypadName[0]);
		
		/*display the name of the joypad selected */
		GUILayout.EndHorizontal();
		 GUILayout.BeginHorizontal("Box");
		 JoySelectedButton(3);
		 if((joyClick&&joyMenuSelected==3)|| GUILayout.Button("Player2")){
			 joyMenuSelected=3;
			 PlayerNumber=1;
			 beginGetJoystickSelected=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			}
		 GUILayout.Box("-"+joypadName[1]);
		 GUILayout.EndHorizontal();
		 GUILayout.BeginHorizontal("Box");
		 JoySelectedButton(4);
		 if((joyClick&&joyMenuSelected==4)|| GUILayout.Button("Player3")){
			 joyMenuSelected=4;
			 PlayerNumber=2;
			 beginGetJoystickSelected=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			}
		 GUILayout.Box("-"+joypadName[2]);
		 GUILayout.EndHorizontal();
		 GUILayout.BeginHorizontal("Box");
		 JoySelectedButton(5);
		 if((joyClick&&joyMenuSelected==5)|| GUILayout.Button("Player4")){
			 joyMenuSelected=5;
			 PlayerNumber=3;
			 beginGetJoystickSelected=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			}
		 GUILayout.Box("-"+joypadName[3]);
		 GUILayout.EndHorizontal();
		 if(beginGetJoystickSelected)GUILayout.Box("press Button A to select the joypad");
		 GUILayout.EndVertical();
		 }
	 function GUISelectButton(){
		 GUILayout.BeginVertical("Box");
		 joyMenuCount=18;
		
		/* change the length of the button menu*/
		GUILayout.BeginHorizontal();
		 JoySelectedButton(6);		
		 if((joyClick&&joyMenuSelected==6)|| GUILayout.Button("ButtonA")){
			 joyMenuSelected=6;
			
			/*change the joyMenuSelected if the mouse button is pressed*/
			 joypadButton=JoyButton.ButtonA;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }			         
		 JoySelectedButton(7);		 		 
		 if((joyClick&&joyMenuSelected==7)|| GUILayout.Button("ButtonB")){
			 joyMenuSelected=7;
			 joypadButton=JoyButton.ButtonB;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 JoySelectedButton(8);
		 if((joyClick&&joyMenuSelected==8)|| GUILayout.Button("ButtonX")){
			 joyMenuSelected=8;
			 joypadButton=JoyButton.ButtonX;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 JoySelectedButton(9);
		 if((joyClick&&joyMenuSelected==9)|| GUILayout.Button("ButtonY")){
			 joyMenuSelected=9;
			 joypadButton=JoyButton.ButtonY;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 GUILayout.EndHorizontal();
		 GUILayout.BeginHorizontal();
		 JoySelectedButton(10);
		 if((joyClick&&joyMenuSelected==10)|| GUILayout.Button("ButtonL1")){
			 joyMenuSelected=10;
			 joypadButton=JoyButton.ButtonL1;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 JoySelectedButton(11);
		 if((joyClick&&joyMenuSelected==11)|| GUILayout.Button("ButtonL2")){
			 joyMenuSelected=11;
			 joypadButton=JoyButton.ButtonL2;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 JoySelectedButton(12);
		 if((joyClick&&joyMenuSelected==12)|| GUILayout.Button("ButtonR1")){
			 joyMenuSelected=12;
			 joypadButton=JoyButton.ButtonR1;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 JoySelectedButton(13);
		 if((joyClick&&joyMenuSelected==13)|| GUILayout.Button("ButtonR2")){
			 joyMenuSelected=13;
			 joypadButton=JoyButton.ButtonR2;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 GUILayout.EndHorizontal();
		 GUILayout.BeginHorizontal();
		 JoySelectedButton(14);
		 if((joyClick&&joyMenuSelected==14)|| GUILayout.Button("ButtonStart")){
			 joyMenuSelected=14;
			 joypadButton=JoyButton.ButtonStart;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 JoySelectedButton(15);
		 if((joyClick&&joyMenuSelected==15)|| GUILayout.Button("ButtonSelect")){
			 joyMenuSelected=15;
			 joypadButton=JoyButton.ButtonSelect;
			 beginGetJoystickButton=true;
			 audio.PlayOneShot(press, 0.7);
			 joyClick=false;
			 }
		 GUILayout.EndHorizontal();
		 if(beginGetJoystickButton)GUILayout.Box("Press Button");
		 GUILayout.EndVertical();
		 }
	 }
