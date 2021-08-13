var myobj = {
    name: "peter",
    myfunc: function () {
        console.log(this.name);
    }
};
myobj.myfunc();
