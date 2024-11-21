var today = new Date();

var day = today.getDay();

var daylist = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

console.log("Hôm nay là : " + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === 'PM')
{
    if (minute === 0 && second === 0)
    {
        hour = 12;
        prepand = 'Noon';
    }
    else
    {
        hour = 12;
        prepand = 'PM';
    }
}

if  (hour === 0 && prepand === 'AM')
{
    if (minute === 0 && second === 0)
    {
        hour = 12;
        prepand = 'Midnight';
    }
    else
    {
        hour = 12;
        prepand = 'AM';
    }
}

console.log("Thời gian hiện tại là: " + hour + prepand + ":" + minute + ":" + second);