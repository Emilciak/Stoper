const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const cancelBtn = document.querySelector(".delete");
const archiveBtn = document.querySelector(".archive");
const watch = document.querySelector(".watch");
const time = document.querySelector(".time");
const infoBtn = document.querySelector(".info");
const paintBtn = document.querySelector(".paint");
const timeList= document.querySelector(".time-list");
const modalShadow= document.querySelector(".modal-shadow");
const closeBtn = document.querySelector(".close");

let countTime;
let minutes=0;
let seconds=0;
const startTime = () =>{
    countTime = setInterval(() =>{
        if (seconds < 9){
            seconds++;
            watch.textContent = `${minutes}:0${seconds}`; 
            // seconds++;
        }else if(seconds => 9 && seconds < 59){
            seconds++;
            watch.textContent = `${minutes}:${seconds}`; 
        }
        if (seconds==60){
            seconds=0;
            minutes++;
            watch.textContent = `${minutes}:00`;
        }
    }, 100)


}




startBtn.addEventListener('click', startTime)
startBtn.addEventListener('click', startTime)