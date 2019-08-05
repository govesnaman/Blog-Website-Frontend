function edit(){
	document.getElementById("btn").innerHTML = "Save <i class='fa fa-floppy-o'></i>"
	document.getElementById("blogTitleNew").setAttribute("class","clicked");
	document.getElementById("blogTitleNew").setAttribute("contentEditable","true");
	document.getElementById("blogBody").setAttribute("class","clicked");
	document.getElementById("blogBody").setAttribute("contentEditable","true");
	document.getElementById("btn").setAttribute("onclick","save()");

}

function save(){
	document.getElementById("blogTitleNew").setAttribute("contentEditable","false");
	document.getElementById("blogBody").setAttribute("contentEditable","false");
	document.getElementById("btn").innerHTML = "Edit  <i class='fa fa-pencil-square-o'>"
	var element = document.getElementById("blogTitleNew");
    element.className = element.className.replace(/\bclicked\b/g, "");
    var element1 = document.getElementById("blogBody");
    element1.className = element1.className.replace(/\bclicked\b/g, "");
  	document.getElementById("btn").setAttribute("onclick","edit()");
}

