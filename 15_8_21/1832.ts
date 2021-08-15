function checkIfPangram(sentence: string): boolean {
    var arr:number[]=new Array(26)
    for(let i:number=0;i<26;i++)
        arr[i]=0
    for(let i:number=0;i<sentence.length;i++)
        arr[sentence[i].charCodeAt(0)-97]++
    for(let i:number=0;i<26;i++){
        if(arr[i]==0)
            return false
    }
    return true
};