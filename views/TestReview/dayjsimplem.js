const dayjs = require("dayjs");

function getDate(){
    console.log("Current date + time: " + dayjs().format('dddd, DD MMMM YYYY, HH:mm:SSS'));
}

getDate()