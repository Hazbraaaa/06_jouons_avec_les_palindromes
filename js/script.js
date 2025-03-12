function isValidDate(date) {
    if (date.length !== 10) {
        return false
    }

    const splittedDate = date.split("/");
    const day = splittedDate[0];
    const month = splittedDate[1];
    const year = splittedDate[2];

    if (day > maxDayInAMonth(month, year)) {
        return false;
    }
    else if (month > 12) {
        return false;
    }
    else if (year < 999 || year > 9999) {
        return false;
    }
    else {
        return true;
    }
}

function maxDayInAMonth(month, year) {
    switch (month) {
        case "01":
        case "03":
        case "05":
        case "07":
        case "08":
        case "10":
        case "12":
            return "31";
        case "02":
            if (year % 4 === 0) {
                return "29";
            }
            else {
                return "28";
            }
        case "04":
        case "06":
        case "09":
        case "11":
            return "30";
    }
}

function isPalindrome(date) {
    if (!isValidDate(date)) {
        return false;
    }

    const splittedDate = date.split("/");
    const dayMonth = splittedDate[0] + splittedDate[1];
    const year = splittedDate[2];
    const monthDay = dayMonth.split("").reverse().join("");

    if (monthDay === year) {
        return true;
    }
    else {
        return false;
    }
}

function getCurrentDate() {
    const currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth()+1;
    const currentYear = currentDate.getFullYear();

    if (currentDay < 10) {
        currentDay = "0"+currentDay;
    }
    if (currentMonth < 10) {
        currentMonth = "0"+currentMonth;
    }
    return `${currentDay}/${currentMonth}/${currentYear}`;
}

function getNextPalindrome(number) {
    let myDate = getCurrentDate();
    let myYear = myDate.split("/")[2];
    let count = 0;

    if (isPalindrome(myDate)) {
        console.log(myDate);
    }
    while (count < number) {
        myYear += "";
        let myDay = myYear.split("")[3]+myYear.split("")[2];
        let myMonth = myYear.split("")[1]+myYear.split("")[0];
        let dateToCheck = `${myDay}/${myMonth}/${myYear}`;
        
        if (isPalindrome(dateToCheck)) {
            console.log(dateToCheck);
            count++;
        }
        myYear++;
    }
}

getNextPalindrome(10);