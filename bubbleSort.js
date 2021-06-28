const bubbleSort=(a,n)=>{
  let temp;
  for (let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      if(a[i]>a[j]){
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
      }
    }
  }
  return a;
}

// const solution=bubbleSort([10,5,2,8,7],5);
const solution=bubbleSort([3,5,7,2,1,4],6);
console.log(solution);