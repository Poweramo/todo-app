// TODO: Fix problem (when you create a task, the first one disappear)
// TODO: adding save finished tasks

const root = document.querySelector(":root");
const header = document.querySelector("header");
const menu = document.getElementById("menu");
const sections = document.querySelector(".sections");
const createElement = document.getElementById("create");
const typeElement = document.getElementById("type");
const validateElement = document.getElementById("validate");
const taskList = document.querySelector("ol");
let task;
let finishedTask;

import { showPopUp } from "./assets/js/pop-up.js";

for (let i = 0; i < localStorage.length; i++) {
	let item1 = localStorage.getItem(`task${i}`);
	taskList.innerHTML += `<li>${item1} <img id="checkmark" src="./assets/img/checkmark.png"> <img id="deletemark" src="./assets/img/deletemark.png"> </li>`;
}

createElement.addEventListener("click", () => {
	if (localStorage.length === 10) {
		showPopUp("Sorry, but you can't create more than 10 tasks !");
	} else {
		typeElement.style = "display: inline-block;";
		typeElement.value = "";
	}
});

typeElement.addEventListener("input", (e) => {
	task = e.target.value;
});

validateElement.addEventListener("submit", (e) => {
	e.preventDefault();
	localStorage.setItem(`task${localStorage.length}`, task);
	taskList.innerHTML += `<li>${task} <img id="checkmark" src="./assets/img/checkmark.png"> <img id="deletemark" src="./assets/img/deletemark.png"> </li>`;
	typeElement.style = "display: none;";
	location.reload();
});

for (let i = 0; i < localStorage.length; i++) {
	let deleteMark = document.querySelectorAll("#deletemark");
	let finishedMark = document.querySelectorAll("#checkmark");
	let item = taskList.childNodes[i];
	item.addEventListener("click", (e) => {
		if (e.target === deleteMark[i] || e.target === finishedMark[i]) {
			localStorage.removeItem(`task${i}`);
			item.style.display = "none";
		}
	});
}

menu.addEventListener("click", () => {
	menu.classList.toggle("turn-menu");
	header.classList.toggle("show-menu");
	sections.classList.toggle("show-sections");
});
