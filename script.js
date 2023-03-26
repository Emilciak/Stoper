const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const cancelBtn = document.querySelector(".delete");
const archiveBtn = document.querySelector(".archive");
const watch = document.querySelector(".watch");
const time = document.querySelector(".time");
const infoBtn = document.querySelector(".info");
const timeList = document.querySelector(".time-list");
const modalShadow = document.querySelector(".modal-shadow");
const closeBtn = document.querySelector(".close");

const paintBtn = document.querySelector(".paint");
const colors = document.querySelector(".colors");
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");
const colorFour = document.querySelector(".four");

let root = document.documentElement;

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
	}, 1000);
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
	times = [];
	clear();
};

const clear = () => {
	clearInterval(countTime);
	watch.textContent = "0:00";
	timeList.textContent = "";
	minutes = 0;
	seconds = 0;
};

const archiveTime = () => {
	timeList.textContent = "";
	let count = 0;
	times.forEach((el) => {
		const liItem = document.createElement("li");
		count++;
		liItem.innerHTML = `Measurement no. ${count}: <span>${el} </span>`;
		timeList.appendChild(liItem);
	});
};

const infoHelp = () => {
	if (!(modalShadow.style.display == "block")) {
		modalShadow.style.display = "block";
	} else {
		modalShadow.style.display = "none";
	}
	modalShadow.classList.toggle("modal-anim");
};

startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
stopBtn.addEventListener("click", stopTime);
cancelBtn.addEventListener("click", deleteTime);
archiveBtn.addEventListener("click", archiveTime);
infoBtn.addEventListener("click", infoHelp);
closeBtn.addEventListener("click", infoHelp);

window.addEventListener("click", (e) =>
	e.target === modalShadow ? infoHelp() : false
);

colorOne.addEventListener("click", () => {
	root.style.setProperty("--main-color", "rgb(42, 152, 22)");
});
colorTwo.addEventListener("click", () => {
	root.style.setProperty("--main-color", "rgb(74, 91, 216)");
});
colorThree.addEventListener("click", () => {
	root.style.setProperty("--main-color", "rgb(132, 28, 106)");
});
colorFour.addEventListener("click", () => {
	root.style.setProperty("--main-color", "rgb(0, 253, 190)");
});

paintBtn.addEventListener("click", () => {
	colors.classList.toggle("show-color")
})