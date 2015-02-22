/*jslint browser: true, devel: true, passfail: false, ass: true, bitwise: true, continue: true, debug: true, eqeq: true, unparam: false, sloppy: true, sub: true, vars: true, white: true */
var standings;
function getLastWeeksPlace(){
	return[14,3,8,3,2,3,1,9,12,3,12,3,10,10];
}
//"Alltel Racing","Rocketman","Andrew","Delury","Chambers","J.Pokoy","Ted Cipa",
//"Dave Feher","Charles","Diane C","Matt Wilt","B.Wilt","P.North","E Feher","N Feher","Mary","DC #2"

function getPlayersName(){
	return["Smurf","Dt Champ","Rocketman","K.Crush","Ted C","Dianne C","Debbie G","Killer Bees","Sleeman","DC","Bill Cosbey","B Wilt","M Wilt"];
}
function getPlaces(){
	return["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st","32nd","33rd","34th","35th","36th","37th","38th","39th","40th","41st","42nd","43rd"];
}
function getRaceLocations(){
		return["Daytona","Atlanta","Las Vegas","Phoenix","Fontana","Martinsville","Texas","Bristol","Richmond","Talladega","Kansas","Charlotte","Dover","Poconos","Michigan","Sonoma","Daytona","Kentucky","New Hampshire","Indianapolis","Poconos","Watkins Glen","Michigan","Bristol","Darlington","Richmond","Chicagoland","New Hampshire","Dover","Charlotte","Kansas","Talladega","Martinsville","Texas","Phoenix","Homestead-Miami"];
}
function getDriverName(){
		return ["0"," ","1","J. McMurray","2","B. Keselowski","3","A. Dillon","4","K. Harvick","5","K. Kahne","6","T. Bayne","7","A. Bowman","9","S. Hornish",
				"10","D. Patrick","11","D. Hamlin","13","C. Mears","14","T. Stewart","15","C. Bowyer","16","G. Biffle","17","Stenhouse Jr.","18","Ky. Busch","19","C. Edwards",
				"20","M. Kenseth","21","R. Blaney","22","J. Logano","23","J.J. Yeley","24","J. Gordon","26","J. Burton","27","P. Menard","29","J. Marks",
				"30","Hornaday Jr.","31","R. Newman","32","B. Labonte","33","Ty Dillion","34","D. Ragan","35","C. Whitt","38","D. Gilliland",
				"40","L. Cassill","410","Ku. Busch","41","Regan Smith","42","K. Larson","43","A. Almirola","44","Reed Sorenson","46","Michael Annett","47","Allmendinger","48","J. Johnson",
				"51","J. Allgaier","52","B. Labonte","55","B. Vickers",
				"62","Brian Scott","66","M. Wallace",
				"78","Truex. Jr.","79","JP Montoya",
				"83","J. Sauter","88","Earnhardt Jr.",
				"95","M. McDowell","98","J. Wise"];
}
function allStarRace(){
		return["4","2","48","4","24","4","24","48","4","48","48","4","88"];
}
//Montoya is number 79
function getAltDriver(){
	return["2","5","410","79","78","47","55","22","10","10","43","5","16"];
}
function getPlayersPicks(){
			//person a pick 1, person a pick 2
			//person b pick 1, person b pick 2
	return[["88","55","19","4","14","11","20","17","18","15","42","22","48","31","16","24"],
			["2","22","4","48","15","24","410","11","16","19","20","18","55","43","88","14"],
			["1","4","48","22","20","24","5","18","31","2","88","19","16","11","15","14"],
			["88","20","27","2","18","15","16","31","11","55","19","4","48","14","22","24"],
			["22","15","18","19","42","5","20","4","11","2","88","410","48","24","31","47"],
			["88","48","24","16","42","22","2","18","11","14","34","20","4","410","15","78"],
			["22","4","14","31","48","2","11","24","18","5","42","410","20","88","78","19"],
			["88","31","19","48","18","15","16","20","4","34","5","11","2","14","78","48"],
			["88","31","2","5","18","24","20","22","15","11","42","5","48","14","16","19"],
			["27","22","18","4","31","24","16","14","15","88","20","5","48","11","19","1"],
			["48","18","19","88","24","31","20","4","14","1","15","5","16","22","2","11"],
			["10","4","19","20","42","24","48","88","11","14","2","18","11","22","16","1"],
			["41","31","2","5","42","24","22","5","1","78","19","11","14","88","15","48"]
	       ];
}
function getWeek1(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek2(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek3(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek4(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek5(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek6(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek7(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek8(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek85(){
	return["0"];
}
function getWeek9(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek10(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek11(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek12(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek13(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek14(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek15(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek16(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek17(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek18(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek19(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek20(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek21(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek22(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek23(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek24(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek25(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek26(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek27(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek28(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek29(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek30(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek31(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek32(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek33(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek34(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek35(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}
function getWeek36(){
	return["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
}

//for the for loops so i dont have to write it out and it will bring in the right array to be searched
function getRightArr(i){
	if (i==0){return getWeek1();}
	if (i==1){return getWeek2();}
	if (i==2){return getWeek3();}
	if (i==3){return getWeek4();}
	if (i==4){return getWeek5();}
	if (i==5){return getWeek6();}
	if (i==6){return getWeek7();}
	if (i==7){return getWeek8();}
	if (i==8){return getWeek9();}
	if (i==9){return getWeek10();}
	if (i==10){return getWeek11();}
	if (i==11){return getWeek12();}
	if (i==12){return getWeek13();}
	if (i==13){return getWeek14();}
	if (i==14){return getWeek15();}
	if (i==15){return getWeek16();}
	if (i==16){return getWeek17();}
	if (i==17){return getWeek18();}
	if (i==18){return getWeek19();}
	if (i==19){return getWeek20();}
	if (i==20){return getWeek21();}
	if (i==21){return getWeek22();}
	if (i==22){return getWeek23();}
	if (i==23){return getWeek24();}
	if (i==24){return getWeek25();}
	if (i==25){return getWeek26();}
	if (i==26){return getWeek27();}
	if (i==27){return getWeek28();}
	if (i==28){return getWeek29();}
	if (i==29){return getWeek30();}
	if (i==30){return getWeek31();}
	if (i==31){return getWeek32();}
	if (i==32){return getWeek33();}
	if (i==33){return getWeek34();}
	if (i==34){return getWeek34();}
	if (i==35){return getWeek36();}
}

//find this weeks points
function getAllPoints(x){
	var playersPicks = getPlayersPicks();
	var pointTotal =0;
	var step;
	//20 is the max number of weeks
	for (step=0;step<20;step++){
		var temp = 1+ getRightArr(step).indexOf(playersPicks[x][step]);
		pointTotal = temp + pointTotal;
	}
	return pointTotal;
}
//find this weeks wins
function getAllWins(x){
	var playersPicks = getPlayersPicks();
	var totalWins = 0;
	var step;
	//20 is the max number of weeks
	for (step=0;step<20;step++){
		var temp2 = 1+ getRightArr(step).indexOf(playersPicks[x][step]);
		if(temp2 ==1){
			totalWins = totalWins +1;
		}
	}
	return totalWins;
}

/*
//find last weeks points
function getLastAllPoints(x){
	var playersPicks = getPlayersPicks();
	var pointTotal =0;
	var step;
	for (step=0;step<playersPicks.length;step++){
		var temp = 1+ getRightArr(step).indexOf(playersPicks[x][step]);
		pointTotal = temp + pointTotal;
	}
	return pointTotal;
}
//find last weeks wins
function getLastAllWins(x){
	var playersPicks = getPlayersPicks();
	var totalWins = 0;
	var step;
	for (step=0;step<17;step++){
		var temp2 = 1+ getRightArr(step).indexOf(playersPicks[x][step]);
		if(temp2 ==1){
			totalWins = totalWins +1;
		}
	}
	return totalWins;
}
*/

 function getNumberOfPicks(weeknum){
  	var playerNames = getPlayersName();
  	var fullpicks=getPlayersPicks();
  	weeknum=weeknum-1;
  	var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  	//add Alltel Picks
  	for(var person = 0; person < playerNames.length; person++){
  		var temp = fullpicks[person][weeknum];
  		arr[temp]=arr[temp] +1;
	}
  	return arr;
}
	//this is to send the week number to results so that you dont have to change it every week
	//to check what week it is
	function getWeekNumber(){
		var week;
		week = getWeek36();
		if(week[0]!=0){return 35;}
		week = getWeek35();
		if(week[0]!=0){return 34;}
		week = getWeek34();
		if(week[0]!=0){return 33;}
		week = getWeek33();
		if(week[0]!=0){return 32;}
		week = getWeek32();
		if(week[0]!=0){return 31;}
		week = getWeek31();
		if(week[0]!=0){return 30;}
		week = getWeek30();
		if(week[0]!=0){return 29;}
		week = getWeek29();
		if(week[0]!=0){return 28;}
		week = getWeek28();
		if(week[0]!=0){return 27;}
		week = getWeek27();
		if(week[0]!=0){return 26;}
		week = getWeek26();
		if(week[0]!=0){return 25;}
		week = getWeek25();
		if(week[0]!=0){return 24;}
		week = getWeek24();
		if(week[0]!=0){return 23;}
		week = getWeek23();
		if(week[0]!=0){return 22;}
		week = getWeek22();
		if(week[0]!=0){return 21;}
		week = getWeek21();
		if(week[0]!=0){return 20;}
		week = getWeek20();
		if(week[0]!=0){return 19;}
		week = getWeek19();
		if(week[0]!=0){return 18;}
		week = getWeek18();
		if(week[0]!=0){return 17;}
		week = getWeek17();
		if(week[0]!=0){return 16;}
		week = getWeek16();
		if(week[0]!=0){return 15;}
		week = getWeek15();
		if(week[0]!=0){return 14;}
		week = getWeek14();
		if(week[0]!=0){return 13;}
		week = getWeek13();
		if(week[0]!=0){return 12;}
		week = getWeek12();
		if(week[0]!=0){return 11;}
		week = getWeek11();
		if(week[0]!=0){return 10;}
		week = getWeek10();
		if(week[0]!=0){return 9;}
		week = getWeek9();
		if(week[0]!=0){return 8;}
		week = getWeek8();
		if(week[0]!=0){return 7;}
		week = getWeek7();
		if(week[0]!=0){return 6;}
		week = getWeek6();
		if(week[0]!=0){return 5;}
		week = getWeek5();
		if(week[0]!=0){return 4;}
		week = getWeek4();
		if(week[0]!=0){return 3;}
		week = getWeek3();
		if(week[0]!=0){return 2;}
		week = getWeek2();
		if(week[0]!=0){return 1;}
		week = getWeek1();
		if(week[0]!=0){return 0;}
		return "bad error look at getWeekNumber in arr.js";
	}