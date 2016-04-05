// Script by Milo Housknecht. Development started ~ 8/15/15

// To be changed later; decides the current chapter.
$(document).ready(function(){
	var currentChapter = 1;
	
	function loadXMLDoc(filename) { 
		// This function is the method in which an XML file can be loaded
		xhttp=new XMLHttpRequest();
		xhttp.open("GET",filename,false);
		xhttp.send("");
		return xhttp;
	}
	$('#btn-next-ch').click(function(){
		currentChapter++;
		showChapter(currentChapter);
	})
	$('#btn-prev-ch').click(function(){
		//If at the first chapter, do nothing. Else, go to previous chapter.
		if (currentChapter != 1) {
			currentChapter--;
			showChapter(currentChapter);
		}
	})
	//Load the BoM file into 'x' and the XML DOM into 'xml'
	var x=loadXMLDoc("BoM.xml");
	var xml=x.responseXML;

	function showChapter (chapter) {
		//This sets the access level.
		var path="/root/book/chapter[" + chapter + "]/verse";
		console.log("Path=" + path);
		var nodes=xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
		var result=nodes.iterateNext();

		$("li").remove();
		//Cycle through all verses in the 'currentChapter'
		while (result) {
			var verse = result.childNodes[0].nodeValue;
			$("ol").append("<li>" + verse + "</li>")
			result=nodes.iterateNext();
		}
	}
	showChapter(1);
});



