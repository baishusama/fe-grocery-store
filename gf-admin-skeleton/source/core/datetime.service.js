angular.module('gfAsk.core').service('datetimeService', DatetimeService);

DatetimeService.$inject = [];
function DatetimeService() {
    /**
     * 公有方法
     */
    this.getNowTimeStr = getNowTimeStr;

    /**
     * 私有方法
     */
    function getNowTimeStr() {
        var now = new Date();
        var yyyy = now.getFullYear(),
            mm = now.getMonth() + 1,
            dd = now.getDate(),
            HH = now.getHours(),
            MM = now.getMinutes(),
            SS = now.getSeconds(),
            milliSec = now.getMilliseconds();
        var timeStr = '' + yyyy + '-';

        if (mm < 10) {
            timeStr += '0';
        }
        timeStr += mm + '-';

        if (dd < 10) {
            timeStr += '0';
        }
        timeStr += dd + ' ';

        if (HH < 10) {
            timeStr += '0';
        }
        timeStr += HH + ':';

        if (MM < 10) {
            timeStr += '0';
        }
        timeStr += MM + ':';

        if (SS < 10) {
            timeStr += '0';
        }
        timeStr += SS + '.';

        if (milliSec < 100) {
            timeStr += '0';
        }
        timeStr += milliSec;

        return timeStr;
    }
}
