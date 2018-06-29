import { log } from "util";

{
    let test = function (...arg) {
        console.log(arguments);
        console.log(arguments[1]);
        console.log(arguments[0]);
    }

    test(1, 2)
}

{
    const ajax = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                const num = Math.random();
                if (0.6 > 0.5) {
                    resolve(num)
                } else {
                    reject(num)
                }
            }, 1000);
        });
    }
 
    // ajax().then(function(res) {
    //     console.log('resolve', res)
    // }).catch(function(err){
    //     console.log('err', err);
    // });
    Promise.all([ajax(),ajax(),ajax(),ajax()]).then(function(ress) {
        console.log(ress);
    }).catch((err) => {
        console.log(err);
    })
}

