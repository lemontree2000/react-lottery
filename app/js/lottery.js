import base from './lottery/Base';
import Timer from './lottery/Timer';
import Calculate from './lottery/Calculate';
// import Interfaces from './lottery/Interfaces';



const myTimer = new Timer();

const endTime = new Date().getTime() + 100001;
myTimer.countDown(endTime, function () {
    console.log(myTimer.lastTime);
}, function (res) {
    console.log(res);
})