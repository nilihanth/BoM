// Script by Milo Housknecht. First developed ~ 8/15/15
// Used http://www.w3schools.com for help.


// To be changed later; decides the current chapter.
var currentChapter = 1;

function loadXMLDoc(filename) { 
	// This function is the method in which an XML file can be loaded
	xhttp=new XMLHttpRequest();
	xhttp.open("GET",filename,false);
	xhttp.send("");
	return xhttp;
}
function nextChapter() {
	currentChapter++;
	showVerses(currentChapter);
}
function prevChapter() {
	currentChapter--;
}

//Load the BoM file into 'x' and the XML DOM into 'xml'
var x=loadXMLDoc("BoM.xml");
var xml=x.responseXML;

function showVerses (currentChapter) {
	//This sets the access level.
	var path="/root/book/chapter[" + currentChapter + "]/verse";

	var nodes=xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
	var result=nodes.iterateNext();

	//Cycle through all verses in the 'currentChapter'
	while (result) {
		document.write(result.childNodes[0].nodeValue);
		document.write("<br>");
		result=nodes.iterateNext();
	}
}