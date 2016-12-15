$(document).ready(function(){
	var currentIndex=0;
	//TO GET ALL THE ITEMS IN THE ITEMS TO ROATATE
	var items= $(".slider div div div");
	var itemAmt=items.length;
	function rotateItems(){
		var currentItem=$(".slider div div div").eq(currentIndex);
		items.hide();
		currentItem.show();
		var bindis = $('.bindi .row span');
		$('.active').removeClass('active');
		$(bindis[currentIndex]).addClass('active');
	}
	var autoSlide=setInterval(function(){
		currentIndex+=1;
		if(currentIndex>itemAmt-1){
			currentIndex=0;
		}
		rotateItems();
	},2000);
	$('.prev').click(function(){
		clearInterval(autoSlide);
		if(currentIndex==0){
			currentIndex=itemAmt-1;
		}else
			currentIndex-=1;
		
		rotateItems();
	});
	$('.next').click(function(){
		clearInterval(autoSlide);
		currentIndex+=1;
		if(currentIndex>itemAmt-1){
			currentIndex=0;
		}
		rotateItems();
	});
	$('.bindi .row span').on('click', function(e)
	{
		console.log(e.target);
		clearInterval(autoSlide);
		var allBindis = $('.bindi .row span');
		for(var i =0; i < allBindis.length; i++){
			
			if(e.target === allBindis[i]){
				currentIndex = i;
				rotateItems();
				break;
			}
		}
	});
	//*************************************************************************************************
	// FOR SECOND SLIDER.
	(function (){
		var allSlides = $('.slider2 .area52 span');
		allSlides.addClass('slider2Active');
		var slideArea = $('.slider2 .area52');
		allSlides.remove();
		var visibleSlides = [];
			for(var i =0; i < 4; i++){
				visibleSlides.push(allSlides[i]);
				slideArea.append(visibleSlides);
			}
		function next(){
			if(visibleSlides.length < 4){
				return;
			}
			visibleSlides.splice(0,1);
			if(allSlides[i + 1] !== undefined){
				visibleSlides.push(allSlides[i + 1]);
				i++;
				allSlides.remove();
				slideArea.append(visibleSlides);
			}
			else{
				return
			}
			
		}
		function previous(){
			
			var poped = visibleSlides.pop();
			for(var c = 0; c < allSlides.length; c++){
				if(allSlides[c] === poped){
					visibleSlides.unshift(allSlides[i - c]);
					i--;
					break;
				}
			}
			
			allSlides.remove();
			slideArea.append(visibleSlides);
		}
		$('.next2').click(function(){
			next();
		});
		// $('.prev2').click(function(){
			// previous();
		// });
	})();
});