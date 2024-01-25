function fib(n){

  console.log(`n= ${n}`);

  if(n <= 1){
    console.log(`return`);
    return n;
  }
  
  let oneback = fib(n-1);
  let twoback = fib(n-2);

  console.log(`sum = ${oneback + twoback}`);
  return oneback + twoback

}


function dec(n, caller){
  if(n <= 1){
    // console.log(`${caller} returning ${n}`);
    return n;
  }
  // console.log(n);
  // console.log(`${caller}--n = ${n}`)
  let outputA = dec(n-1,'A');

  // console.log(`${caller}----n = ${n}`)
  let outputB = dec(n-2,'B');

  
  // console.log(`${caller} iterating - ${(outputA + outputB)}`);
  // console.log(`${caller} final ${n}`);
  return outputA + outputB;
}


console.log(dec(6,'original')); // prints 5
console.log('complete');

// 0,1,1,2,3,5,8,13,21