// var myfun=()=>{
//     console.log('hello world')
// }
// myfun()
var calcme = function (callme) {
    callme(12, 23);
};
calcme(function (a, b) {
    console.log(a);
    console.log(b);
});
