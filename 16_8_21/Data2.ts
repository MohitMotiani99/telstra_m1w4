class Data2<Type1,Type2>{
    t1:Type1
    t2:Type2

    constructor(t1:Type1,t2:Type2){
        this.t1=t1
        this.t2=t2
    }
    public get(){
        console.log({
            "value1":this.t1,
            "value2":this.t2,
            "type1":typeof(this.t1),
            "type2":typeof(this.t2)

        })
    }
}

var d2 = new Data2<number,string>(23,"hey")
d2.get()