var myobj={
    name:"peter",
    myfunc:function(){
        console.log(this.name)
    }
    myfunc2:()=>{
        console.log(this.name)
    }
}

myobj.myfunc()
myobj.myfunc2()