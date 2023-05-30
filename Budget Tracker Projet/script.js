// Select DOM elements
const form = document.getElementById('budget-form');
const incomeDescriptionInput = document.getElementById('income-description');
const incomeAmountInput = document.getElementById('income-amount');
const expenseDescriptionInput = document.getElementById('expense-description');
const expenseAmountInput = document.getElementById('expense-amount');
const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const remainingBalanceElement = document.getElementById('remaining-balance');

let totalIncome = 0;
let totalExpenses = 0;

// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const incomeDescription = incomeDescriptionInput.value;
  const incomeAmount = parseFloat(incomeAmountInput.value);
  const expenseDescription = expenseDescriptionInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);

  if (incomeDescription && !isNaN(incomeAmount)) {
    totalIncome += incomeAmount;
    incomeDescriptionInput.value = '';
    incomeAmountInput.value = '';
  }

  if (expenseDescription && !isNaN(expenseAmount)) {
    totalExpenses += expenseAmount;
    expenseDescriptionInput.value = '';
    expenseAmountInput.value = '';
  }

  updateSummary();
});

// Function to update the summary section
function updateSummary() {
  totalIncomeElement.textContent = totalIncome.toFixed(2);
  totalExpensesElement.textContent = totalExpenses.toFixed(2);

  const remainingBalance = totalIncome - totalExpenses;
  remainingBalanceElement.textContent = remainingBalance.toFixed(2);
}

// Initialize the summary
updateSummary();
