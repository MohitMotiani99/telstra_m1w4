function balancedStringSplit(s: string): number {
    let cnt:number=0
    let r:number=0
    let l:number=0
    
    for(let i:number=0;i<s.length;i++){
        if(s[i]=='L')
            l++
        else if(s[i]=='R')
            r++
        
        if(r==l && r!=0){
            cnt++
            r=l=0
        }
    }
    if(r==l && r!=0){
        cnt++
    }
    return cnt
};