function interpret(command: string): string {
    let res:string=''
    for(let i:number=0;i<command.length;){
        if(command[i]=='G')
        {
            res+='G'
            i++
        }
        else if(command[i]=='('){
            if(command[i+1]==')')
            {
                res+='o'
                i+=2
            }
            else{
                res+='al'
                i+=4
            }
        }
    }
    return res
};