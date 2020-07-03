//use moment JS to display todays date
const format = 'LLLL';
const result = moment().format(format);
// console.log(result);

//append date to currentDay
const currentDay = $('#currentDay').append(result);