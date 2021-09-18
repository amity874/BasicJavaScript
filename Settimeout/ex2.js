function x(){
    for (var i=1;i<=6;i++){//use let to quick fix
        function close(x){
            setTimeout(() => {
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
    console.log("Hey");
}
x();
//first class function

