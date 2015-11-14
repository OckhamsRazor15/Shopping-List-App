$(document).ready(function(){
// adds item to list
$('form').submit(function(e){
	var $itemval = $("#additem").val();
	var $item = $("<li class='item'><input class='itemcheck' type='checkbox'> "+$itemval+"<button class='rmvbutton'>Remove</button></li>");
	e.preventDefault();

	$(".itemlist").append($item);	
});
// crosses out item when checked
$('.itemlist').on('click', "li.item", function(){
if ($(this).children().is(":checked")){
  $(this).css("text-decoration", "line-through");
} else {
	$(this).css("text-decoration", "none");
}

});
//removes an item when the remove button is clicked
$(".itemlist").on("click", ".rmvbutton", function(){
$(this).parent().remove();

});
});