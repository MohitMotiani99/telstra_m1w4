function decompressRLElist(nums: number[]): number[] {
    let res:number[]=[]
    for(let i:number=0;i<nums.length;i+=2){
        for(let j:number=0;j<nums[i];j++)
            res.push(nums[i+1])
    }
    return res
};