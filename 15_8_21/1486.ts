function xorOperation(n: number, start: number): number {
    let ans:number=0
    for(let i:number=0;i<n;i++)
        ans^=(start+2*i)
    return ans
};