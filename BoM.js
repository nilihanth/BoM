// Script by Milo Housknecht. Development started ~ 8/15/15
// Used http://www.w3schools.com for help on loading XML file.

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
	/*
	function nextChapter() {
		currentChapter++;
		showChapter(currentChapter);
	}
	function prevChapter() {
		currentChapter--;
		showChapter(currentChapter);
	}
	*/
	$('#btn-next-ch').click(function(){
		showChapter(currentChapter++);
	})
	//Load the BoM file into 'x' and the XML DOM into 'xml'
	var x=loadXMLDoc("BoM.xml");
	var xml=x.responseXML;

	function showChapter (currentChapter) {
		//This sets the access level.
		var path="/root/book/chapter[" + currentChapter + "]/verse";
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



