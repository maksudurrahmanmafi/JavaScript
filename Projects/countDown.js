/* let timeLeft = 100
const time = setInterval(()=>{
    document.getElementById("timer").innerText = timeLeft

    timeLeft--;
    if(timeLeft<0){
        clearInterval(time);
        document.getElementById("timer").innerText="Time's Up"
    }
},1000); */

let totalSeconds = 3665; // 1 hour 1 minute 5 second

const timer = setInterval(() => {

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("timer").innerText =
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;

    totalSeconds--;

    if (totalSeconds < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerText = "00:00:00";
    }

}, 1000);