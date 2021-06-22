
const shuffle=(arr,n)=>{
  
  let finalArr=[];
  let arrOne=[];
  let arrTwo=[];
  let j=0;
  for (let i=0;i<n;i++){
    arrOne.push(arr[i]);
  }
  for (let i=n;i<2*n;i++){
    arrTwo.push(arr[i]);
  }
  for (let i=0;i<arr.length/2;i++){
    finalArr.push(arrOne[i]);
    finalArr.push(arrTwo[i]);
    
  }
  return finalArr;
}





const solution=shuffle([2,5,1,3,4,7],3);

console.log(solution);