// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var color = $("#colorPicker").val(),
	width,
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

$("#colorPicker").on("change", function() {
	color = $("#colorPicker").val();
	$("#colorPicker").val(color);
	console.log(color);
});

$("#submit").click(function() {
	height = $("#input_height").attr("value");
	width = $("#input_width").attr("value");
	makeGrid(height, width);
});

var makeGrid = function(height, width) {
	for (var y = 1; y <= height; y++) {
		$("#pixel_canvas").append('<tr id="row' + y +'"></tr>');
		for (var x = 1; x <= width; x++) {
			$("#row" + y).append("<td class='cell' id='cell" + y + "-" + x + "' onclick='changeColor(this.id);'></td>");
		}
	}
};

function changeColor(id){
	$("#" + id).css({backgroundColor: color});
};


