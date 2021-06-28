const selectonSort=(a,n)=>{
  let i,j,index,temp;
  for(i=0;i<n-1;i++){
    index=i;
    for(j=i+1;j<n;j++){
      if(a[index]>a[j]){
        index=j;
      }
    }
    if(index!==i){
      temp=a[i];
      a[i]=a[index];
      a[index]=temp;
    }
  }
  return a;
}

const solution=selectonSort([3,5,7,2,1,4],6);
console.log(solution);