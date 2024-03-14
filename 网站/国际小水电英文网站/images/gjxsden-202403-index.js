$(".nav-item.has-child").hover(function(){
    $(this).find(".nav-citems").addClass("act")
},function(){
    $(this).find(".nav-citems").removeClass("act")
})

$(".searchsub").click(function(){
    if($(".search-word").val() !='') {
        $(".search-container form").submit();
    } else {
        alert('Please enter your search. ');
    }
})