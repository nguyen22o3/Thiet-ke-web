function showDateTime() {
    
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    var prepand = (hour >= 12) ? "PM" : "AM";
    hour = (hour >= 12) ? hour - 12 : hour;

    if (hour === 0 && prepand === 'PM') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = 'Noon';
        } else {
            hour = 12;
            prepand = 'PM';
        }
    }

    if (hour === 0 && prepand === 'AM') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = 'Midnight';
        } else {
            hour = 12;
            prepand = 'AM';
        }
    }

    var timeString = "Hôm nay là: " + daylist[day] + " và thời gian hiện tại là: " + hour + prepand + ":" + formatTime(minute) + ":" + formatTime(second);
    document.getElementById("time").innerText = timeString;
}

function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}

showDateTime();