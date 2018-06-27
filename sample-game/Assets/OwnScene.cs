using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GreedyGame.Runtime;
using GreedyGame.Runtime.Units;
using GreedyGame.Commons;
using System;
using UnityEngine.SceneManagement;

public class OwnScene : MonoBehaviour {

	// Use this for initialization
	void Start () {
		//GGAdConfig adConfig = new GGAdConfig();
		//adConfig.setListener(new GreedyAgentListener());
		//GreedyGameAgent.Instance.init(adConfig);
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void OnMouseDown(){
		GreedyGameAgent.Instance.showEngagementWindow("float-3349");
		Debug.Log ("clicked");
	}

	public void RefreshAds(){
		GreedyGameAgent.Instance.startEventRefresh();
	}


	public void clickable(){
		GreedyGameAgent.Instance.showEngagementWindow("float-3349");
	}

	public void ChangeTexture(){
		
	}
}
