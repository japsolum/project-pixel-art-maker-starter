// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var width,
	height;

$(document).ready(function() {
	$("#input_height").change(function () {
		height = $("#input_height").val();
		$("#input_height").attr("value", height);
	});

	$("#input_width").change(function () {
		width = $("#input_width").val();
		$("#input_width").attr("value", width);
	});
});

$("#submit").click(function() {
	height = $("#input_height").attr("value");
	width = $("#input_width").attr("value");
	makeGrid(height, width);
});

var makeGrid = function(height, width) {	
	for (var y = 0; y < height.length; y++) {
		//create row
		for (var x = 0; x < width.length; x++) {
			//create all columns in row
		}
	}
	console.log("height " + height + " width " + width);
};
