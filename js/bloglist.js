//The function below loads when the webpage is loaded and creates the posts.
function code(){
	var i;
	for(i = 1; i<=5; i++){
		var a = document.getElementsByClassName("allPostsContainer")[0];
		var b = document.createElement("div");
		b.setAttribute("class","post");
		a.appendChild(b);
		var c = document.createElement("div");
		c.setAttribute("class","post-left");
		var d = document.createElement("p");
		d.setAttribute("class","post-username");
		d.innerHTML = "Jimi";
		b.appendChild(c);
		c.appendChild(d);
		var e = document.createElement("div");
		e.setAttribute("class","post-content");
		var f = document.createElement("i");
		f.setAttribute("class","fa fa-trash fa-2x");
		f.setAttribute("data-toggle","modal");
		f.setAttribute("data-target","#popup");
		var g = document.createElement("p");
		g.setAttribute("class","post-title");
		g.innerHTML = "Hello there ! This is Post "+i+"." ;
		var h = document.createElement("p");
		h.setAttribute("class","post-desc");
		h.innerHTML = "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.";
		var j = document.createElement("i");
		j.setAttribute("class", "fa fa-ellipsis-h");
		j.setAttribute("onclick","location.href = './post.html'");
		b.appendChild(e);
		e.appendChild(f);
		e.appendChild(g);
		e.appendChild(h);
		e.appendChild(j);
	}

}