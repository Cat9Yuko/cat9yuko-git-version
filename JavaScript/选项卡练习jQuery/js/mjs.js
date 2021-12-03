$(function(){
	var $hh3 = $("span");
	var $ddiv = $(".tab_container div");
	for (var i=0;i<$hh3.length;i++) {
		
		$hh3[i].index=i;
		$($hh3).hover(function(){
			
			for (var i=0;i<$hh3.length;i++) {
				$hh3[i].removeClass("active")
				$($ddiv[i]).css("display","none");
				$ddiv[i].removeClass("content");
				$ddiv[i].className="content";
			}
			this.addClass("active");
			$($ddiv[this.index]).css("display","block");
			
		});
			
	}
	
});