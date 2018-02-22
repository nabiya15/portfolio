$(document).ready(function() {
	var app = document.getElementById('typeThis');

	var typewriter = new Typewriter(app,{
		loop: true
	});

	typewriter.typeString("Beautiful Websites.")
	.pauseFor(2000)
	.deleteAll()
	.typeString("Landing Pages.")
	.pauseFor(2000)
	.deleteAll()
	.typeString("Web Interfaces.")
	.start();

});