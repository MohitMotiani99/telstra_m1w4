function sortSentence(s: string): string {
    let arr:string[]=s.split(' ')
    //console.log(arr)
    let res:string[]=[]
     for(let i:number=0;i<arr.length;i++){
         res[arr[i][arr[i].length-1].charCodeAt(0)-49]=arr[i].substring(0,arr[i].length-1)
     }
    return res.join(' ')
};