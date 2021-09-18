// let a=20;//illigal shadowing
// {
//     var  a=20;
// }
// var a=20;
// {
//     let a=20;
// }
//var is function scoped
let a=90;
function x(){
    var a=10;
}
console.log(a);