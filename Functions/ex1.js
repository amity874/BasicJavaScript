//function Statement or declaration
a();
b();
function a(){
    console.log("a called");
}
//function expression
// var b=function(){
//     console.log("b called");
// }
//Anonymous function
// function (){//this will give error
// }
//named function expression
var b=function(param1){
    console.log(param1);
    return function(){
    }
}
b(function(){});
function xyz(){
}
b(xyz);

// xyz();//this will error also
//diff between parameter & Aggument
// var b=function(param1,param2){//parameter of function
//     console.log("b called");
// }
// b(1,2);//function argument
//the ability of function to be used as a value known as First class function
//first class citizens.....as as first class function
//let and const behave as as the var function
//arrow funcion also
