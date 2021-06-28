const restoreString=(s,arr)=>{
  const stringArr=s.split('');
  const finalArr=[];
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<stringArr.length;j++){
      console.log(j);
      j=arr[i];
      finalArr.push(stringArr[j]);
      console.log(j);
      break;
    }
    // console.log(j);
  }
  return finalArr.join('');
}

const solution=restoreString("aaiougrt",[4,0,2,6,7,3,1,5]);
console.log(solution)