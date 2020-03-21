const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const swap = document.getElementById("swapp");
const ratee = document.getElementById("rate");
//fetch exchange rate and modify dom
function currency() {
	currency_one = currencyEl_one.value;
	currency_two = currencyEl_two.value;
	fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
		.then(res => res.json())
		.then(data => {
			const rate = data.rates[currency_two];
			ratee.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
			console.log(amountEl_one.value * rate);
			amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
		});
}
function swapper() {
	console.log("works");
	const temp = currencyEl_one.value;
	currencyEl_one.value = currencyEl_two.value;
	currencyEl_two.value = temp;
	currency();
}

//event listeners
amountEl_one.addEventListener("input", currency);
amountEl_two.addEventListener("input", currency);
currencyEl_one.addEventListener("change", currency);
currencyEl_two.addEventListener("change", currency);
swap.addEventListener("click", swapper);
currency();
