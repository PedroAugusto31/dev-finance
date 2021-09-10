const modalButton = document.querySelector("button.modal-button");
const cancelButton = document.querySelector("button.cancel-button");
const sendButton = document.querySelector("button.save-button");
const modalWrapper = document.querySelector("div.modal-wrapper");
const modal = document.querySelector("div.modal");

modalButton.addEventListener("click", open);

cancelButton.addEventListener("click", close);

sendButton.addEventListener("click", (e) => {
	e.preventDefault();

	const descrition = document.querySelector("#descrition");
	console.log(descrition.value);
	const value = document.querySelector("#value");
	console.log(moneyUpdate(value.value));
	const date = document.querySelector("#date");
	console.log(date.value);
});

function open() {
	modalWrapper.classList.add("active");
}

function close() {
	modalWrapper.classList.remove("active");
}
