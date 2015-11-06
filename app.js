$( document ).ready(function() {
  	$(".add-btn").on("click",function(){
  		var text = $(".input").val();
  		var li = "<li>" + text + "</li>";
  		$(".item").append(li);
      $(".input").val(""); 
  	});
  	$("li").on("dblclick","li", function() {
  		$(this).remove();
  	});
  	$("li").on("click", "li", function() {
  		$(this).css("text-decoration","line-through");
  	});
});