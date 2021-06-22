const decompressRLElist=(arr)=>{
  let start=0;
  let end=1;
  let finalArr=[];

  while(end<arr.length){
    for(let i=start; i<end;i++){
      let k=0;
      while(k<arr[start]){
        finalArr.push(arr[end])
        k++;
      }
    }
    start=end+1;
    end=start+1;
    
  }
  

  return finalArr;
  
  
}

const solution=decompressRLElist([1,1,2,3])

console.log(solution);