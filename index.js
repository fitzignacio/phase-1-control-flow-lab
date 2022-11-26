function scuberGreetingForFeet(someValue){
   // Write your code here!
   let result;
    if (someValue <= 400) {
      result = 'This one is on me!';
    } else if (400 < someValue && someValue <= 2000) {
      result = 'That will be twenty bucks.';
    } else if (someValue > 2000 && someValue <= 2500) {
      result = 'I will gladly take your thirty bucks.';
    } else if (someValue >2500) {
      result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  const result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  
  return result;
}

function switchOnCharmFromTip(generosity){
  // Write your code here!
  let results;
  if (generosity === 'generous') {
      results = 'Thank you so much.';
  } else if (generosity === 'not as generous') {
      results = 'Thank you.';
  } else if (generosity === 'thanks for everything') {
      results = 'Bye.';
  }
  return results
}