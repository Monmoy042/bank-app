const loginButton = document.getElementById('login');

// Login Button Event Handler
loginButton.addEventListener('click', function () {
	// console.log('Click Me');
	const loginArea = document.getElementById('login-area');
	loginArea.style.display = 'none';
	const transactionArea = document.getElementById('transaction-area');
	transactionArea.style.display = 'block';
});

// Deposit Button Event Handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
	// const depositAmount = document.getElementById('depositAmount').value;
	// const depositNumber = parseFloat(depositAmount);
	const depositNumber = getInputNumber('depositAmount');

	// const currentDeposit = document.getElementById('currentDeposit').innerText;
	// const currentDepositNumber = parseFloat(currentDeposit);
	// const totalDeposit = depositNumber + currentDepositNumber;
	// // console.log(totalDeposit);
	// document.getElementById('currentDeposit').innerText = totalDeposit;

	updateSpanText('currentDeposit', depositNumber);
	updateSpanText('currentBalance', depositNumber);

	document.getElementById('depositAmount').value = '';
});

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
	// const withdrawAmount = document.getElementById('withdrawAmount').value;
	// console.log(withdrawAmount);
	// const withdrawNumber = parseFloat(withdrawAmount);

	const withdrawNumber = getInputNumber('withdrawAmount');
	// console.log(withdrawNumber);

	updateSpanText('currentWithdraw', withdrawNumber);
	updateSpanText('currentBalance', -1 * withdrawNumber);

	document.getElementById('withdrawAmount').value = '';
});

function getInputNumber(id) {
	const withdrawAmount = document.getElementById(id).value;
	// console.log(withdrawAmount);
	const withdrawNumber = parseFloat(withdrawAmount);
	return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
	const currentBalance = document.getElementById(id).innerText;
	const currentBalanceNumber = parseFloat(currentBalance);
	const totalBalance = depositNumber + currentBalanceNumber;
	document.getElementById(id).innerText = totalBalance;
}
