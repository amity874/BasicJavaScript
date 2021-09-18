// function x(){
//     var x=3;
//     function y(){
//         console.log(x);
//     }
//     x=100;
//     return y();
// }
//same code as above
// function x(){
//     var x=3;
//     return function y(){
//         console.log(x);
//     }
// }
//.....
// var a=x();
// console.log(x());
// a();
//function with its lexical scope bundle together forms a closure
function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();