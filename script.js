const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const cancelBtn = document.querySelector(".delete");
const archiveBtn = document.querySelector(".archive");
const watch = document.querySelector(".watch");
const time = document.querySelector(".time");
const infoBtn = document.querySelector(".info");
const paintBtn = document.querySelector(".paint");
const timeList = document.querySelector(".time-list");
const modalShadow = document.querySelector(".modal-shadow");
const closeBtn = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;
let times = [];
const startTime = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			watch.textContent = `${minutes}:0${seconds}`;
			// seconds++;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			watch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			watch.textContent = `${minutes}:00`;
		}
	}, 100);
};

const pauseTime = () => {
	clearInterval(countTime);
};

const stopTime = () => {
	time.innerHTML = `Ostatni czas: ${watch.textContent}`;

	if (watch.textContent !== "0:00") {
		time.style.visibility = "visible";
		times.push(watch.textContent);
	}
	clear();
};

const deleteTime = () => {
    time.style.visibility = "hidden";
    let times = [];
	clear();
};

const clear = () => {
	clearInterval(countTime);
	watch.textContent = "0:00";
	timeList.textContent = "";
	minutes = 0;
	seconds = 0;
};

startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
stopBtn.addEventListener("click", stopTime);
cancelBtn.addEventListener("click", deleteTime);
