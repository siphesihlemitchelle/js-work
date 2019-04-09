var balance = 2000;

function giveUserBalance() {
    return "your current balance " + balance;
}
function withdraw(withdrawalAmount) {
    if (balance < withdrawalAmount) {
        return "insufficient funds";
    } else {
        balance = balance - withdrawalAmount;
        return "withdrawal of " + withdrawalAmount + " successful";
    }
}
