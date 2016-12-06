$(document).ready(function(){
	var words=`Adult

			Aeroplane

			Air

			Aircraft Carrier

			Airforce

			Airport

			Album

			Alphabet

			Apple

			Arm

			Army

			Baby

			Baby

			Backpack

			Balloon

			Banana

			Bank

			Barbecue

			Bathroom

			Bathtub

			Bed

			Bed

			Bee

			Bible

			Bible

			Bird

			Bomb

			Book

			Boss

			Bottle

			Bowl

			Box

			Boy

			Brain

			Bridge

			Butterfly

			Button

			Cappuccino

			Car

			Carrace

			Carpet

			Carrot

			Cave

			Chair

			Chess Board

			Chief

			Child

			Chisel

			Chocolates

			Church

			Church

			Circle

			Circus

			Circus

			Clock

			Clown

			Coffee

			Coffeeshop

			Comet

			Compact Disc

			Compass

			Computer

			Crystal

			Cup

			Cycle

			Data Base

			Desk

			Diamond

			Dress

			Drill

			Drink

			Drum

			Dung

			Ears

			Earth

			Egg

			Electricity

			Elephant

			Eraser

			Explosive

			Eyes

			Family

			Fan

			Feather

			Festival

			Film

			Finger

			Fire

			Floodlight

			Flower

			Foot

			Fork

			Freeway

			Fruit

			Fungus

			Game

			Garden

			Gas

			Gate

			Gemstone

			Girl

			Gloves

			God

			Grapes

			Guitar

			Hammer

			Hat

			Hieroglyph

			Highway

			Horoscope

			Horse

			Hose

			Ice

			Ice-cream

			Insect

			Jet fighter`;
			
	var alpahabets=['A','B','C','D','E','F','G','H','I',
					'J','K','L','M','N','O','P','Q','R',
					'S','T','U','V','W','X','Y','Z'];
	b = words.split('\n');
	for( var i =0; i < b.length; i++){
		if(b[i] == ' ' || b[i] === ''){
			b.splice(i,1);
			for(var j = 0; j < b[i].length; j++){
				b[i] = b[i].replace(' ', '');
				b[i] = b[i].replace('\t', '');
				
			}
			b[i] = b[i].toUpperCase();
		}
	}

		
	var limit=0; //no of chances
	$('#chances').html(7 - limit);
	// array b has every word that was used in the game
	var randomWord=b[Math.floor(Math.random() * 99)];//get the random word for play
	// var randomWord='ELECTRICITY';
	// var length=randomWord.length;
	console.log(randomWord,"-->",randomWord.length);
	var blankSpace="";
	for(var i=0;i<randomWord.length;i++){
		blankSpace=blankSpace+"<span id ="+i+">" + " _ " + "</span>";
	}
	
	
	$('.wordDisplay').append(blankSpace);
	var alpahabetsDiv = $('.alpahabets');
	var buttons = '';
	for(var i =0; i < alpahabets.length;i++){
		buttons = buttons + '<input type = "button" class = "btn btn-danger alpahabetsButtons" value = ' + alpahabets[i] + ' />';
	}
	alpahabetsDiv.append(buttons); 
		
	
	$('.alpahabetsButtons').on('click', function(event){
		var alpha = event.target.defaultValue;
		
		
		//TEXT CHANGE
		if(randomWord.search(alpha) !== -1){
			for(var i =0; i < randomWord.length; i++){
				if(randomWord[i] === alpha){
					$("#" + i).text(alpha);
				}
			}
			//WINNING Condition
			var check='';
			for(var i=0;i<randomWord.length;i++){
				var temp=$("#" + i).text();
				check=check+temp;
			}
			
			if(randomWord==check){
				$('.alpahabetsButtons').attr('disabled',true);
				//setTimeout(function(){alert("You Won");reset();}, 200);	//GAME WIN
				alert("You Won");
				reset();
			}
		}
		else{
			if(limit<6){
				
				if(limit==1-1){
				$('.structure').show();			//STRUCTURE SHOW
				}
				else if(limit==2-1){
					$('.head').show();			//HEAD SHOW
				}
				else if(limit==3-1){
					$('.body').show();			//BODY SHOW
				}
				else if(limit==4-1){
					$('.leftHand').show();		//LEFT-HAND SHOW
				}
				else if(limit==5-1){	
				$('.rightHand').show();			//RIGHT-HAND SHOW
				}
				else if(limit==6-1){
					$('.leftLeg').show();		//LEFT-LEG SHOW
				}	
				limit++;
				$('#chances').html(7 - limit);
			}
			else{
				$('.rightLeg').show();			//RIGHT-LEG SHOW
				$('.alpahabetsButtons').attr('disabled',true);
				//setTimeout(function(){alert("Game Over");reset();}, 200); 	//GAME OVER
				alert("GAME OVER");
				reset();
				// THe RESET FUNCTION WILL CLEAR THE BOARD AND RESET THE SVG
			}
		}
		this.disabled  = true; 
	});
	// TO RESET GAME BOARD
	function reset(){
		// $('.structure, .head, .body, .leftHand, .rightHand,.rightLeg,.leftLeg').css('display','none');
		// $('.alpahabetsButtons').attr('disabled',false);
		// $( ".wordDisplay" ).empty();
		// limit=0;
		// randomWord=b[Math.floor(Math.random() * 99)];
		// console.log(randomWord,'-->',randomWord.length);
		// blankSpace="";
		// for(var i=0;i<randomWord.length;i++){
			// blankSpace=blankSpace+"<span id ="+i+">" + " _ " + "</span>";
		// }
		// $('.wordDisplay').append(blankSpace);
		window.location.reload();
	};
});