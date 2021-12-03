$(function(){
	var $hh3 = $("#tab div");
	var $ddiv = $("#tab span");
	for (var i=0;i<$hh3.length;i++) {
		
		$hh3[i].index=i;
		$($hh3).click(function(){
			
			for (var i=0;i<$hh3.length;i++) {
				$hh3[i].className="";
				$($ddiv[i]).css("display","none");
				$ddiv[i].className="";
				$ddiv[i].className="content";
			}
			this.className="active";
			$($ddiv[this.index]).css("display","block");
			
		});
			
	}
	
});