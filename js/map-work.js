let map = new Map([
  [3,"three"],
  [1,"one"],
  [2,"two"],
]);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// map = new Map([...map.entries()].sort((a, b) => a[1].length - b[1].length));
// let keys = [...map.keys()];

// console.log(keys);





// Write your code here
function mapper(s){
  let hash = new Map()
  for(let i=0; i< s.length; i++){
      let counter = 1;
      if(hash.get(s[i])){
          counter = hash.get(s[i]);
          counter++;
      }
      hash.set(s[i], counter);
  }
  
  let uniques = [];
  hash.forEach((val,key)=>{
      if(val == 1){
        uniques.push(key);
      }
  });
  // console.log(uniques);
}

// console.log(mapper('falafal'));


function getProfit(price){
    let totalProfit = 0;
    let sortedPrices = price.sort();
    let highestPrice = price[price.length - 1];
    for(let i=0;i< price.length-1; i++){
        if(price[i+1] > price[i]){
            totalProfit -= price[i]
        }else if(price[i+1] < price[i]){
            totalProfit += price[i];
        }
    }
    
    return totalProfit;
}

// console.log(getProfit([3]));