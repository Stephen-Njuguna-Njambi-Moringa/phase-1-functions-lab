// Code your solution in this file!

//returns the number of blocks given a value
function distanceFromHqInBlocks (blockValue) {
  if (blockValue<42){
    return(42-blockValue);
  }
  else {
  return(blockValue-42);
}
}


function distanceFromHqInFeet (blockValue) {
  return distanceFromHqInBlocks(blockValue)*264;
}

function distanceTravelledInFeet(x,y){
  if (y>x){
    return((y-x)*264);
  }
  else
    return((x-y)*264);
}


function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance<= 400){
    return 0;
  }
  if (distance>=400 && distance<=2000){
    return (distance-400)* 0.02;
  }
  else if(distance>=2000&& distance<=2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
}


