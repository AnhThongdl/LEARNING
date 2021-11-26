var moment = require('moment');

var time = moment('2021-12-26');
console.log(time.fromNow());
console.log(time.format('DD/MM/YYYY'));

console.log('===================');
 var now = moment();
console.log(now.format('DD/MM/YYYY'));