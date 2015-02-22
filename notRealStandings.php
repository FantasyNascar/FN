<!DOCTYPE html>
<html xmlns = "http://www.w3.org/1999/xhtml">
<?php 
	session_start();
	//ini_set('display_errors', 'On');
	//error_reporting(E_ALL | E_STRICT);
?>

<head>
<link rel="stylesheet" type="text/css" href="Format.css">
<meta charset="utf-8">
<title> Projected Standings 2015</title>
<script src="arr.js" type="text/javascript"></script>
<script src="home.html" type="text/javascript"></script>

</head>
<body>
	<div class = "header"></div>
	<a href="home.html"  class="bf_button"><span>Home</span></a>
	<a href="results.html"  class="bf_button"><span>Results</span></a>
	<a href="standings.html"  class="bf_button"><span>Standings</span></a>
	<a href="standingsGraph.html"  class="bf_button"><span>Standings Graph</span></a>
	<a href="proStandings.html"  class="bf_button"><span>Projected Standings</span></a>
	<a href="chat.html"  class="bf_button"><span>Chat</span></a>
	</br>
   </br>

<div id="triLeft">

		<script>
		var i;
		var driverName=getDriverName();
		var scoreArr=[0,0,0,0,0,0,0,0,0,0,0];
		var winArr=[0,0,0,0,0,0,0,0,0,0,0,0];
		var placeArr= [0,0,0,0,0,0,0,0,0,0,0,0];
   		var realStandingRankings=[0,0,0,0,0,0,0,0,0,0,0,0];
   		var proStandingRanking=[0,0,0,0,0,0,0,0,0,0,0,0];
		var place=getPlaces();
		var playersName=getPlayersName();
		var numberOfWeeks=getWeekNumber();
		var fullpicks=getPlayersPicks();
		var driverName=getDriverName();
		var weeksNumber= getWeekNumber();

		var driverNameForAddScore=["0","0","0","0","0","0","0","0","0","0","0","0"];
   		var usedPeople=[0,0,0,0,0,0,0,0,0,0,0,0];


   		//to get the numbers on each driver that i will points too
   		var arrSlot=0;
   			for(var x = 0; x< 10; x++){
   				var carNumber=fullpicks[x][weeksNumber+1];
   				if(usedPeople.indexOf(carNumber)==-1){
   					usedPeople[arrSlot]=carNumber;
   					driverNameForAddScore[arrSlot] = fullpicks[x][weeksNumber+1];
   					arrSlot ++;
   				}	
			}



	
		//find point total
		for (i=0;i<playersName.length;i++){	
			scoreArr[i]=getAllPoints(i);
			winArr[i]=getAllWins(i);
		}
		</script><h1>Current Standings</h1><script>
		var nameArr =getPlayersName();
		var slot;
		
		document.write('<table border="1">');
		//header
		document.write('<tr>');
  		document.write('<th>' + 'Place' + '</th>');
  		document.write('<th>' + 'Team' + '</th>');
  		document.write('<th>' + 'Points' + '</th>');
  		document.write('<th>' + 'From First'+ '</th>');
  		document.write('<th>' + 'Wins' + '</th>');
  		document.write('<th>' + 'Next Week Picks' + '</th>');
  		//document.write('<th>' + '+/- from Real Standings' + '</th>')
   		
   		document.write('</tr>');
   		var firstPoint = Math.min.apply(Math,scoreArr);
   		
   		for (i=0;i<nameArr.length;i++){
   			slot = scoreArr.indexOf(Math.min.apply(Math,scoreArr));
			document.write('<tr>');
			placeArr[i]=scoreArr[slot];
			var a = placeArr.indexOf(scoreArr[slot]);
			var playersPoints =scoreArr[slot];
			realStandingRankings[slot]=a+1;
			document.write('<td id="placeCol">' + place[a] + '</td>');
	  		document.write('<td id="row2">' + nameArr[slot] + '</td>');
	  		document.write('<td id="row2">' + scoreArr[slot] + '</td>');
	  		var fromFirst = firstPoint-scoreArr[slot];
	  		document.write('<td id="row2">' + fromFirst + '</td>');
	  		document.write('<td id="row2">' + winArr[slot] + '</td>');
	  		
	  		
	  		document.write('<td id="row3">' + driverName[driverName.indexOf(fullpicks[slot][numberOfWeeks+1])+1]+ '</td>');
	  		

	  		document.write('</tr>');
	  		scoreArr[slot] = 1000000;

  		}
   		document.write('</table>');
   		if (showStandings==1){
   			document.write(thisStanding);
   		}



	</script>
	
		<form action="proStandings.html" method="get">
          		<button id="submit" > Go Back </button>
         	</form> 

</div>


<div id="triRight">
  	
		<script>
		var i;
		var driverName=getDriverName();
		var scoreArr=[0,0,0,0,0,0,0,0,0,0,0,0];
		var winArr=[0,0,0,0,0,0,0,0,0,0,0,0];
		var placeArr= [0,0,0,0,0,0,0,0,0,0,0,0];
   		var thisStanding=[0,0,0,0,0,0,0,0,0,0,0,0];
		var place=getPlaces();
		var playersName=getPlayersName();
		var numberOfWeeks=getWeekNumber();
		var fullpicks=getPlayersPicks();
		var driverName=getDriverName();
		var weeksNumber= getWeekNumber();

		var driverNameForAddScore=["0","0","0","0","0","0","0","0","0","0","0","0"];
   		var usedPeople=[0,0,0,0,0,0,0,0,0,0,0,0];


   		//to get the numbers on each driver that i will points too
   		var arrSlot=0;
   			for(var x = 0; x< 10; x++){
   				var carNumber=fullpicks[x][weeksNumber+1];
   				if(usedPeople.indexOf(carNumber)==-1){
   					usedPeople[arrSlot]=carNumber;
   					driverNameForAddScore[arrSlot] = fullpicks[x][weeksNumber+1];
   					arrSlot ++;
   				}	
			}



		</script>
		<h1>ProjectStandings</h1>
		<?php
			$driverNumber= array();
			$driverPoint=array();
			$varNames = array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o");
			$varSecondNames = array("aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo");
			$numberOfDrivers=$_GET["numberOfDrivers"];
			for ($i=0; $i < $numberOfDrivers; $i++) { 
				$temp = $_GET[$varSecondNames[$i]];
				$driverNumber[$i]=$temp;
				$temp2 = $_GET[$varNames[$i]];
				if($temp2==""){
					$temp2="0";	
				}
				$driverPoint[$i]=$temp2;
			}	
		?>
		<script>
		var driverNumber= <?php echo json_encode($driverNumber); ?>;
		var driverPoint=<?php echo json_encode($driverPoint); ?>;
		
		//for(var c=0; c<arrSlot;c++){
		//	document.write(driverNumber[c]+" -> "+driverPoint[c]+";   ");
		//}
		
		//find point total
		for (i=0;i<playersName.length;i++){	
			scoreArr[i]=getAllPoints(i);
			winArr[i]=getAllWins(i);
		}


		//this will add the projected points to the Score and Win array
		for(var z=0;z<playersName.length;z++){
			var playerPick=fullpicks[z][numberOfWeeks+1];
			var slot = driverNumber.indexOf(playerPick);
			scoreArr[z]=scoreArr[z]+parseInt(driverPoint[slot]);
			if(parseInt(driverPoint[slot])==1){
				winArr[z]++;
			}

			//document.write(slot+", ");
		}


			
		var nameArr =getPlayersName();
		var slot;
		
		document.write('<table border="1">');
		//header
		document.write('<tr>');
  		document.write('<th>' + 'Place' + '</th>');
  		document.write('<th>' + 'Team' + '</th>');
  		document.write('<th>' + 'Points' + '</th>');
  		document.write('<th>' + 'From First'+ '</th>');
  		document.write('<th>' + 'Wins' + '</th>');
  	    //document.write('<th>' + 'Next Week Picks' + '</th>');
  		document.write('<th>' + '+/- from Real Standings' + '</th>')
   		
   		document.write('</tr>');
   		var firstPoint = Math.min.apply(Math,scoreArr);
   		
   		for (i=0;i<nameArr.length;i++){
   			slot = scoreArr.indexOf(Math.min.apply(Math,scoreArr));
			document.write('<tr>');
			placeArr[i]=scoreArr[slot];
			var a = placeArr.indexOf(scoreArr[slot]);
			var playersPoints =scoreArr[slot];
			proStandingRanking[slot]=a+1;
			document.write('<td id="placeCol">' + place[a] + '</td>');
	  		document.write('<td id="row2">' + nameArr[slot] + '</td>');
	  		document.write('<td id="row2">' + scoreArr[slot] + '</td>');
	  		var fromFirst = firstPoint-scoreArr[slot];
	  		document.write('<td id="row2">' + fromFirst + '</td>');
	  		document.write('<td id="row2">' + winArr[slot] + '</td>');

	  		var lw = realStandingRankings[slot];
	  		var tw = proStandingRanking[slot];
	  		var change = lw-tw;
	  		if(lw>tw){
	  			document.write('<td id="improve">' +"+"+change + '</td>');
	  		}
	  		else if(lw<tw){
	  			document.write('<td id="deprove">' + change + '</td>');
	  		}
	  		else{
	  			document.write('<td id="row2">' + change + '</td>');
	  		}
	  		
	  		
	  		//document.write('<td id="row3">' + driverName[driverName.indexOf(fullpicks[slot][numberOfWeeks+1])+1]+ '</td>');
	  		

	  		document.write('</tr>');
	  		scoreArr[slot] = 1000000;

  		}
   		document.write('</table>');
   		if (showStandings==1){
   			document.write(thisStanding);
   		}



	</script>
  </div>

 <div id="triMiddle">

 	<script>

 	for(var x = 0; x <arrSlot;x++){
 		var driverFullName = driverName[driverName.indexOf(driverNumber[x])+1]
 		document.write( driverFullName +": "+ driverPoint[x] + "</br>");
 	}
 	</script>

	


 </div>

 


</body>
</html>
