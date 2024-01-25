let strings = ["flower", "floor", "flash"];
let prefix = '';

var longestCommonPrefix = function(strs) {
  
  let firstwordChars = strs[0].split('');

  for(let i = 0; i < firstwordChars.length; i++){
    prefix += firstwordChars[i];
    
    let allMatch = strs.every(matches);

    if(!allMatch){
        prefix = prefix.substring(0,prefix.length - 1);
        return prefix;
        //break;
    }
  };
};

function matches(element){
  return element.substring(0,prefix.length) == prefix;
}

// console.log(longestCommonPrefix(strings));

var isValid = function(s) {
  let charMap = new Map([
      ['(', ')'], 
      ['{', '}'], 
      ['[', ']']
  ])

  if(s.length % 2 != 0) return false;

  let midPoint = s.length / 2;
  let firstHalf = s.split('').splice(0, midPoint);
  let lastHalf = s.split('').splice(midPoint);

  lastHalf.reverse();

  for (let i = 0; i < firstHalf.length; i++){
      if(charMap.get(firstHalf[i]) != lastHalf[i]){
          return false;
      }
  }

  return true;
};

// console.log(isValid('(}'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(){}'));


let counter = 0


var isValid2 = function(s) {

    let charMap = new Map([
      ["(", ")"], 
      ["{", "}"], 
      ["[", "]"]
    ]);

    if (s.length % 2 != 0) return false
    
    if ([...charMap.values()].includes(s[0])) return false
    
    if ([...charMap.keys()].includes(s[s.length - 1])) return false
    
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        if([...charMap.keys()].includes(s[i])) {
            stack.push(s[i])
        } else if (charMap.get(stack.pop()) !== s[i]) {
            return false
        }
        
    }
    return stack.length === 0
  
};

// console.log(isValid2('(}'));
// console.log(isValid2('()[]{}'));
// console.log(isValid2('(){}'));
// console.log(isValid2('({})'));
// console.log(isValid2('{}({})'));


var removeDuplicates = function(nums) {

  let prevNum;
  let newCounter = 0;

  for(let i = 0; i < nums.length-1; i++){
      if(i == nums.length) break;

      if(nums[i] == prevNum){
        nums = [...nums.slice(0, i), ...nums.slice(i+1,nums.length)];
        i--;
      }else{
        prevNum = nums[i];
      }
  }
  nums[newCounter++] = nums[nums.length - 1];

  return nums;
};


// console.log(removeDuplicates([1,1,1,2]));
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// console.log(removeDuplicates([1,1,2]));

var removeInPlace = function(nums){

  let newCounter = 0;

  for(let i = 0; i < nums.length-1; i++){

      if(nums[i] != nums[i+1])
        nums[newCounter++] = nums[i];
  }

  nums[newCounter++] = nums[nums.length - 1];

  return newCounter;
}



// console.log(removeInPlace([1,1,1,2]));
// console.log(removeInPlace([0,0,1,1,1,2,2,3,3,4]));
// console.log(removeInPlace([1,1,2]));


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let writer = 0, n = nums.length;

  for(let reader = 0; reader < n; reader++){

      if(val !== nums[reader]){
        nums[writer] = nums[reader];
        writer++;
      }

      // console.log("reader - " + reader + " writer - " + writer +": " + nums);
  }

  return writer;
};

// let newNums = removeElement([0,1,2,2,3,0,4,2],2);
// console.log(newNums);

function diagonalDifference(arr) {
  // Write your code here
  let ltrc = 0;
  let rtlc = arr.length - 1;
  let ltr = 0;
  let rtl = 0;
  for(ltrc; ltrc < arr.length; ltrc++){
      console.log(`${ltr}:${rtl}`);
      ltr+= arr[ltrc][ltrc];
      rtl+= arr[ltrc][rtlc--];
  }
  
  let diff = ltr - rtl;
  return Math.abs(diff);
}  



// let arr = [[11, 2, 4],[4, 5, 6],[10, 8, -12]]
// console.log(diagonalDifference(arr));


function miniMaxSum(arr) {
  // Write your code here
  let min = 0;
  let max = 0;
  
  for(let i = 0; i < arr.length; i++){
      // let val = arr.reduce((acc,next) => {
      //     return (arr[i] != next) ? acc+next : acc
      // }, null);
      
      let newArr = [...arr.slice(0,i), ...arr.slice(i+1, arr.length)];
      let val = newArr.reduce((acc, next) => acc+=next);
      if(i > 0){
          min = (min > val) ? val : min;
          max = (max < val) ? val : max;
      }else{
          min = val;
          max = val;
      }
  }
  
  console.log(`${min} ${max}`);
}

// // let arr = [1,2,3,4,5]
// let arr = [5,5,5,5,5]
// console.log(miniMaxSum(arr));

function birthdayCakeCandles(candles) {
  // Write your code here
  
  candles.sort((a, b) => parseInt(a) - parseInt(b)).reverse();
  let tallest = candles[0];
  let len = candles.filter((candle) => candle == tallest).length;
  
  return len;
}
// let arr = [3,2,1,3];
// let arr = [999];
// for(let i = 0; i < 9999; i++){
//   arr.push(1000);
// }
// console.log(birthdayCakeCandles(arr));


// email: admin@0000ff.co	
// pw: b3ttercl0uD

function timeConversion(str){
  let isAm = str.indexOf('AM') > 0;
  let amPm = (isAm) ? str.split('AM') : str.split('PM');
  let timeParts = amPm[0].split(':');

  if(isAm && timeParts[0] == '12'){
    timeParts[0] = '00'
  }else if (!isAm){
    let hours = parseInt(timeParts[0]);
    hours = (hours == 12) ? 12 : 12 + hours;
    timeParts[0] = ('00' + hours).substring(2);
  }

  return timeParts.join(':')
}
// console.log(timeConversion('05:00:00AM'));
// console.log(timeConversion('12:00:00AM'));
// console.log(timeConversion('05:00:00PM'));


function roundGrades(grades){
  let adjusted = grades.map((grade) => {
    if(grade >= 38){
      let diff = grade % 5;
      if( diff >= 3){
        return grade+= (5-diff);
      }
    }
    return grade;
  })

  return adjusted;
}

// console.log(roundGrades([4,73,67,38,33]))


function fruitCounter(s, t, a, b, apples, oranges){
  
  let totalApples = 0;
  let totalOranges = 0;
  apples.forEach(apple => {
    totalApples += ((apple + a) >= s && (apple + a) <= t) ? 1 : 0;
  })

  oranges.forEach(orange => {
    totalOranges += ((orange + b) >= s && (orange + b) <= t) ? 1 : 0;
  })

  console.log(totalApples);
  console.log(totalOranges);
}

// fruitCounter(7,11,5,15,[-2,2,1], [5,-6])

function jumpingShow(x1,v1,x2,v2){
  let areSame = false;
  counter = 10000;
  while(!areSame && counter-- > 0){
    areSame = ((x1+=v1) == (x2+=v2));
  }

  return (areSame) ? 'YES' : 'NO';
}

// console.log(jumpingShow(0,3,4,2));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// var findMaxAverage = function(nums, k) {
//   let sum = 0;
//     for(let i =0;i<k;i++){
//       sum+= nums[i];
//     }
//     maxSum = sum;
//     let i =0;
//     let j = k;
//     while (j<nums.length){
//       sum -=nums[i];
//       i++;
//       sum+=nums[j];
//       j++;
//       maxSum = Math.max(maxSum,sum);
//     }
//     return maxSum/k;
//   };
var findMaxAverage = function(nums, k) {
  let ans = sum = 0;

  for(left = 0; left < k; left++){
    sum += nums[left];
    ans = sum;
  }

  for(let right = 0; right + k <= nums.length; right++){
    
    sum = sum + nums[right+k] - nums[right];

    ans = Math.max(sum, ans);
  }

  return ans / k;
};

// findMaxAverage([1,12,-5,-6,50,3],4)

var longestOnes = function(nums, k) {
  let left = right = maxLen = flips = 0;
  let startIndex = 0;
  let start = false;

  if(nums.length === k) return k;
  while(!start && startIndex <= nums.length-1){
    start = nums[startIndex] > 0;
    startIndex++;
  }

  if(!start) return 0;

  // main loop through nums
  while(right < nums.length){
    flips += (nums[right] === 0) ? 1 : 0;

    //limit of flips has been reached
    if(flips > k){
      flips -= (nums[left]===0) ? 1 : 0;
      left++;
    }
    
    right++;
  }
  
  return right - left;
};

// console.log(longestOnes([0,0,0,1],4)); // 4
// console.log(longestOnes([0,0,0,0],0)); // 0
// console.log(longestOnes([0,0,1,1,1,0,0],0)); // 3
// console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)); // 6
// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3)); //10

