function twoSum(nums, target) {
  const hashTable = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (hashTable[complement] !== undefined) {
      return [hashTable[complement], i];
    }
    
    hashTable[nums[i]] = i;
  }
  
  return [];
}
//using hastable
