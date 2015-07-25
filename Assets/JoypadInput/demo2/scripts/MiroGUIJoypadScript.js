#pragma strict
 class MiroGUIJoypadScript extends JoypadScript{
      var music:AudioSource;
      var click : AudioClip;
      var press : AudioClip;      
	 function Start () {
	 //nomber of button in the menu	 
		 joyMenuCount=4;
	//the wait time between 2 axis
		 rateAxis=0.2;
	//activate Menu with Joypad	
		 joyMenuNotActive=false;
	//activate mouse in the Menu
		 mouseMenuNotActiveAlways=false;		 
		 }
	 public var JoypadPlayer:Joypad[]=new Joypad[4];
	 private var joypadButton:JoyButton;
	 private var PlayerNumber:int=0;
	 private var joyMenuSelectedTemp:int=0;
	 	 
	 function Update () {	 
		 if(!isPlay){//the game is stoped		 
			 if(beginGetJoystickButton){//get button joypad
				 joyMenuNotActive=true;
				 if(true == getJoystickButton(JoypadPlayer[PlayerNumber],joypadButton)){
					 beginGetJoystickButton=false;
					 joyMenuNotActive=false;
					 }
				 }
			 if(beginGetJoystickSelected){//initialise joypad number to the player
				 joyMenuNotActive=true;
				 var Joypad1:Joypad=getJoystickSelected(PlayerNumber);
				 if(Joypad.none != Joypad1){
					 verifJoypadSelected(Joypad1);
					 JoypadPlayer[PlayerNumber]=Joypad1;
					 initPlayerButtons(JoypadPlayer[PlayerNumber]);//load button saved to Joy
					 //ResetDefaultButton(JoypadPlayer[PlayerNumber]);//reset the default button to Joy
					 //change the number of button in menu because the menu >>
					 joyMenuCount=16;
					 //joyMenuSelected is the number of the button menu over, it will be changed to button PLAY
					 joyMenuSelected=5;
					 joyMenuNotActive=false;
					 beginGetJoystickSelected=false;
					 }
				 }
			//get axis and other 
			 JoyMenu();			 
			 if(music.isPlaying)music.Stop();
			 if(joyMenuSelectedTemp!=joyMenuSelected){//if the button selected changed then play sound
			 		joyMenuSelectedTemp=joyMenuSelected;
			 		audio.PlayOneShot(click, 0.7);
			 	}
			 }else if(!music.isPlaying)music.Play();
		 }
	 var isPlay:boolean=false;
	 private var beginGetJoystickButton:boolean=false;
	 private var beginGetJoystickSelected:boolean=false;
	 var font1:Font;
	 function OnGUI () {
		 GUI.skin.label.font=font1;
		 if(!isPlay) joypadMiroFunc ();
		 }
	 function joypadMiroFunc () {
		 //in this menu you select the player and his joypad
		 if(JoypadPlayer[PlayerNumber]!=Joypad.none)joypadMiro1Func ();
		 else joypadMiro0Func ();
		 joypadMiroOverAllFunc();//this button is created with MiroGUI
		 joypadMiroOver1Func ();
		 joypadMiroOver2Func ();
		 joypadMiroOver3Func ();
		 joypadMiroOver4Func ();
		 LabelxFunc();
		 if(beginGetJoystickSelected)Label19Func();		 
		 if((JoypadPlayer[PlayerNumber]!=Joypad.none)&&(!beginGetJoystickSelected)){
			//this menu you can change the button			
		 		if(beginGetJoystickButton)LabelPressButtonFunc();
		 		Button_BeginPlay_fc ();
		 		Button_reset_fc ();
		 		Button_start_fc ();
		 		Button_select_fc ();
		 		Button_x_fc ();
		 		Button_y_fc ();
		 		Button_b_fc ();
		 		Button_a_fc ();
		 		Button_l1_fc ();
		 		Button_l2_fc ();
		 		Button_r1Func ();
		 		Button_r2Func ();		 
			 }
		 }
	//this menu is created with MiroGUI
	 public var joypadMiroOver  :Texture2D;
	 public var joypadMiroOver2 :Texture2D;
	 public var joypadMiroOver3 :Texture2D;
	 function joypadMiroOver1Func () {
		 if(joyMenuSelected==1||!mouseMenuNotActive && Rect(pcx(4.38),pcy(2.21),pcx(16.58),pcy(10.86)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=1;
			 GUI.DrawTexture(Rect(pcx(4.38),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 PlayerNumber=0;
				 audio.PlayOneShot(press, 0.7);
				 beginGetJoystickSelected=true;
				 joyClick=false;
				 }
			 }
		 }
	 function joypadMiroOver2Func () {
		 if(joyMenuSelected==2||!mouseMenuNotActive && Rect(pcx(30.64),pcy(2.21),pcx(16.58),pcy(10.86)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=2;
			 GUI.DrawTexture(Rect(pcx(30.64),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 PlayerNumber=1;
				 audio.PlayOneShot(press, 0.7);
				 beginGetJoystickSelected=true;
				 joyClick=false;
				 }
			 }
		 }
	 function joypadMiroOver3Func () {
		 if(joyMenuSelected==3||!mouseMenuNotActive && Rect(pcx(56.23),pcy(2.21),pcx(16.58),pcy(10.86)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=3;			 
			 GUI.DrawTexture(Rect(pcx(56.23),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 PlayerNumber=2;
				 audio.PlayOneShot(press, 0.7);
				 beginGetJoystickSelected=true;
				 joyClick=false;
				 }
			 }
		}
	 function joypadMiroOver4Func () {
		 if(joyMenuSelected==4||!mouseMenuNotActive && Rect(pcx(80.77),pcy(2.21),pcx(16.55),pcy(10.86)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=4;
			 GUI.DrawTexture(Rect(pcx(80.77),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 PlayerNumber=3;
				 audio.PlayOneShot(press, 0.7);
				 beginGetJoystickSelected=true;
				 joyClick=false;
				 }
			 }
		}
	 function joypadMiroOverAllFunc(){
		 if(JoypadPlayer[0]!=Joypad.none){
			 if(PlayerNumber==0)GUI.DrawTexture(Rect(pcx(4.38),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver3, ScaleMode.StretchToFill,true);
			 else GUI.DrawTexture(Rect(pcx(4.38),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver2, ScaleMode.StretchToFill,true);
			 }
		 if(JoypadPlayer[1]!=Joypad.none){
			 if(PlayerNumber==1)GUI.DrawTexture(Rect(pcx(30.64),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver3, ScaleMode.StretchToFill,true);
			 else GUI.DrawTexture(Rect(pcx(30.64),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver2, ScaleMode.StretchToFill,true);
			 }
		 if(JoypadPlayer[2]!=Joypad.none){
			 if(PlayerNumber==2)GUI.DrawTexture(Rect(pcx(56.23),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver3, ScaleMode.StretchToFill,true);
			 else GUI.DrawTexture(Rect(pcx(56.23),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver2, ScaleMode.StretchToFill,true);
			 }
		 if(JoypadPlayer[3]!=Joypad.none){
			 if(PlayerNumber==3)GUI.DrawTexture(Rect(pcx(80.77),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver3, ScaleMode.StretchToFill,true);
			 else GUI.DrawTexture(Rect(pcx(80.77),pcy(2.21),pcx(16.58),pcy(10.86)),joypadMiroOver2, ScaleMode.StretchToFill,true);
			 }
		 }
	 function LabelxFunc () {
		 GUI.Label(Rect(pcx(6.78),pcy(7.81),pcx(11),pcy(5)),joypadName[0]);
		 GUI.Label(Rect(pcx(32.94),pcy(7.81),pcx(11),pcy(5)),joypadName[1]);
		 GUI.Label(Rect(pcx(58.53),pcy(7.81),pcx(11),pcy(5)),joypadName[2]);
		 GUI.Label(Rect(pcx(83.77),pcy(7.81),pcx(11),pcy(5)),joypadName[3]);
		 }
	 function Label19Func () {
		 GUI.Label(Rect(pcx(30),pcy(39),pcx(50),pcy(5)),"press ButtonA to select the joypad");
		 }
	 public var joypadMiro0 :Texture2D;
	 function joypadMiro0Func () {
		 GUI.DrawTexture(Rect(pcx(0),pcy(0),pcx(100),pcy(100)),joypadMiro0, ScaleMode.StretchToFill,true);
		 }
	 public var joypadMiro1 :Texture2D;
	 function joypadMiro1Func () {
		 GUI.DrawTexture(Rect(pcx(0),pcy(0),pcx(100),pcy(100)),joypadMiro1, ScaleMode.StretchToFill,true);
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
	 function pcx(xx:float):float{
		 return (xx*Screen.width*0.01);
		 }
	 function pcy(xx:float):float{
		 return (xx*Screen.height*0.01);
		 }
	 
	 function LabelPressButtonFunc () {
		 GUI.Label(Rect(pcx(31),pcy(40),pcx(18),pcy(5)),"Press Button");
		 }
	 function Button_BeginPlay_fc () {
		 if(joyMenuSelected==5||!mouseMenuNotActive && Rect(pcx(75.58),pcy(42.73),pcx(21.32),pcy(8.22)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=5;
			 GUI.DrawTexture(Rect(pcx(75.58),pcy(42.73),pcx(21.32),pcy(8.22)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 for (var i : int = 0;
						 i < 4;
						 i++) {
					 if(Joypad.none != JoypadPlayer[i])saveButtons(JoypadPlayer[i]);
					 }
				 isPlay=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_reset_fc () {
		 if(joyMenuSelected==6||!mouseMenuNotActive && Rect(pcx(30.7),pcy(58.05),pcx(19.45),pcy(5.7)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=6;
			 GUI.DrawTexture(Rect(pcx(30.7),pcy(58.05),pcx(19.45),pcy(5.7)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 ResetDefaultButton(JoypadPlayer[PlayerNumber]);
				 GUI.Label(Rect(pcx(31),pcy(40),pcx(18),pcy(5)),"reset ok");
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_start_fc () {
		 if(joyMenuSelected==7||!mouseMenuNotActive && Rect(pcx(41.71),pcy(53.36),pcx(8.98),pcy(2.68)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=7;
			 GUI.DrawTexture(Rect(pcx(41.71),pcy(53.36),pcx(8.98),pcy(2.68)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonStart;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_select_fc () {
		 if(joyMenuSelected==8||!mouseMenuNotActive && Rect(pcx(30.62),pcy(53.47),pcx(8.91),pcy(2.68)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=8;
			 GUI.DrawTexture(Rect(pcx(30.62),pcy(53.47),pcx(8.91),pcy(2.68)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonSelect;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_x_fc () {
		 if(joyMenuSelected==9||!mouseMenuNotActive && Rect(pcx(53.1),pcy(57.05),pcx(5),pcy(5)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=9;
			 GUI.DrawTexture(Rect(pcx(53.1),pcy(57.05),pcx(5),pcy(5)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonX;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_y_fc () {
		 if(joyMenuSelected==10||!mouseMenuNotActive && Rect(pcx(58.53),pcy(51.71),pcx(5.21),pcy(5.34)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=10;
			 GUI.DrawTexture(Rect(pcx(58.53),pcy(51.71),pcx(5.21),pcy(5.34)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonY;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_b_fc () {
		 if(joyMenuSelected==11||!mouseMenuNotActive && Rect(pcx(64.21),pcy(57.26),pcx(5.21),pcy(5)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=11;
			 GUI.DrawTexture(Rect(pcx(64.21),pcy(57.26),pcx(5.21),pcy(5)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonB;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_a_fc () {
		 if(joyMenuSelected==12||!mouseMenuNotActive && Rect(pcx(58.53),pcy(62.61),pcx(5.17),pcy(5.34)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=12;
			 GUI.DrawTexture(Rect(pcx(58.53),pcy(62.61),pcx(5.17),pcy(5.34)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonA;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_l1_fc () {
		 if(joyMenuSelected==13||!mouseMenuNotActive && Rect(pcx(15.22),pcy(39.32),pcx(6.46),pcy(4.91)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=13;
			 GUI.DrawTexture(Rect(pcx(15.22),pcy(39.32),pcx(6.46),pcy(4.91)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonL1;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_l2_fc () {
		 if(joyMenuSelected==14||!mouseMenuNotActive && Rect(pcx(15.7),pcy(33),pcx(6.2),pcy(4.7)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=14;
			 GUI.DrawTexture(Rect(pcx(15.7),pcy(33),pcx(6.2),pcy(4.7)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonL2;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_r1Func () {
		 if(joyMenuSelected==15||!mouseMenuNotActive && Rect(pcx(58.98),pcy(39.51),pcx(5.94),pcy(4.59)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=15;
			 GUI.DrawTexture(Rect(pcx(58.98),pcy(39.51),pcx(5.94),pcy(4.59)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonR1;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 function Button_r2Func () {
		 if(joyMenuSelected==16||!mouseMenuNotActive && Rect(pcx(57.75),pcy(32.05),pcx(6.72),pcy(5.55)).Contains(Event.current.mousePosition)){
			 joyMenuSelected=16;
			 GUI.DrawTexture(Rect(pcx(57.75),pcy(32.05),pcx(6.72),pcy(5.55)),joypadMiroOver, ScaleMode.StretchToFill,true);
			 if(Input.GetMouseButtonUp(0)||joyClick){
				 joypadButton=JoyButton.ButtonR2;
				 beginGetJoystickButton=true;
				 audio.PlayOneShot(press, 0.7);
				 joyClick=false;
				 }
			 }
		}
	 }
