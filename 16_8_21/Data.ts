function getData<Type>(a:Type):Type{
    return a
}

var a=getData<string>('Hello World')
console.log(a)
var b:number=getData<string>('hello')
//gives error as b is number
console.log(b)

class Data<Type>{
    t:Type
    getData(){
        return this.t
    }
    setData(t:Type){
        this.t=t
    }
}

var d=new Data<number>()
d.setData(100)
console.log(d.getData())

var d=new Data<string>()
d.setData("hey")
console.log(d.getData())

