const entryElement = document.querySelector(".entrys h2");
const exitElement = document.querySelector(".exits h2");
const totalElement = document.querySelector(".total h2");
const saveButton = document.querySelector(".save-button");

let entryAmount = 0,
	exitAmount = 0;
let totalMoney = moneyUpdate(parseInt(entryAmount) + parseInt(exitAmount));
entryElement.textContent = moneyUpdate(entryAmount);
exitElement.textContent = moneyUpdate(exitAmount);
totalElement.textContent = totalMoney;

const localStorageTransaction = JSON.parse(
	localStorage.getItem("transactions")
);

let transactionslaal =
	localStorage.getItem("transactions") !== null ? localStorageTransaction : [];

const iniciar = (test) => {
	if (test.value > 0) {
		entryAmount += parseInt(test.value);
		entryElement.textContent = moneyUpdate(entryAmount);
	} else if (test.value < 0) {
		exitAmount += parseInt(test.value);
		exitElement.textContent = moneyUpdate(exitAmount);
	}

	totalMoney = moneyUpdate(parseInt(entryAmount) + parseInt(exitAmount));
	totalElement.textContent = totalMoney;
};

function moneyUpdate(money) {
	let brMoney = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(money);

	return brMoney;
}

saveButton.addEventListener("click", () => {
	location.reload();
});

transactionslaal.forEach(iniciar);
