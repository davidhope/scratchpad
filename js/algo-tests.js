
function checkObstacle(coord, obstacles){
  let x = coord[0];
  let y = coord[1];

  for(let i = 0; i < obstacles.length; i++){
    if(obstacles[i][0] == x && obstacles[i][1] == y){
      return true;
    }
  }
  return false;
}

function getDiag(rowQ, colQ, numRows){

  let multipliers = {
    'NW': [1,-1],
    'NE': [1,1],
    'SW': [-1,-1],
    'SE': [-1,1]
  }

  let nw = [];
  let counter = 1;
  let rowCounter = rowQ;
  let multiplier = 1;
  while(rowCounter < numRows){
    nw.push([rowQ + counter, colQ + counter++]);
    rowCounter++;
  }
  return nw;
}

function queensAttack(rowCols, numObs, rowQ, colQ, obstacles){
  let poss = new Map()
  obstacles = obstacles ?? [];
  obstacles.push([rowQ, colQ]);

  for(let r = 1; r <=rowCols; r++){
    let rowPoss = [];
    for(let c = 1; c <= rowCols; c++){
      if(checkObstacle([r,c], obstacles)){
        break;
      }
      //same row, diff col
      if(rowQ == r && colQ != c){
        rowPoss.push([r,c]);
      //same col, diff row
      }else if(colQ == c && rowQ != r){
        rowPoss.push([r,c]);
      }else{
        rowPoss.push(getDiag(rowQ, colQ, rowCols))
        // if(rowQ > r && colQ > c){ // NW
        //   rowDiff = r - rowQ;
        //   colDiff = c - r;
        //   if(collDiff == c + )
        //   rowPoss.push(r,colDiff);
        // }
        //rowPoss.push([(r - rowQ) + rowQ, (c - colQ) + colQ]);
      }
    }

    poss.set(r, rowPoss);
  }

  
  return poss;
  // while
  // [][][][q] [3,3],[2,2],[1,1]
  // [][q][][] 3 - 2 - [1,4],[2,1],[2,3],[4,1],[4,3]
  // [][][][]
  // [][][][]
}

// console.log(queensAttack(4,0, 2, 2, []));jj


function solution(year) {
  let digits = year.toString().split('');

  if (digits.length < 3)
    return 1;

  leftover = parseInt(digits.slice(digits.length - 2).join(''));
  century = parseInt(digits.slice(0, digits.length - 2).join(''));

  // let century = (year < 1000 && year > 100) ? year.toString().substr(0,1) : year.toString().substr(0,2);
  // century = (year < 1000 && year > 100) ? year.toString().substr(0,1) : year.toString().substr(0,2);
  // century = parseInt(century);
  // let leftover = parseInt(year.toString().substr(-2));
  
  return (leftover > 0) ? century + 1 : century;
}

// console.log(solution(700));
// console.log(solution(701));
// console.log(solution(2000));
// console.log(solution(1898));
// console.log(solution(45));


function isPal(inputString) {
  let rc = inputString.length;
  for(let lc = 0; lc < rc--; lc++){
      if(inputString[lc] !== inputString[rc]){
          return false;
      }
  }
  return true
}

// console.log(isPal('abba'));
// console.log(isPal('abab'));


function adjacentElements(inputArray){
  let highestTotal = NaN;
  for(let i=0; i < inputArray.length-1; i++){
    highestTotal = (inputArray[i] * inputArray[i+1] > highestTotal || isNaN(highestTotal)) ? inputArray[i] * inputArray[i+1] : highestTotal;
  }

  return highestTotal;
}

// console.log(adjacentElements([3, 6, -2, -5, 7, 3]));
// console.log(adjacentElements([-23, 4, -3, 8, -12]));


function shapeArea(n){
  return Math.pow(n,2) + Math.pow(n-1,2);
  // let numSquares = 0;
  // while(n > 0){
  //     numSquares += n*n--;
  // }
  
  // return numSquares - (n-1)

  // if(n==1) return 1

  // let numSquares = 0;
  // let counter = 1;
  // while(counter <= n){
  //   numSquares += (counter == 1) ? counter : ((counter-1) * 4)
  //   counter++;
  // }

  // return numSquares;
}

// console.log(shapeArea(1)); //1
// console.log(shapeArea(2)); //5 (+4)
// console.log(shapeArea(3)); //13 (+8)
// console.log(shapeArea(4)); //25 (+12)


function consecutive(statues) {
  statues.sort((a,b) => parseInt(a)-parseInt(b));
  let totalNeeded = 0;
  for(let i = 1; i < statues.length; i++){
      if(statues[i] - statues[i-1] != 1){
          totalNeeded+= statues[i] - statues[i-1] - 1;
      }
  }
  
  return totalNeeded;
}

// console.log(consecutive([6, 2, 3, 8])); //3
// console.log(consecutive([0,1,3,10])); 

function sequenceFunc(sequence){  


  // handles 10,1,2,3
  let outOfSequence = [];

  sequence.filter((elem, index, sequence) => {
    let beforevals = sequence.slice(0,index);
    let aftervals = sequence.slice(index+1,sequence.length);

    // previous element is greater than next two so it's out of place
    if(aftervals.filter(afterval => elem >= afterval).length > 1 || 
        beforevals.filter(beforeval => elem <= beforeval).length > 1){
        // element is greater than next, but less than the one the follows, so next element is out of place
        outOfSequence.push(elem);
    }
  });
  
  
  return outOfSequence.length <= 1;
  
}
// console.log(sequenceFunc([3, 6, 5, 8, 10, 20, 15]));
// console.log(sequenceFunc([1, 1, 2, 3, 4, 4]));
// console.log(sequenceFunc([1,3,2,1]))
// console.log(sequenceFunc([10, 1, 2, 3, 4, 5]))
// console.log(sequenceFunc( [1, 2, 3, 4, 3, 6]))
// console.log(sequenceFunc([1,2,1,2]))
// console.log(sequenceFunc([1, 2, 5, 3, 5]))


function solutionSeq(sequence) {
  let outOfSequence = 0;

  for(let i = 1; i < sequence.length; i++){
    if(sequence[i] <= sequence[i-1]) {
      outOfSequence++;
      if(outOfSequence > 1) 
        return false
      if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) 
        return false
    }
  }
    
  return true
}

// console.log(solutionSeq([10, 1, 2, 3, 4, 5]))
// console.log(solutionSeq([1,2,1,2]))
// console.log(solutionSeq([1, 2, 5, 3, 5]))
// console.log(solutionSeq( [1, 2, 3, 4, 3, 6]))

function sumFromInt(n){
  return n.toString().split('').reduce((acc, elem) => acc += parseInt(elem), 0);
}

// console.log(sumFromInt(29));

const factorial = (n) => {
  let total = 1;
  while(n > 0){
    total *= n--;
  }
  return total;
}

// console.log(factorial(1));

const recFactorial = (n) => {

  if(n===0)
    return 1;
  
  return n * recFactorial(n-1);

}
// console.log(recFactorial(4));

const isPrime = (n) => {
  if(n < 2) return false;

  for(let i = 2; i < Math.ceil(n / 2); i++) {
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
// console.log(isPrime(1));
// console.log(isPrime(97));
// console.log(isPrime(6));

const isPowerOf2 = (n) => {
  
  if(n===0) return false;

  while(n > 1){
    if(n % 2 !== 0){
      return false
    }
    n = n / 2;
  }
  return true;
}

// console.log(isPowerOf2(0));
// console.log(isPowerOf2(1));
// console.log(isPowerOf2(4));
// console.log(isPowerOf2(400));

const fib = (n) => {
  let seq = [0,1];
  for(let i=2;i<n;i++){
    seq[i] = seq[i-1] + seq[i-2];
  }
  return seq;
}

const rfib = (n) => {
  if(0<=n && n<=1) return n;

  let prev1 = rfib(n-1);
  let prev2 = rfib(n-2);

  return prev1 + prev2;
}


// console.log(rfib(6))

const linearSearch = (arr, n) => {
  return arr.indexOf(n);
}

// console.log(linearSearch([1,2,3,4,5], 9));

const binarySearch = (arr, n) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  

  while(leftIndex <= rightIndex){
    let mid = Math.floor(leftIndex + rightIndex / 2);

    if(n > arr[mid] ){
      leftIndex += mid;
    }else if (n < arr[mid]){
      rightIndex -= mid;
    }

    if(mid === 0 && n !== arr[mid]) return -1;
    if (n === arr[mid]) return mid;

  }
  return -1;
  
}

// console.log(binarySearch([1,2,3,4,5], 9));
// console.log(binarySearch([1,2,3,4,5], 5));
// console.log(binarySearch([1,2,3,4,5], 0));
// console.log(binarySearch([1,2,3,4,5], 2));

const bubbleSort = (arr) => {
  let tmp;
  let hasSwap = false;
  for(let i = 1; i < arr.length; i++){
    if(arr[i-1] > arr[i]){
      hasSwap = true;
      tmp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = tmp;
    }
  }
  if(hasSwap) bubbleSort(arr);

  return arr;
}

// console.log(bubbleSort([1,-2,6,3,15,-4,10,2]));
// console.log(bubbleSort([]));

const cartesian = (arrA, arrB) => {
  let product = [];

  for(let i=0;i<arrA.length;i++){
    for(let j=0;j<arrB.length;j++){
      product.push([arrA[i], arrB[j]]);
    }
  }

  return product;
  
}

// console.log(cartesian(['a','b','c'], ['c','d','e']));


const climbStaircase = (n) => {
  if(n < 1) return 0;
  if(n === 1 || n === 2) return n;

  let n1 = climbStaircase(n-1);
  let n2 = climbStaircase(n-2);

  return n1 + n2;
}

// console.log(climbStaircase(6));

const tower = (disks, from, to, using) => {

}

// console.log(tower());

var checkIfPangram = function(sentence) {
  return new Set(sentence.split('')).size === 26;
};

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

var checkPlusOne = function(arr) {
  let total = 0;
  let s = new Set(arr);
  
  for(let i=0;i<arr.length;i++){
      if(s.has(arr[i]+1)){
          total+=1;
      }
  }
  return total;

};

console.log(checkPlusOne([1,2,3]));