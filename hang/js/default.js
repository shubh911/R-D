$(document).ready(function(){
	var words=[
	  {WORD:'CONCERN',HINT:'SOMETHING THAT INTERESTS YOU BECAUSE IT IS IMPORTANT'},
	  {WORD:'PRACTICE',HINT:'A CUSTOMARY WAY OF OPERATION OR BEHAVIOR'},
	  {WORD:'COMMIT',HINT:'PERFORM AN ACT, USUALLY WITH A NEGATIVE CONNOTATION'},
	  {WORD:'ISSUE',HINT:'SOME SITUATION OR EVENT THAT IS THOUGHT ABOUT'},
	  {WORD:'ENGAGE',HINT:'CONSUME ALL OF ONES ATTENTION OR TIME'},
	  {WORD:'POLICY',HINT:'A PLAN OF ACTION ADOPTED BY AN INDIVIDUAL OR SOCIAL GROUP'},
	  {WORD:'STRAIGHT',HINT:'SUCCESSIVE, WITHOUT A BREAK'},
	  {WORD:'STOCK',HINT:'CAPITAL RAISED BY A CORPORATION THROUGH THE ISSUE OF SHARES'},
	  {WORD:'PROPERTY',HINT:'A BASIC OR ESSENTIAL ATTRIBUTE SHARED BY MEMBERS OF A CLASS'},
	  {WORD:'COURT',HINT:'AN ASSEMBLY TO CONDUCT JUDICIAL BUSINESS'},
	  {WORD:'APPOINT',HINT:'ASSIGN A DUTY, RESPONSIBILITY OR OBLIGATION TO'},
	  {WORD:'PASSAGE',HINT:'A SECTION OF TEXT, PARTICULARLY A SECTION OF MEDIUM LENGTH'},
	  {WORD:'INSTANCE',HINT:'AN OCCURRENCE OF SOMETHING'},
	  {WORD:'PROJECT',HINT:'A PLANNED UNDERTAKING'},
	  {WORD:'CONSTANT',HINT:'A QUANTITY THAT DOES NOT VARY'},
	  {WORD:'CIRCUMSTANCES',HINT:'ONES OVERALL CONDITION IN LIFE'},
	  {WORD:'LEVEL',HINT:'A RELATIVE POSITION OR DEGREE OF VALUE IN A GRADED GROUP'},
	  {WORD:'AFFECT',HINT:'HAVE AN INFLUENCE UPON'},
	  {WORD:'RENDER',HINT:'GIVE AN INTERPRETATION OF'},
	  {WORD:'GENERATE',HINT:'BRING INTO EXISTENCE'},
	  {WORD:'THEORY',HINT:'A WELL-SUBSTANTIATED EXPLANATION OF SOME ASPECT OF THE WORLD'},
	  {WORD:'RANGE',HINT:'A VARIETY OF DIFFERENT THINGS OR ACTIVITIES'},
	  {WORD:'CAMPAIGN',HINT:'A RACE BETWEEN CANDIDATES FOR ELECTIVE OFFICE'},
	  {WORD:'LEAGUE',HINT:'AN ASSOCIATION OF SPORTS TEAMS THAT ORGANIZES MATCHES'},
	  {WORD:'LABOR',HINT:'ANY PIECE OF WORK THAT IS UNDERTAKEN OR ATTEMPTED'},
	  {WORD:'CONTRACT',HINT:'A BINDING AGREEMENT THAT IS ENFORCEABLE BY LAW'},
	  {WORD:'EARNEST',HINT:'CHARACTERIZED BY A FIRM, HUMORLESS BELIEF IN ONES OPINIONS'},
	  {WORD:'KNIGHT',HINT:'A PERSON OF NOBLE BIRTH TRAINED TO ARMS AND CHIVALRY'},
	  {WORD:'CONVINCE',HINT:'MAKE REALIZE THE TRUTH OR VALIDITY OF SOMETHING'},
	  {WORD:'INSPIRE',HINT:'SERVE AS THE INCITING CAUSE OF'},
	  {WORD:'CONVENTION',HINT:'A LARGE FORMAL ASSEMBLY'},
	  {WORD:'SKILL',HINT:'AN ABILITY THAT HAS BEEN ACQUIRED BY TRAINING'},
	  {WORD:'TERRITORY',HINT:'THE GEOGRAPHICAL AREA UNDER THE JURISDICTION OF A STATE'},
	  {WORD:'MAJORITY',HINT:'MORE THAN HALF OF THE VOTES IN AN ELECTION'},
	  {WORD:'CHAMBER',HINT:'A NATURAL OR ARTIFICIAL ENCLOSED SPACE'}
	];

	var alpahabets=['A','B','C','D','E','F','G','H','I',
									'J','K','L','M','N','O','P','Q','R',
									'S','T','U','V','W','X','Y','Z','RESET'];
//JUST TO HOLD THE ALL WORDS IN AN ARRAY


	var limit=0; //NO OF CHANCES USER GET IN A GAME
	$('#chances').html(7 - limit);//NO OF CHANCES LEFT-INTIALIZATION
	// array WORDS has every word that was used in the game
	var word_hint=words[Math.floor(Math.random() * 35)];//get the random word for play
	var randomWord=word_hint.WORD;
	console.log(randomWord,'-->',randomWord.length,'-->',word_hint.HINT);//CHEATING PART
		$('.note').html(word_hint.HINT);
	//TO SHOW BLANK SPACES IN GAME
	var blankSpace="";
	for(var i=0;i<randomWord.length;i++){
		blankSpace=blankSpace+"<span id ="+i+">" + " _ " + "</span>";
	}
	$('.wordDisplay').append(blankSpace);

//TO SHOW ALL THE ALPHABETS BUTTONS
	var alpahabetsDiv = $('.alpahabets');
	var buttons = '';
	for(var i =0; i < alpahabets.length;i++){
		buttons = buttons + '<input type = "button" class = "btn btn-danger alpahabetsButtons" value = ' + alpahabets[i] + ' />';
	}
	alpahabetsDiv.append(buttons);

//ON EVERY CLICK IN ALPHABETS BUTTONS
	$('.alpahabetsButtons').on('click', function(event){
		var alpha = event.target.defaultValue;
		if(alpha=='RESET'){
			reset();
		}
		//IF THE CLICKED BUTTON IS AVAILBLE THEN CHANGE THE BLANKSPACE WITH ALPHABET
		//TEXT CHANGE
		if(randomWord.search(alpha) !== -1){
			for(var i =0; i < randomWord.length; i++){
				if(randomWord[i] === alpha){
					$("#" + i).text(alpha);
				}
			}

			//WINNING Condition
			//CONVERTING ALL SPAN VALUES INTO STRING
			var check='';
			for(var i=0;i<randomWord.length;i++){
				var temp=$("#" + i).text();
				check=check+temp;
			}
			//COMAPRE WITH randomWord TO CHECK WINNING CONDITION
			if(randomWord==check){
				$('.alpahabetsButtons').attr('disabled',true);
				//setTimeout(function(){alert("You Won");reset();}, 200);	//GAME WIN
				alert("You Won");
				reset();
			}
		}
		else{
			//IF WRONG BUTTON IS CLICKED THEN SHOW THE PART OF SVG
			if(limit<6){

				if(limit==0){
				$('.structure').show();			//STRUCTURE SHOW
				}
				else if(limit==1){
					$('.head').show();			//HEAD SHOW
				}
				else if(limit==2){
					$('.body').show();			//BODY SHOW
				}
				else if(limit==3){
					$('.leftHand').show();		//LEFT-HAND SHOW
				}
				else if(limit==4){
				$('.rightHand').show();			//RIGHT-HAND SHOW
				}
				else if(limit==5){
					$('.leftLeg').show();		//LEFT-LEG SHOW
				}
				//THEN INCREASE THE LIMIT VALUE AND UPDATE NUMBERS OF CHANCES LEFT
				limit++;
				$('#chances').html(7 - limit);
			}
			else{
				//WHEN LIMIT REACHES UPTO 7
				$('.rightLeg').show();			//RIGHT-LEG SHOW
				$('.alpahabetsButtons').attr('disabled',true);
				//setTimeout(function(){alert("Game Over");reset();}, 200); 	//GAME OVER
				alert("GAME OVER");			//GAME OVER
				reset();								//RESET THE BOARD
				// THe RESET FUNCTION WILL CLEAR THE BOARD AND RESET THE SVG
			}
		}
		this.disabled  = true;	//AFTER THE CLICK ON THE BUTTON IT WILL BE DISABLED
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
		window.location.reload();//THIS RELOADS THE WHOLE JS AGAIN
	};
});
