{
    let test = function(...arg){
        console.log(arguments);
        console.log(arguments[1]);
        console.log(arguments[0]);
    }

    test(1,2)
}