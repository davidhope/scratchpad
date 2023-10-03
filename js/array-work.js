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
console.log(removeInPlace([1,1,1,2]));
console.log(removeInPlace([0,0,1,1,1,2,2,3,3,4]));
console.log(removeInPlace([1,1,2]));