function maxProductDifference(nums: number[]): number {
    nums.sort((a,b)=>a-b)
    //console.log(nums)
    let n:number=nums.length
    return nums[n-1]*nums[n-2]-nums[0]*nums[1]
};