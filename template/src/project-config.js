'use strict';
var exports = {
    // 是否是开发环境和测试环境
    get isTest () {
        let env = process.env.VUE_APP_MODE ;
        return env === 'development' || env === 'buildTest';
    },
    get baseUrl() {
        let test = '',
            prod = '';

        return this.isTest ? test : prod;
    },


};

module.exports = exports;
