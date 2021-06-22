const runningSum=(arr)=>{
  let finalArr=[];
  finalArr.push(arr[0])
  let total=arr[0];
  for(let i=1;i<arr.length;i++){
    total+=arr[i];
    finalArr.push(total);
    console.log(finalArr)
  }
}

runningSum([1,2,3,4]);