function tailsNeverFails(){
  let tails = 0;
  
  while (Math.random( ) >= 0.00000001 ){
    tails++
  }
  
  console.log(`You got ${tails} tails in a row!`);
}

tailsNeverFails();