// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// outer()();we can wite this as
// var close=outer();
// close();

// function outest(){
//     var c=20;
// function outer(b){//it worls the same way
//     // let a=10;if we din't have this js engine wil find in it global scope
//     function inner(){
//         console.log(a,b,c);
//     }
//     return inner;
// }
// return outer;
// }
// let a=100;
// var close=outest()("hello");
// close();
// console.log(a);
console.log(count);
function counter(){
    var count=0;
    return function incremene(){
        count++;
        console.log(count);
    }
}
var couneter1=counter();
couneter1();