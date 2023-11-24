const popUp = document.querySelector(".pop-up");
const content = document.getElementById("message");

export const showPopUp = (message) => {
	content.textContent = message;
	setTimeout(() => {
		popUp.classList.remove("show-pop-up");
		document.body.style.background = "black";
		document.body.style.opacity = "1";
	}, 10100);
	popUp.classList.add("show-pop-up");
	document.body.style.opacity = "0.5";
	document.body.style.background = "rgba(0, 0, 0, 0.8)";
};
