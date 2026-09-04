$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	$("#p1").click(function() {
		$(".disappear").toggle();
	});
	$("img").mouseenter(function() {
		alert("You hovered over the image!");
	});
});
