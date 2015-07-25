JoypadInput v1.0
---------------------------------------------------------------



Authors
-------
Khiari Marwen 
Website: Touch3D.tn
Email: Marwen@Touch3D.tn

What is in the JoypadInput?
--------------------------
This plugin contains many features of JoyPad. Detect, save, load and reset default buttons of 4 gamepad in real time. 
It contains also two demonstration projects to assist in the use of this plugin.

This package contains plugin which help you to detect, save, load and reset default buttons of 4 joypad(gamepad) in real time.
This package contains two demonstration projects to assist and help in the use of this plugin.
It looks like Unity input device class, offering many functions for joypad.
You can change the plugins and customize it.
You can use it with c# or js.
This package has no error and ready to use.


	
touches:
--------
after select your player
if (Input.GetKeyDown(ButtonA))	Debug.Log("Button  A pressed ");
if (Input.GetKeyDown(ButtonB))	Debug.Log("Button  B pressed ");
if (Input.GetKeyDown(ButtonX))	Debug.Log("Button  X pressed ");
if (Input.GetKeyDown(ButtonY))	Debug.Log("Button  Y pressed ");
if (Input.GetKeyDown(ButtonL1))	Debug.Log("Button  L1 pressed ");
if (Input.GetKeyDown(ButtonL2))	Debug.Log("Button  L2 pressed ");
if (Input.GetKeyDown(ButtonR1))	Debug.Log("Button  R1 pressed ");
if (Input.GetKeyDown(ButtonR2))	Debug.Log("Button  R2 pressed ");
if (Input.GetKeyDown(ButtonStart))	Debug.Log("Button  Start pressed ");
if (Input.GetKeyDown(ButtonSelect))	Debug.Log("Button  Select pressed ");
if (Input.GetAxis(Vertical)>0.5)	Debug.Log("Axe Vertical"); 
if (Input.GetAxis(Horizontal)>0.5)	Debug.Log("Axe Horizontal"); 
 
 
Settings:
--------------------------------------------------------------- 
if(joyClick)
	if button A or B or space pressed do..

joyMenuNotActive=true; 
	Desactivate Menu with Joypad
	
if(joyMenuSelected==1)
	button selected is 1
	
joyMenuCount=3;
	button count in menu
	
rateAxis=0.2;
	joypad rate between 2 axis
	
mouseMenuNotActive=false;
	temporary disables mouse for menu
	
mouseMenuNotActiveAlways=false;
	always disables mouse for menu
	
joypadName[i:int]
	When the script detect Joypad It Will give His Name
	
axisSensitivity=0.4;
	axis sensitivity when you change between menu

	
Open the C# or JS scene of your choice in 'demo 1' or 'demo 2'.
Play around with it.



Don't miss !!: 
---------------------------------------------------------------
 you have copy the "InputManager.asset" from this folder to "your project folder > ProjectSettings > .".
 or you can press on "copy windows" or "copy"
 or you add this Settings to the Input Manager(edit>project settings>input)
	like in inspectorAxis.png



Q & A
-----

You can send comments/questions to Marwen@Touch3D.tn and please rate this package.