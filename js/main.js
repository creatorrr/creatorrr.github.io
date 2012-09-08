$(document).ready(function() {
			var controller = $.superscrollorama();
			// individual element tween examples
			
			// header
			controller.addTween('#header',
	            TweenMax.fromTo( $('#header'), .5,
	                                {css:{fontSize:'120px'},
	                                immediateRender:true,
	                                ease:Quad.easeInOut},

	                                {css:{fontSize:'90px'},
	                                ease:Quad.easeInOut}
	                            )
                        );
            
            // social
            controller.addTween('#social',
	            TweenMax.to( $('#social'), .25,
	                                {css:{fontSize:'25px'},
	                                immediateRender:true,
	                                ease:Quad.easeInOut}
	                            )
                        );
            
            // label
			controller.addTween('#label',
		        TweenMax.to( $('#label'), .75, {css:{opacity: 0}})
        		    );
		    
		    // story elements
		    var story = $('#story h2');
		    for(var i = 1; i <= story.length; i++) {
			if(i%2)
			controller.addTween('#line-'+i,
		        TweenMax.from( $('#line-'+i), .25, 
		                        {css:{right:'25%', opacity: 0, fontSize:'40px'},
		                        ease:Quad.easeInOut}
	                          )
	    	        );
	        else
	        controller.addTween('#line-'+i,
		        TweenMax.from( $('#line-'+i), .25, 
		                        {css:{left:'25%', opacity: 0, fontSize:'40px'},
		                        ease:Quad.easeInOut}
	                          )
	    	        );
	        }
	        
	        // label2
			controller.addTween('#label2',
		        TweenMax.from( $('#label2'), .75, {css:{opacity: 0}})
        		    );
		});
