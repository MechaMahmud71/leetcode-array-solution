const smallerNumbersThanCurrent=(arr)=>{
  let i=0,j=0;
  let finalArr=[];
  let total=0;
  while(j<arr.length){
    for (i=0;i<arr.length;i++){
      if(arr[j]>arr[i]){
        total+=1;
      }
    }
    j++;
    finalArr.push(total);
    total=0;
  }
  return finalArr;
}


const solution=smallerNumbersThanCurrent([8,1,2,2,3]);

console.log(solution)
