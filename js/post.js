function edit(){
	document.getElementsByClassName("btns")[0].innerHTML = "Save <i class='fa fa-floppy-o'></i>"
	document.getElementById("blogTitleNew").setAttribute("class","clicked");
	document.getElementById("blogTitleNew").setAttribute("contentEditable","true");
	document.getElementById("blogBody").setAttribute("class","clicked");
	document.getElementById("blogBody").setAttribute("contentEditable","true");
	document.getElementsByClassName("btns")[0].setAttribute("onclick","save()");

}

function save(){
	document.getElementById("blogTitleNew").setAttribute("contentEditable","false");
	document.getElementById("blogBody").setAttribute("contentEditable","false");
	document.getElementsByClassName("btns")[0].innerHTML = "Edit  <i class='fa fa-pencil-square-o'>"
	var element = document.getElementById("blogTitleNew");
    element.className = element.className.replace(/\bclicked\b/g, "");
    var element1 = document.getElementById("blogBody");
    element1.className = element1.className.replace(/\bclicked\b/g, "");
  	document.getElementsByClassName("btns")[0].setAttribute("onclick","edit()");
}

function addComments(comment){
	if(comment.value == "")
    	alert("Empty Comment, Please type in something first");
    else{
	    var cr = document.createElement('p');
		cr.innerHTML = comment.value;
		cr.setAttribute("class", "paraText")
		var m = document.getElementById('commentsSaved');
		m.insertBefore(cr,m.childNodes[0]);
		document.getElementById('userComments').value = "";
	}
}

var numberOfClicks=0;
function postLiked(){
	document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    document.getElementById("likeBlog").setAttribute("class","btns")
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else{
            document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}