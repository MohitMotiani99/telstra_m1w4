function subtractProductAndSum(n: number): number {
    let sum:number=0
    let prod:number=1
    
    while(n!=0){
        sum+=(n%10)
        prod*=(n%10)
        //console.log(sum+"   "+prod)
        n=Math.floor(n/10)
    }
    //console.log(prod)
    //console.log(sum)
    return prod-sum
};