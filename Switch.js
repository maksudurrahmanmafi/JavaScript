let day;
var date = new Date().getDay();
date =(date+1)%7;
switch(date){
    case 0:
      return  console.log("Saturday");
    case 1:
        return console.log("Sunday");
    case 2:
      return  console.log("MonDay");
    case 3:
        return console.log("TuesDay");
    case 4:
      return  console.log("WednessDay");
    case 5:
        return console.log("ThusDay");

    default:
        return console.log("Friday");
        
          
        
}