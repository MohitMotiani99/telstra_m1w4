function restoreString(s: string, indices: number[]): string {
    let ans:string[] = new Array(s.length)
    for(let i:number=0;i<indices.length;i++)
        ans[indices[i]]=s[i]
    return ans.join('')
}