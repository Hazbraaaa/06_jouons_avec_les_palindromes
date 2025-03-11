function isValidDate(string) {
    const splittedString = string.split("/");
    const day = splittedString[0];
    const month = splittedString[1];
    const year = splittedString[2];


    if (string.length !== 10) {
        return false
    }
    else if (day > maxDayInAMonth(month)) {
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

console.log(isValidDate("31/04/1998"));