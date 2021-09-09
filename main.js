const entryElement = document.querySelector(".entrys h2");
const exitElement = document.querySelector(".exits h2");
const totalElement = document.querySelector(".total h2");

let entryTotal = entryElement.innerHTML.split(" ");
let entryMoney = entryTotal[1].replace(".", "").replace(",00", "");

let exitTotal = exitElement.innerHTML.split(" ");
let exitMoney = exitTotal[1].replace(".", "").replace(",00", "");

function moneyUpdate(money) {
	let brMoney = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(money);

	return brMoney;
}

let totalMoney = moneyUpdate(parseInt(entryMoney) - parseInt(exitMoney));
totalElement.textContent = totalMoney;
