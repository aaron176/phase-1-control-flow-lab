function scuberGreetingForFeet(distance){
  // Write your c let greode here!

  if(distance === 0){
    return "hello";
  }
  else if(distance > 0 && distance < 5){
    return "hey";
  }
  else {
    return "by"
  }

  
}

function ternaryCheckCity(destination){
  // Write your code here!
  return destination === "hawai"? 'lets go' : 'never' ;

}

function switchOnCharmFromTip(height){
  // Write your code here!
  switch(height){
    case 72:
      return 'tall';
      case 70:
      return 'average';
      case 68:
        return 'below average';
        default:
          return 'short'

  }
}
console.log(scuberGreetingForFeet(2))