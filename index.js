function scuberGreetingForFeet(someValue){
  let result
  if (someValue>2500)
    return "No can do."
  else if (someValue>2000)
    return "I will gladly take your thirty bucks."  
  else if (someValue>400)
    return "That will be twenty bucks."
  else if (someValue<=400)
    return "This one is on me!"
  // Write your code here!
}

function ternaryCheckCity(city){
  return city==='NYC' ? "Ok, sounds good."
  :  "No go.";
  //(city=`NYC` ? 'No go.' : 'Ok, sounds good.')
}

function switchOnCharmFromTip(tip){
switch (tip){
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.'
    break;
  default:
    return 'Bye.';
  // Write your code here!
  }
}
