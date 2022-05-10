$(window).load(function(){
				var $iw_thumbs			= $('.iw_thumbs'),
				    $secH               =$('.sec5'),
				    $iw_wrapper         =$('.iw_wrapper'),
					$iw_ribbon			= $('#iw_ribbon'),
					$iw_ribbon_close	= $iw_ribbon.children('span.iw_close'),
					$iw_ribbon_zoom		= $iw_ribbon.children('span.iw_zoom'),
					$imgP= $('<p class="img_txt"></p>'),
					$Workimg=$(".ser_list_wrap"),
					$HCimg=$('.heci_box ul'),
					$descrp;
					ImageWall	= (function() {
							// window width and height
						var w_dim,
						    // index of current image
							current				= -1,
							isRibbonShown		= false,
							isFullMode			= false,
							// ribbon / images animation settings www.5icool.org
							ribbonAnim			= {speed : 500, easing : 'easeOutExpo'},
							imgAnim				= {speed : 400, easing : 'jswing'},
							// init function : call masonry, calculate window dimentions, initialize some events
							init				= function() {
								
								getWindowsDim();
								initEventsHandler();
								resizeiwT();
							},
							// calculate window dimentions
							getWindowsDim		= function() {
								w_dim = {
									width	: $(window).width(),
									height	: $(window).height()
								};
							},
                            resizeiwT=function(){
                            	var  secH 	= w_dim.height,
                            	      iwH   =612,
									 iwT      	= secH/2 - iwH/2+30;
									 //$iw_wrapper.css('margin-top',"30px");
                         

                            },
							// initialize some events
							initEventsHandler	= function() {
								
								// click on a image
								$iw_thumbs.delegate('li', 'click', function() {
                                        
									if($iw_ribbon.is(':animated')) return false;
									
									   var $el = $(this);
									
										isRibbonShown = true;
										
										$el.data('ribbon',true);
										
										// set the current
										current = $el.index();
										showFullImage($el);
									
								});
								$Workimg.delegate('li', 'click', function() {
                                        
									if($iw_ribbon.is(':animated')) return false;
									
									   var $el = $(this);
									
										isRibbonShown = true;
										
										$el.data('ribbon',true);
										
										// set the current
										current = $el.index();

										showWork($el);
										var ldgh_txt = $(this).find(".ser_tit p").text();
										$(".img_txt").text(ldgh_txt);
									
								});
								$HCimg.delegate('li', 'click', function() {
                                        
									if($iw_ribbon.is(':animated')) return false;
									
									   var $el = $(this);
									
										isRibbonShown = true;
										
										$el.data('ribbon',true);
										
										// set the current
										current = $el.index();

										showHC($el);
									
								});
								
								// click ribbon close
								$iw_ribbon.bind('click', closeRibbon);
								   $iw_ribbon_close.bind('click', closeRibbon);
								  $iw_ribbon.children("img").remove();
								  $iw_ribbon.children("img").next().nextAll().not(".iw_close").remove();
								// on window resize we need to recalculate the window dimentions
								$(window).bind('resize', function() {
											getWindowsDim();
											resizeiwT();
											if($iw_ribbon.is(':animated'))
												return false;
											closeRibbon();
										 })
								         .bind('scroll', function() {
											if($iw_ribbon.is(':animated'))
												return false;
											closeRibbon();
										 });
								
							},
							showWork=function($el){

								var	$img	= $el.find('img'),
									large	= $img.data('img'),
									workp    =$iw_ribbon.children("img_con"),

                                    $largeWork=$('<img style="width: 1024px;height:700px;margin-left: -512px; margin-top: -350px;"/>');
                                     $largeWork.attr('src',large);
                                     $iw_ribbon.prepend($largeWork); 
                                      $iw_ribbon.children("img").next().nextAll().not(".iw_close").remove();
                                     $iw_ribbon_close.show();
										   
										   
										$iw_ribbon.animate({
											height 		: '100%',
											width 		: '100%',
											marginTop	: '0px',
											opacity	: '1',
											top			: '0px'
										}, ribbonAnim.speed);
										 $iw_ribbon.show();
										 $iw_ribbon.css('display','block');
										$iw_ribbon.children("img").next().nextAll().not(".iw_close").remove();
										//  $('#iw_ribbon').children(".img_con").remove();


							},
							showHC=function($el){

								var	$img	= $el.find('img'),
									large	= $img.data('img'),
									workp    =$iw_ribbon.children("img_con"),

                                    $largeHC=$('<img style="width: 1000px;height:502px;margin-left: -500px; margin-top: -251px;"/>');
                                     $largeHC.attr('src',large);
                                     $iw_ribbon.prepend($largeHC); 
                                      $iw_ribbon.children("img").next().nextAll().not(".iw_close").remove();
                                     $iw_ribbon_close.show();
										   
										   
										$iw_ribbon.animate({
											height 		: '100%',
											width 		: '100%',
											marginTop	: '0px',
											opacity	: '1',
											top			: '0px'
										}, ribbonAnim.speed);
										 $iw_ribbon.show();
										 $iw_ribbon.css('display','block');
										$iw_ribbon.children("img").next().nextAll().not(".iw_close").remove();
										 $('#iw_ribbon').children(".img_con").remove();


							},
							closeRibbon			= function(e) {
								isRibbonShown 	= false
								$iw_ribbon_close.hide();
								$iw_ribbon_zoom.hide();
								$iw_ribbon.children("img").remove();
								  $iw_ribbon.children("img").next().nextAll().not(".iw_close").remove();					
									// current wall image
									var $el	 		= $iw_thumbs.children('li').eq(current);
									
									resetWall($el);
									// slide out ribbon
									$iw_ribbon.stop()
											  .animate({width : '0%'}, ribbonAnim.speed, ribbonAnim.easing); 
										  
								var e = window.event || event; 
                       if ( e.stopPropagation ){ //如果提供了事件对象，则这是一个非IE浏览器 
                      e.stopPropagation(); 
                      }else{ //兼容IE的方式来取消事件冒泡 
                       window.event.cancelBubble = true; 
                      } 
								
							},
							resetWall			= function($el) {
								var $img		= $el.children('img'),
									$descrp		= $img.next();
								$el.data('ribbon',false);
								$descrp.fadeOut();
								$iw_thumbs.children('li').not($el).animate({opacity : 1}, imgAnim.speed);								
							},
							showFullImage		= function($el) {
								isFullMode	= true;
								
								$iw_ribbon_close.hide();
								
								var	$img	= $el.children('img'),
									large	= $img.data('img'),
								    
									// add a loading image on top of the image
									$loading = $('<span class="iw_loading"></span>');
								   
								$el.append($loading);
								$descrp	= $img.next();
								// preload large image
								$('<img/>').load(function() {
									var $largeImage	= $(this);
									
									$loading.remove();
									
									$iw_ribbon_zoom.hide();
									
									resizeImage($largeImage);
									
									// reset the current image in the wall
									resetWall($el);

										$iw_ribbon.animate({
											height 		: '100%',
											width 		: '100%',
											marginTop	: '0px',
											opacity	: '1',
											top			: '0px'
										}, ribbonAnim.speed);
									
									// animate ribbon in and out
                                   	$iw_ribbon.prepend($largeImage);
                                   	$iw_ribbon_close.show();

									
								}).attr('src',large);
									
							},
							resizeImage			= function($image) {
								var widthMargin		= 100,
									heightMargin 	= 100,
								
									windowH      	= w_dim.height - heightMargin,
									windowW      	= w_dim.width - widthMargin,
									theImage     	= new Image();
									
								theImage.src     	= $image.attr("src");
								var imgDec= $image.next().text();
								var imgwidth     	= theImage.width,
									imgheight    	= theImage.height;

								if((imgwidth > windowW) || (imgheight > windowH)) {
									if(imgwidth > imgheight) {
										var newwidth 	= windowW,
											ratio 		= imgwidth / windowW,
											newheight 	= imgheight / ratio;
											
										theImage.height = newheight;
										theImage.width	= newwidth;
										
										if(newheight > windowH) {
											var newnewheight 	= windowH,
												newratio 		= newheight/windowH,
												newnewwidth 	= newwidth/newratio;
										
											theImage.width 		= newnewwidth;
											theImage.height		= newnewheight;
										}
									}
									else {
										var newheight 	= windowH,
											ratio 		= imgheight / windowH,
											newwidth 	= imgwidth / ratio;
										
										theImage.height = newheight;
										theImage.width	= newwidth;
										
										if(newwidth > windowW) {
											var newnewwidth 	= windowW,
											    newratio 		= newwidth/windowW,
												newnewheight 	= newheight/newratio;
									
											theImage.height 	= newnewheight;
											theImage.width		= newnewwidth;
										}
									}
								}
									
								$image.css({
									'width'			: 1450 + 'px',
									'height'		: 907 + 'px',
									'margin-left'	: -1450 / 2 + 'px',
									'margin-top'	: -907 / 2 + 'px'
								});
//								$imgP.remove();
								$imgDiv=$('<div class="img_con"></div>');
								$imgP.html($descrp.text());
								$(".img_txt").text($descrp.text());
								$imgDiv.css({
									'width'			: theImage.width + 'px',
									'height'		: theImage.height + 'px',
									'margin-left'	: -theImage.width / 2 + 'px',
									'margin-top'	: -theImage.height / 2 + 'px'
								});
                               $image.after($imgDiv);

                                $imgDiv.append($imgP);
							};
							
						return {init : init};	
					})();
				
				ImageWall.init();
			});