class Timer {
    /**
     * 
     * @param {Number} end 截至时间
     * @param {Function} update 更新的回调
     * @param {Function} handle 倒计时结束的回调
     * 
     */
    countDown(end, update, handle) {
        const now = new Date().getTime();
        const self = this;
        if (now - end) {
            handle.call(self);
        } else {
            let lastTime = end - now;
            const pxD = 1000 * 60 * 60 * 24; //一天有多少毫秒
            const pxH = 1000 * 60 * 60; // 一小时有多少毫秒
            const pxM = 1000 * 60; // 一分钟有多少毫秒
            const pxS = 1000; //一秒有多少毫秒
            let d = Math.floor(lastTime / pxD);
            let h = Math.floor((lastTime - d * pxD) / pxH);
            let m = Math.floor((lastTime - d * pxD - h * pxH) / pxM);
            let s = Math.floor((lastTime - d * pxD - h * pxH - m * pxM) / pxS);

            let r = [];
            if (d > 0) {
                r.push(`<em>${d}</em>天`)
            }
            if (r.length || (h > 0)) {
                r.push(`<em>${h}</em>时`)
            }
            if (r.length || m > 0) {
                r.push(`<em>${m}</em>分`)
            }
            if (r.length || s > 0) {
                r.push(`<em>${s}</em>秒`)
            }
            self.lastTime = r.join('');
            update.call(self, r.join(''));
            setTimeout(function () {
                self.countDown(end, update, handle);
            }, 1000);
        }
    }
}

export default Timer;