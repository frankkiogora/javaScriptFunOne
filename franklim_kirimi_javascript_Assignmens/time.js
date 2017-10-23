var HOUR =8;
var MINUTES= 15;
var PERIOD="Am"
function displayTime(HOUR,MINUTES,PERIOD){
    if(HOUR < 12 && PERIOD === "AM"){
            console.log('its', HOUR, 'in the morning');
						
     }else if(HOUR > 12	&& PERIOD ==="PM"){
		 console.log('its ', HOUR, 'in the evening');
		 }else{
		console.log('just after the ', HOUR, ' . ');
		 }
		 if(MINUTES <=30){
    console.log('just after ' + HOUR + '.');
    }
    HOUR+=1;
    console.log('almost ' + HOUR + ' .');
    
}
  console.log(displayTime(HOUR,MINUTES,PERIOD));