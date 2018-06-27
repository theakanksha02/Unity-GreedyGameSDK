#pragma strict

var vel:float=0;

var Killer1:GameObject;
var Killer2:GameObject;

var x1:float;
var y1:float;
var wid:float;
var hei:float;

var i:float;
var j:float;
var k:float;
var l:float;
var m:float;
var n:float;

var SoundOn:GUIStyle;
var SoundOff:GUIStyle;
var Flike:GUIStyle;

var heights:float[];

var l1:GameObject;
var l2:GameObject;
var l3:GameObject;
var l4:GameObject;

var m1:GameObject;
var m2:GameObject;
var m3:GameObject;
var m4:GameObject;

var Sparks:GameObject;
var Lights:GameObject;

var GamePaused:boolean=false;

var score:int=0;
var HighScores:GUIStyle;

var a:int;
var b:int;
var c:int;
var d:int;

/*var x:int;
var y:int;*/

var LeftKillers:GameObject[];
var RightKillers:GameObject[];

var Wall1Touched:boolean=false;
var Wall2Touched:boolean=false;

var GameOver:boolean=false;

var GameStarted:boolean=false;

var IsSoundOn:boolean=true;

var Style:GUIStyle;

var Reset:GUIStyle;

var InitialName:GameObject;

var zx:float;

function Start () {
	/*if(InitialName.gameObject.transform.position.x>0.53)
	{
		InitialName.gameObject.transform.position.x-=0.01;
		//this.gameObject.rigidbody.isKinematic=true;
		Time.timeScale=1;
	}
	else
	{
		//this.gameObject.rigidbody.isKinematic=false;
		Time.timeScale=0;
	}*/
	Time.timeScale=0;
	//PlayerPrefs.SetInt("GlobalHighScore",PlayerPrefs.GetInt("HighScore"));
	/*for(InitialName.transform.position.x=1.38;InitialName.transform.position.x>0.53;InitialName.gameObject.transform.position.x-=0.01)
	{
		//InitialName.gameObject.transform.position.x-=0.01;
	}*/
	
	

}
function OnCollisionEnter(col:Collision)
{
	if(col.collider.name=="Wall1")
	{
		vel*=-1;
		score+=1;
		Wall1Touched=true;
		a=Random.Range(1,6);
		b=Random.Range(1,6);
		c=Random.Range(1,6);
		d=Random.Range(1,6);
		l1=Instantiate(Killer2,Vector3(Killer2.transform.position.x,heights[a],Killer2.transform.position.z),Quaternion.identity);
		l2=Instantiate(Killer2,Vector3(Killer2.transform.position.x,heights[b],Killer2.transform.position.z),Quaternion.identity);
		l3=Instantiate(Killer2,Vector3(Killer2.transform.position.x,heights[c],Killer2.transform.position.z),Quaternion.identity);
		l4=Instantiate(Killer2,Vector3(Killer2.transform.position.x,heights[d],Killer2.transform.position.z),Quaternion.identity);
	}
	if(col.collider.name=="Wall2")
	{
		vel*=-1;
		score+=1;
		Wall2Touched=true;
		a=Random.Range(1,6);
		b=Random.Range(1,6);
		c=Random.Range(1,6);
		d=Random.Range(1,6);
		m1=Instantiate(Killer1,Vector3(Killer1.transform.position.x,heights[a],Killer1.transform.position.z),Quaternion.identity);
		m2=Instantiate(Killer1,Vector3(Killer1.transform.position.x,heights[b],Killer1.transform.position.z),Quaternion.identity);
		m3=Instantiate(Killer1,Vector3(Killer1.transform.position.x,heights[c],Killer1.transform.position.z),Quaternion.identity);
		m4=Instantiate(Killer1,Vector3(Killer1.transform.position.x,heights[d],Killer1.transform.position.z),Quaternion.identity);
	}
	
	if(col.collider.name=="Killer" || col.collider.name=="Killer1(Clone)" ||col.collider.name=="Killer2(Clone)")
	{
		//Time.timeScale=0;
		if(PlayerPrefs.GetInt("HighScore")<score)
		{
			PlayerPrefs.SetInt("HighScore",score);
		}
		//yield WaitForSeconds(0.3);
		GameOver=true;
		Instantiate(Sparks,this.transform.position,Quaternion.identity);
		this.gameObject.GetComponent(MeshRenderer).enabled=false;
		//Lights.gameObject.GetComponent(Light).enabled=false;
		/*RenderSettings.ambientLight.r=5;
		RenderSettings.ambientLight.b=5;
		RenderSettings.ambientLight.g=5;*/
		
		yield WaitForSeconds(1);
		
		Time.timeScale=0;
		
	}
}
function Update () {

if(InitialName.gameObject.transform.position.x>0.53)
	{
		InitialName.gameObject.transform.position.x-=0.01;
		//this.gameObject.rigidbody.isKinematic=true;
		//Time.timeScale=1;
	}
			l1.transform.position.x=Killer2.transform.position.x;
			l2.transform.position.x=Killer2.transform.position.x;
			l3.transform.position.x=Killer2.transform.position.x;
			l4.transform.position.x=Killer2.transform.position.x;
			l1.transform.rotation.z=Killer2.transform.rotation.z;
			l2.transform.rotation.z=Killer2.transform.rotation.z;
			l3.transform.rotation.z=Killer2.transform.rotation.z;
			l4.transform.rotation.z=Killer2.transform.rotation.z;
			
			m1.transform.position.x=Killer1.transform.position.x;
			m2.transform.position.x=Killer1.transform.position.x;
			m3.transform.position.x=Killer1.transform.position.x;
			m4.transform.position.x=Killer1.transform.position.x;
			m1.transform.rotation.z=Killer1.transform.rotation.z;
			m2.transform.rotation.z=Killer1.transform.rotation.z;
			m3.transform.rotation.z=Killer1.transform.rotation.z;
			m4.transform.rotation.z=Killer1.transform.rotation.z;
	if(Wall1Touched==true)
	{
		if(Killer1.transform.position.x>-12.2)
		{
			Killer1.transform.position.x-=0.02;
		}
		else if(Killer2.transform.position.x>-6.55)
		{
			Killer2.transform.position.x-=0.02;
			
			
		}
		else
		{
			Wall1Touched=false;
		}
		
	}
	
	if(Wall2Touched==true)
	{
		if(Killer2.transform.position.x<-5.83)
		{
			Killer2.transform.position.x+=0.02;
		}
		else if(Killer1.transform.position.x<-11.59)
		{
			Killer1.transform.position.x+=0.02;
		}
		else
		{
			Wall2Touched=false;
		}
	}
	this.GetComponent.<Rigidbody>().velocity.x=vel;
	
	if(GameOver==false)
	{
		if(Input.GetMouseButtonDown(0))
		{
		this.GetComponent.<Rigidbody>().velocity.y=4.5;
		}
	}

}

function OnGUI()
{
	if(GameStarted==false)
	{
	if(GUI.Button(Rect(Screen.width/1.36,Screen.height/12.93,Screen.width/6.26,Screen.height/10.35),"",HighScores))
	{
		if(PlayerPrefs.GetInt("ShowScore")==0)
		PlayerPrefs.SetInt("ShowScore",1);
	}
	if(GUI.Button(Rect(Screen.width/3.19,Screen.height/1.27,Screen.width/2,Screen.height/2),"*START*",Style))
	{
		Time.timeScale=1;
		GameStarted=true;
		InitialName.gameObject.GetComponent(GUITexture).enabled=false;
		PlayerPrefs.SetInt("Started",1);
	}
	}
	if(GUI.Button(Rect(Screen.width/9.76,Screen.height/17.1,Screen.width/9.92,Screen.height/14.5),"",Reset))
	{
		Application.LoadLevel(0);
	}
	Style.fontSize=Screen.width/10;
	GUI.Label(Rect(Screen.width/2.86,Screen.height/14.63,Screen.width/2,Screen.height/2),"Score-"+score.ToString(),Style);
	if(GameOver==true)
	GUI.Label(Rect(Screen.width/2-Screen.width/4,Screen.height/2,Screen.width/2,Screen.height/2),"High Score -"+(PlayerPrefs.GetInt("HighScore")).ToString(),Style);

	
	if(GamePaused==false && GameStarted==true)
	{
		if(GUI.Button(Rect(Screen.width/1.25,Screen.height/13.81,Screen.width/12,Screen.height/12),"II",Style))
		{
			GamePaused=true;
			Time.timeScale=0;		
		}
	}
	
	if(GamePaused==true)
	{
		if(GUI.Button(Rect(Screen.width/2.81,Screen.height/3.25,Screen.width/3.2,Screen.height/16.88),"Resume",Style))
		{
			GamePaused=false;
			Time.timeScale=1;		
		}
		
		if(IsSoundOn==true)
		{
		if(GUI.Button(Rect(Screen.width/3.1,Screen.height/2.51,Screen.width/5.17,Screen.height/8.18),"",SoundOn))
		{
			this.GetComponent(AudioSource).enabled=false;
			IsSoundOn=false;
		}
		}
		if(IsSoundOn==false)
		{
			if(GUI.Button(Rect(Screen.width/3.1,Screen.height/2.51,Screen.width/5.17,Screen.height/8.18),"",SoundOff))
			{
			this.GetComponent(AudioSource).enabled=true;
			IsSoundOn=true;
			}
		}
		if(GUI.Button(Rect(Screen.width/1.85,Screen.height/2.55,Screen.width/5.52,Screen.height/9.15),"",Flike))
		{
			//this.GetComponent(AudioSource).enabled=false;
			//IsSoundOn=false;
			Application.OpenURL("https://www.facebook.com/maxingames");
		}
		
	}
}