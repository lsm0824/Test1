// JavaScript Document
var lisNode = document.querySelectorAll("#main li");
for(var i=0; i<lisNode.length;i++){
	lisNode[i].onmouseover = function(){
		for(var j=0; j<lisNode.length;j++){
			if(lisNode[j].className == "current"){
				lisNode[j].className = "";
				break;
			}			
		}
		this.className = "current";
	}
}

