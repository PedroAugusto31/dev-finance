const modalButton = document.querySelector("button.modal-button");
const cancelButton = document.querySelector("button.cancel-button");
const modalWrapper = document.querySelector("div.modal-wrapper");
const modal = document.querySelector("div.modal");

modalButton.addEventListener("click", open);

cancelButton.addEventListener("click", close);

function open() {
	modalWrapper.classList.add("active");
}

function close() {
	modalWrapper.classList.remove("active");
}
