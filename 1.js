
const twoSum=(nums,target)=>{
  let i=0;j=0;
  for(i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
      if(nums[i]+nums[j]===target){
        return [i,j]
      }
      
    }
  }
  
}
const solution=twoSum([3,3],6);
console.log(solution)