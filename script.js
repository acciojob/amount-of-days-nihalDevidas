//your JS code here. If required.
function leapYear(year){
	 // leap year if perfectly divisible by 400
   if (year % 400 == 0) {
       return true;
   }
   // not a leap year if divisible by 100
   // but not divisible by 400
   else if (year % 100 == 0) {
      return false;
   }
   // leap year if not divisible by 100
   // but divisible by 4
   else if (year % 4 == 0) {
      return true;
   }
   // all other years are not leap years
   else {
      return false;
   }
}

function daysOfAYear(year){
	if(leapYear(year)){
		return "366";
	}
	else{
		return "365";
	}
}

let y = parseInt(prompt()); 
alert(daysOfAYear(y));


