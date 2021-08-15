function createTargetArray(nums: number[], index: number[]): number[] {
    let res:number[]=[]
    for(let i:number=0;i<nums.length;i++)
        res.splice(index[i],0,nums[i])
    return res
};