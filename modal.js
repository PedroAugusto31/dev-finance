const modalButton = document.querySelector("button.modal-button");
const cancelButton = document.querySelector("button.cancel-button");
const form = document.querySelector("form");
const modalWrapper = document.querySelector("div.modal-wrapper");
const modal = document.querySelector("div.modal");
const tBody = document.querySelector("tbody");

modalButton.addEventListener("click", open);
cancelButton.addEventListener("click", close);

const localStorageTransactions = JSON.parse(
	localStorage.getItem("transactions")
);

let transactions =
	localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

const removeTransaction = (ID) => {
	transactions = transactions.filter((transaction) => transaction.id !== ID);
	updateLocalStorage();
	init();
};

const addTransaction = (transaction) => {
	let transation = document.createElement("tr");

	let operator = transaction.value > 0 ? "entry" : "exit";

	let description = document.createElement("td");
	description.innerHTML = transaction.description;
	let money = document.createElement("td");
	money.setAttribute("class", operator);
	money.innerHTML = moneyUpdate(transaction.value);
	let date = document.createElement("td");
	date.innerHTML = transaction.date;

	tBody.appendChild(transation);
	transation.appendChild(description);
	transation.appendChild(money);
	transation.appendChild(date);
};

const init = () => {
	tBody.innerHTML = "";
	transactions.forEach(addTransaction);
};

init();

const updateLocalStorage = () => {
	localStorage.setItem("transactions", JSON.stringify(transactions));
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const description = document.querySelector("#descrition");
	const money = document.querySelector("#value");
	const date = document.querySelector("#date");

	if (descrition.value == "" || money.value == "" || date.value == "") {
		console.log("preenche o bagulho po");
		return;
	}

	const transaction = {
		description: description.value,
		value: money.value,
		date: date.value,
	};

	transactions.push(transaction);
	init();
	updateLocalStorage();

	descrition.value = "";
	money.value = "";
	date.value = "";

	let numberTest = 0;

	const teste = (test) => {
		numberTest += parseInt(test.value);
	};

	transactions.forEach(teste);

	console.log(numberTest);

	close();
});

function open() {
	modalWrapper.classList.add("active");
}

function close() {
	modalWrapper.classList.remove("active");
}
