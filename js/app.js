$(document).ready(function(){
$('form').submit(function(e){
	var $itemval = $("#additem").val();
	var $item = $("<li class='item'><input type=\"checkbox\"> "+$itemval+"</li>");
	e.preventDefault();

	$(".itemlist").append($item);
	
});


});