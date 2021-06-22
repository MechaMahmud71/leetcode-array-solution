const max=(arry)=>{
  let max=arry[0];
  for (let i=1;i<arry.length;i++){
    if(arry[i]>max){
      max=arry[i]
    }  
  }

  return max;
  
}
  
const kidsWithCandies=(candies,extraCandies)=>{
  let maxCandies=max(candies);
  
  let finalArry=[];
  for(let i=0;i<candies.length;i++){
    finalArry.push((candies[i]+extraCandies)>=maxCandies);
  }

  return finalArry; 
}

const solution=kidsWithCandies([12,1,12],10);

console.log(solution)