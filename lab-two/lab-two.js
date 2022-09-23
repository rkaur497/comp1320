let daysInWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

function isLeapYear(year){
    if (year % 4 == 0 && year % 100 != 0){
        return true;
    }
}


function centuryYears(year, total, month) {
    if (month == "January" && isLeapYear(year) || month == "February" && isLeapYear(year) ) {
        total = total - 1;
    }
    if (year >= 1600 && year < 1700) {
        total = total + 6;
    }
    if (year >= 1700 && year < 1800) {
        total = total + 4;
    }
    if (year >= 1800 && year < 1900) {
        total = total + 2;
    }
    if (year >= 2000 && year < 2100) {
        total = total + 6;
    }
    if (year >= 2100 && year < 2200) {
        total = total + 4;
    }
    return total;
}

function dayOfTheWeek(total){
    if (total == 0){
       return (dayOfWeek = "Sat");
    } else if (total == 1){
       return (dayOfWeek = "Sun");
    } else if (total == 2){
        return (dayOfWeek = "Mon");
    } else if (total == 3){
        return (dayOfWeek= "Tue");
    } else if (total == 4){
        return (dayOfWeek = "Wed");
    } else if (total == 5){
        return (dayOfWeek = "Thu");
    } else if (total == 6){
        return (dayOfWeek = "Fri");
    } 
}

const monthCodeMap = {
    "January" : 1,
    "February" : 4,
    "March" : 4,
    "April" : 0,
    "May" : 2,
    "June" : 5,
    "July" : 0,
    "August" : 3,
    "September" : 6,
    "October" : 1,
    "November" : 4,
    "December" : 6,
};

//let year = "2022";
//let month = "Jan";
//let day = 1;

function getDayOfTheWeek(year, month, day) {
    let lastTwoDigitsOfTheYear = year % 100;
    //console.log(lastTwoDigitsOfTheYear);

    let find12s = Math.round(parseInt(lastTwoDigitsOfTheYear) / 12);
    //console.log(find12s);

    let remainderOfFind12s = parseInt(lastTwoDigitsOfTheYear) % 12;
    //console.log(remainderOfFind12s);

    let find4s = Math.round(parseInt(remainderOfFind12s) / 4);
    //console.log(find4s);

    var total1 = (find12s + remainderOfFind12s + find4s + day + monthCodeMap[month]);
    var newTotal = centuryYears(year, total1, month);
    return daysInWeek[newTotal % 7];
}


function makeCalender(calendarYear) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    for (let i = 0; i < months.length; i++) {
        for (let j = 1; j <= months[i]; j++) {
            console.log(`${months[i]}-${monthsInYear[i]}-${calendarYear} is a ${getDayOfTheWeek(2022, monthsInYear[i], j)}`)
        }
    }
    
}


module.exports = {getDayOfTheWeek, makeCalender};