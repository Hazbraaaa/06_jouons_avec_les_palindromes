function isValidDate(date) {
    if (date.length !== 10) {
        return false
    }

    const splittedDate = date.split("/");
    const day = splittedDate[0];
    const month = splittedDate[1];
    const year = splittedDate[2];

    if (day > maxDayInAMonth(month)) {
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

function maxDayInAMonth(month) {
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
            return "28";
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
    const dayMonth = splittedDate[0]+splittedDate[1];
    const year = splittedDate[2];
    const monthDay = dayMonth.split("").reverse().join("");

    if (monthDay === year) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome("20/12/2102"));