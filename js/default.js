var myApp = angular.module('myApp', []);
myApp.filter('changeNegativityToNothing',
	function(){
		return function(value){
				if(value === '-1'){
					return '';
				}
				else{
					return value;
				}
			}
		}
);
myApp.controller('gameController',['$scope','changeNegativityToNothingFilter',
	function($scope, changeNegativityToNothingFilter){
		$scope.score = {x: 0, y: 0};
		$scope.gamePlayed = 1;
		$scope.chance = 'X';
		$scope.gameMatrix = initializeGame();
		
		$scope.checkArray = function(pos){
			console.log(pos);
			pos.value = $scope.chance === 'X'? 'X': 'O';
			
			var a = checkGameStatus($scope.gameMatrix);
			if(a === true){
				$scope.gamePlayed++;
				alert($scope.chance + ' wins');	
				$scope.gameMatrix = initializeGame();
				if($scope.chance === 'X')
					$scope.score.x++;
				else
					$scope.score.y++;
			}
			else if(a === false){
				$scope.gamePlayed++;
				alert("GAME DRAW");
				$scope.gameMatrix = initializeGame();
				
			}
		$scope.chance = $scope.chance === 'O'?'X':'O';
		}
		$scope.resetGame = function(){
			$scope.score.x = 0;
			$scope.score.y = 0;
			$scope.gamePlayed = 1;
			//SOme bug Fixing
			$scope.gameMatrix =initializeGame();
		} 	
	}
]);
	//board reset
function initializeGame(){
	var matrix = [];
	for(var i =0;i< 3; i++){
			matrix[i] = [];
			for(var j = 0; j < 3; j++){
				matrix[i][j] = {value:'-1', x:i, y:j}; 
			}
		}
	return matrix;
}
function checkGameStatus(gameBoard){
	var array = [];
	//check the rows.
	for( var i =0; i<gameBoard.length; i++){
		array[i] = [];
		for( var j =0; j< gameBoard[i].length; j++){
			array[i][j] = gameBoard[i][j].value;
		}
	}
	var winningOne = 'XXX';
	var winningZero = 'OOO';
	for( var i = 0; i < array.length; i++){
		if(array[i].join('') === winningOne){
			
			return true;
		}
		else if(array[i].join('') === winningZero){
		
			return true;
		}
		else{
			
		}
	}
	// check cols.
	for(var j =0; j < array.length; j++){
		var temp = [];
		for( var i = 0; i < array.length; i++){
			temp[i] = array[i][j];
		}
		if(temp.join('') === winningOne){
		
			return true;
		}
		else if(temp.join('') === winningZero){
			
			return true;
		}
		else{
			
		}
	}
	
	//check diagonals.
	var temp = [];
	for( var i =0; i < array.length;i++){
		temp[i] = array[i][i];
	}
	if(temp.join('') === winningOne){
		
		return true;
	}
	else if(temp.join('') === winningZero){
		
		return true;
	}
	else{
		
	}
	var temp = [];
	for(var i =0, j= array.length -1; i< array.length; i++, j--){
		temp[i] = array[j][i];
	}
	if(temp.join('') === winningOne){
		
		return true;
	}
	else if(temp.join('') === winningZero){
		
		return true;			// GAME WON
	}
	else{
		for(var i =0; i < array.length; i++){
			for(var j = 0; j < array[i].length; j++){
				if(array[i][j] === '-1'){
					return;
				}
			}
		}
		return false;			// GAME DRAW
	}
	
}
