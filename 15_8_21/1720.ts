function decode(encoded: number[], first: number): number[] {
    let res:number[]=[]
    res[0]=first
    for(let i:number=1;i<encoded.length+1;i++){
        res[i]=res[i-1]^encoded[i-1]
    }
    return res
};