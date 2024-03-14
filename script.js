setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();



    let day = date.toLocaleDateString();

    let hrotate = (30 * hour) + (minute / 2)
    let mrotate = (6 * minute) + (second / 10)
    let srotate = 6 * second

    document.getElementById("hour").style.transform = `rotate(${hrotate}deg)`
    document.getElementById("minute").style.transform = `rotate(${mrotate}deg)`
    document.getElementById("second").style.transform = `rotate(${srotate}deg)`

    if (second < 10) {
        second = `0${second}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    if (hour < 10) {
        hour = `0${hour}`
    }
    newHTML = `<p>Time is : ${hour} : ${minute} : ${second} AM </p> <p>Date is : ${day} </p>`
    
    if (hour == 0) {
        hour = 12
        newHTML = `<p>Time is : ${hour} : ${minute} : ${second} AM </p> <p>Date is : ${day} </p>`

    }
    if (hour > 12) {
        hour = hour - 12
        if (hour < 10) {
            hour = `0${hour}`
        }

        newHTML = `<p>Time is : ${hour} : ${minute} : ${second} PM </p> <p>Date is : ${day} </p>`

    }
    //     else {

    //     }

    document.getElementById("digitalClock").innerHTML = newHTML

    // console.log(`${hour} : ${minute} : ${second}`)

}, 1000);
