const max=(arry)=>{
  let max=arry[0];
  for (let i=1;i<arry.length;i++){
    if(arry[i]>max){
      max=arry[i]
    }  
  }

  return max;
  
} 
const maximumWealth=(arr)=>{
  // let max=0;
  let totalArr=[];
  let total=0;
  let i;
  for(i=0;i<arr.length;i++){
    let a=arr[i];
    for(let j=0; j<a.length;j++){
      total+=a[j];
    }
    totalArr.push(total);
    total=0;
  }
    return max(totalArr);
}



const solution=maximumWealth([[2,8,7],[7,1,3],[1,9,5]])

console.log(solution);