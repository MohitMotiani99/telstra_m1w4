var myarray = ['peter', 'sam', 'mathew', 12];
console.log(function () {
    for (var i = 0; i < myarray.length; i++)
        return myarray[i];
});
console.log(myarray[0]);
console.log(myarray[3]);
myarray = [];
myarray.push('peter');
myarray.push('sam');
console.log(myarray.pop());
//tuple
var mytuple = [];
mytuple.push(12);
mytuple.push('peter');
mytuple.push(true);
mytuple.push({ name: "mogit", num: 2 });
console.log(mytuple.pop());
