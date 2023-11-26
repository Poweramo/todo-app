// ! Changing document.etc to const element = ...
// Fix:
/* In the taskList.childNodes table, 
there is the tasks and some blank text, 
which makes the deleting operation not accurate */
// TODO: adding save finished tasks

const root = document.querySelector(":root");
const header = document.querySelector("header");
const menu = document.getElementById("menu");
const sections = document.querySelector(".sections");
const createElement = document.getElementById("create");
const typeElement = document.getElementById("type");
const validateElement = document.getElementById("validate");
const taskList = document.querySelector(".tasks");
let task;
let finishedTask;

import { showPopUp } from "./assets/js/pop-up.js";

for (let i = 0; i < localStorage.length; i++) {
	let item = localStorage.getItem(`task:${Object.values(localStorage)[i]}`);
	taskList.innerHTML += `<li>${item}<img id="checkmark" src="./assets/img/checkmark.png"><img id="deletemark" src="./assets/img/deletemark.png"></li> `;
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
	localStorage.setItem(`task:${task}`, task);
	taskList.innerHTML += `<li>${task} <img id="checkmark" src="./assets/img/checkmark.png"> <img id="deletemark" src="./assets/img/deletemark.png"> </li>`;
	typeElement.style = "display: none;";
});

for (let i = 0; i < localStorage.length; i++) {
	let deleteMark = document.querySelectorAll("#deletemark");
	let finishedMark = document.querySelectorAll("#checkmark");

	taskList.addEventListener("click", (e) => {
		if (e.target === deleteMark[i] || e.target === finishedMark[i]) {
			localStorage.removeItem(`task:${taskList.childNodes[i].textContent.slice("   ")}`);
			document.querySelectorAll("li")[i].style.display = "none";
		}
	});
}

menu.addEventListener("click", () => {
	menu.classList.toggle("turn-menu");
	header.classList.toggle("show-menu");
	sections.classList.toggle("show-sections");
});
