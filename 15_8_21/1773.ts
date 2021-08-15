function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let cnt:number=0
    
    for(let i:number=0;i<items.length;i++){
        if(ruleKey=='type' && ruleValue==items[i][0])
            cnt++
        else if(ruleKey=='color' && ruleValue==items[i][1])
            cnt++
        else if(ruleKey=='name' && ruleValue==items[i][2])
            cnt++
    }
    return cnt
};