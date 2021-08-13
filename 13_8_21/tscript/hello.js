var message;
message = 'hello world';
console.log(message);
var num;
num = 100;
console.log(num);
var WeekDays;
(function (WeekDays) {
    WeekDays["sun"] = "sunday";
    WeekDays["mon"] = "monday";
    WeekDays["tues"] = "tuesday";
    WeekDays["wed"] = "wednesday";
    WeekDays["thurs"] = "thursday";
    WeekDays["fri"] = "friday";
    WeekDays["sat"] = "saturday";
    WeekDays[WeekDays["no_of_days"] = 7] = "no_of_days";
})(WeekDays || (WeekDays = {}));
var weekday = WeekDays.thurs;
console.log(weekday);
