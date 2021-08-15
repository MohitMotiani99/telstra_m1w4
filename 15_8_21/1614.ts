function maxDepth(s: string): number {
    let maxval:number=0
    let val:number=0
    
    for(let i:number=0;i<s.length;i++){
        if(s[i]=='('){
            val++
            maxval=Math.max(maxval,val)
        }
        else if(s[i]==')')
            val--
    }
    return Math.max(val,maxval)
};