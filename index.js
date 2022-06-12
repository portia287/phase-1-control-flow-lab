function scuberGreetingForFeet(lydia) {
  if (lydia <= 400){
    return "This one is on me!"

  } else if (lydia > 2000 && lydia <= 2500){
    return "I will gladly take your thirty bucks.";
  } 
  else {
    return "No can do." }
}
  
  



function ternaryCheckCity(city){
  const Putin = city === "NYC" ? "Ok, sounds good." : "No go.";
  return Putin;


  
}

function switchOnCharmFromTip(greeting){
  switch (greeting){
    case "generous":
    return "Thank you so much.";
    break;
    case "not as generous":
      return "Thank you." ;
      break;
      default: return "Bye." 
  }
  
}