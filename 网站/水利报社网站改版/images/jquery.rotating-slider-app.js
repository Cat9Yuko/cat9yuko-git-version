(function($){
    $.fn.rotatingSlider2 = function(options){
        var rotatingSlider2 = {
            init: function(el){
                this.$slider = $(el);
                this.$slidesContainer = this.$slider.children('ul.slides');
                this.$slides = this.$slidesContainer.children('li');
                this.$clipPath;
                this.$directionControls;
                this.$currentSlide;
                this.$nextSlide;
                this.$previousSlide;
                
                this.settings = $.extend({
                    autoRotate: true,
                    autoRotateInterval: 6000,
                    draggable: true,
                    directionControls: true,
                    directionLeftText: '&lsaquo;',
                    directionRightText: '&rsaquo;',
                    rotationSpeed: 750,
                    slideHeight: 360,
                    slideWidth: 480,
                    /* Callback Functions */
                    beforeRotationStart: function(){},
                    afterRotationStart: function(){},
                    beforeRotationEnd: function(){},
                    afterRotationEnd: function(){}
                }, options);
                
                this.slideAngle = 360 / this.$slides.length;
                this.currentRotationAngle = 0;
                this.autoRotateIntervalId = false;
                this.rotateTimoutId = false;
                this.currentlyRotating = false;
                this.readyToDrag = false;
                this.dragStartPoint;
                this.dragStartAngle;
                this.currentlyDragging = false;
                this.markupIsValid = false;
                
                this.validateMarkup();
                if(this.markupIsValid){
                    this.renderSlider();
                    this.setCurrentSlide();
                    this.bindEvents();
                    if(this.settings.autoRotate){
                        this.startAutoRotate();
                    }
                }
            },
            bindEvents: function(){
                if(this.settings.draggable){
                    this.$slidesContainer.on('mousedown touchstart', this.handleDragStart.bind(this));
                    this.$slidesContainer.on('mousemove touchmove', this.handleDragMove.bind(this));
                    this.$slidesContainer.on('mouseup mouseleave touchend', this.handleDragEnd.bind(this));
                }
                if(this.settings.directionControls){
                    this.$slider.find('ul.direction-controls .left-arrow button').click(this.handleLeftDirectionClick.bind(this));
                    this.$slider.find('ul.direction-controls .right-arrow button').click(this.handleRightDirectionClick.bind(this));
                }
            },
            handleDragStart: function(e){
                this.readyToDrag = true;
                this.dragStartPoint = (e.type === 'mousedown') ? e.pageX2 : e.originalEvent.touches[0].pageX2;
            },
            handleDragMove: function(e){
                if(this.readyToDrag){
                    var pageX2 = (e.type === 'mousemove') ? e.pageX2 : e.originalEvent.touches[0].pageX2;
                    if(
                        this.currentlyDragging === false && 
                        this.currentlyRotating === false  &&
                        (this.dragStartPoint - pageX2 > 10 || this.dragStartPoint - pageX2 < -10)
                    ){
                        this.stopAutoRotate();
                        if(this.settings.directionControls){
                            this.$directionControls.css('pointer-events', 'none');
                        }
                        window.getSelection().removeAllRanges();
                        this.currentlyDragging = true;
                        this.dragStartAngle = this.currentRotationAngle;
                    }
                    if(this.currentlyDragging){
                        this.currentRotationAngle = this.dragStartAngle - ((this.dragStartPoint - pageX2) / this.settings.slideWidth * this.slideAngle);
                        this.$slidesContainer.css('transform', 'translateX(-50%) rotate('+this.currentRotationAngle+'deg)');
                    }
                }
            },
            handleDragEnd: function(e){
                this.readyToDrag = false;
                if(this.currentlyDragging){
                    this.currentlyDragging = false;
                    this.currentRotationAngle = Math.round(this.currentRotationAngle/this.slideAngle)*this.slideAngle;
                    this.rotate();
                    if(this.settings.directionControls){
                        this.$directionControls.css('pointer-events', '');
                    }
                }
            },
            handleLeftDirectionClick: function(e){
                e.preventDefault();
                this.stopAutoRotate();
                this.rotateClockwise();
            },
            handleRightDirectionClick: function(e){
                e.preventDefault();
                this.stopAutoRotate();
                this.rotateCounterClockwise();
            },
            renderSlider: function(){
                var halfAngleRadian2 = this.slideAngle / 2 * Math.PI/180;
                var innerRadius2 = 1 / Math.tan(halfAngleRadian2) * this.settings.slideWidth / 2;
                var outerRadius2 = Math.sqrt(Math.pow(innerRadius2 + this.settings.slideHeight, 2) + (Math.pow((this.settings.slideWidth / 2), 2)));
                upperArcHeight = outerRadius2 - (innerRadius2 + this.settings.slideHeight);
                lowerArcHeight = innerRadius2 - (innerRadius2 * (Math.cos(halfAngleRadian2)));
                var slideFullWidth2 = (Math.sin(halfAngleRadian2) * outerRadius2) * 2;
                var slideFullHeight2 = upperArcHeight + this.settings.slideHeight + lowerArcHeight
                var slideSidePadding2 = (slideFullWidth2 - this.settings.slideWidth) / 2;
                var fullArcHeight2 = outerRadius2 - (outerRadius2 * (Math.cos(halfAngleRadian2)));
                var lowerArcOffset2 = (slideFullWidth2 - (Math.sin(halfAngleRadian2) * innerRadius2 * 2)) / 2;

                /* Set height and width of slider element */
                this.$slider.css('height', this.settings.slideHeight+'px');
                this.$slider.css('width', this.settings.slideWidth+'px');

                /* Set height and width of slides container and offset width*/
                this.$slidesContainer.css('height', outerRadius2*2+'px');
                this.$slidesContainer.css('width', outerRadius2*2+'px');

                /* Offset width and arc height */
                this.$slidesContainer.css('transform', 'translateX(-50%)');
                this.$slidesContainer.css('top', '-'+ upperArcHeight +'px');

                /* Generate path for slide clipping */
                var pathCoords2 = 'M 0 '+fullArcHeight2;
                pathCoords2 += ' A '+outerRadius2+' '+outerRadius2+' 0 0 1 '+slideFullWidth2+' '+fullArcHeight2;
                pathCoords2 += ' L '+(slideFullWidth2-lowerArcOffset2)+' '+slideFullHeight2;
                pathCoords2 += ' A '+innerRadius2+' '+innerRadius2+' 0 0 0 '+lowerArcOffset2+' '+slideFullHeight2+' Z';
                this.$slider.append('<svg><defs><clipPath id="slideClipPath"><path /></clipPath></defs></svg>');
                this.$slider.find('#slideClipPath>path').attr('d', pathCoords2);

                /* Apply styles to each slide */
                this.$slides.each(function(i, el){
                var $slide2 = $(el);
                    /* Set distance from point of rotation */
                    $slide2.css('transform-origin', 'center '+(innerRadius2 + this.settings.slideHeight)+'px');

                    /* Set slide Height and Width */
                    $slide2.css('height', this.settings.slideHeight+'px');
                    $slide2.css('width', this.settings.slideWidth+'px');

                    /* Set calculated padding for width, upper arc height, and lower arc height */
                    $slide2.css('padding', upperArcHeight +'px '+slideSidePadding2+'px '+lowerArcHeight+'px '+slideSidePadding2+'px ');

                    /* Offset container Arc Height */
                    $slide2.css('top', upperArcHeight +'px');

                    /* Offset Width, then Rotate Slide, then offset individual Top Arcs  */
                    $slide2.css('transform', 'translateX(-50%) rotate('+this.slideAngle * i+'deg) translateY(-'+ upperArcHeight +'px)');

                    /* Add clipping path  */
                    $slide2.css('-webkit-clip-path', 'url(#slideClipPath)');
                    $slide2.css('clip-path', 'url(#slideClipPath)');
                }.bind(this));
                
                /* Render Arrow Controls */
                if(this.settings.directionControls){
                    var directionArrowsHTML = '<ul class="direction-controls">';
                    directionArrowsHTML += '<li class="left-arrow"><button>'+this.settings.directionLeftText+'</button></li>';
                    directionArrowsHTML += '<li class="right-arrow"><button>'+this.settings.directionRightText+'</button></li>';
                    directionArrowsHTML += '</ul>';
                    this.$slider.append(directionArrowsHTML);
                    this.$directionControls = this.$slider.find('ul.direction-controls');
                }
                
            },
            rotateClockwise: function(){
                this.currentRotationAngle = this.currentRotationAngle + this.slideAngle;
                this.rotate();
            },
            rotateCounterClockwise: function(){
                this.currentRotationAngle = this.currentRotationAngle - this.slideAngle;
                this.rotate();
            },
            rotate: function(){
                this.beforeRotationStart();
                this.currentlyRotating = true;
                this.$slider.addClass('currently-rotating');
                this.setCurrentSlide();

                if(this.rotateTimeoutId){
                    clearTimeout(this.rotateTimeoutId);
                    this.rotateTimeoutId = false;
                }
                
                this.$slidesContainer.css('transition', 'transform '+(this.settings.rotationSpeed/1000)+'s ease-in-out');
                this.$slidesContainer.css('transform', 'translateX(-50%) rotate('+this.currentRotationAngle+'deg)');

                this.afterRotationStart();
                
                this.rotateTimeoutId = setTimeout(function(){
                    this.beforeRotationEnd();
                    this.currentlyRotating = false;
                    this.$slider.removeClass('currently-rotating');
                    this.$slidesContainer.css('transition', 'none');

                    /* keep currentRotationAngle between -360 and 360 */
                    if(this.currentRotationAngle >= 360 || this.currentRotationAngle <= -360){
                        this.currentRotationAngle = this.currentRotationAngle >= 360 ? this.currentRotationAngle - 360 : this.currentRotationAngle + 360;
                        this.$slidesContainer.css('transform', 'translateX(-50%) rotate('+this.currentRotationAngle+'deg)');
                    }
                    this.afterRotationEnd();
                }.bind(this), this.settings.rotationSpeed);
            },
            setCurrentSlide: function(){
                var currAngle = this.currentRotationAngle;
                if(this.currentRotationAngle >= 360 || this.currentRotationAngle <= -360){
                     currAngle = currAngle >= 360 ? currAngle - 360 : currAngle + 360;
                }
                this.$currentSlide = this.$slides.eq(-currAngle / this.slideAngle);
                this.$nextSlide = (this.$currentSlide.is(':last-child') ? this.$slides.first() : this.$currentSlide.next());
                this.$previousSlide = (this.$currentSlide.is(':first-child') ? this.$slides.last() : this.$currentSlide.prev());

                this.$slides.removeClass('active-slide');
                this.$slides.removeClass('next-slide');
                this.$slides.removeClass('previous-slide');

                this.$currentSlide.addClass('active-slide');
                this.$nextSlide.addClass('next-slide');
                this.$previousSlide.addClass('previous-slide');
            },
            startAutoRotate: function(){
                this.autoRotateIntervalId = setInterval(function(){
                    this.rotateCounterClockwise();
                }.bind(this), this.settings.autoRotateInterval);
            },
            stopAutoRotate: function(){
                if(this.autoRotateIntervalId){
                    clearInterval(this.autoRotateIntervalId);
                    this.autoRotateIntervalId = false;
                }
            },
            validateMarkup: function(){
                if(
                    this.$slider.hasClass('rotating-slider2') &&
                    this.$slidesContainer.length === 1 &&
                    this.$slides.length >= 2
                ){
                    this.markupIsValid = true;
                }else{
                    this.$slider.css('display', 'none');
                    console.log('Markup for Rotating Slider is invalid.');
                }
            },

            /* Callbacks */
            beforeRotationStart: function(){
                this.settings.beforeRotationStart();
            },
            afterRotationStart: function(){
                this.settings.afterRotationStart();
            },
            beforeRotationEnd: function(){
                this.settings.beforeRotationEnd();
            },
            afterRotationEnd: function(){
                this.settings.afterRotationEnd();
            },
        };

        return this.each(function(){
            rotatingSlider2.init(this);
        });
    };
}(jQuery));