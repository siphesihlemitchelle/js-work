var balance = 2000;
var withdrawalHistory = [];
function giveUserBalance() {
    return "your current balance " + balance;
}
function withdraw(withdrawalAmount) {
    if (balance < withdrawalAmount) {
        return "insufficient funds";
        
    } else {
        balance = balance - withdrawalAmount;
        withdrawalHistory.push(withdrawalAmount)
        return "withdrawal of " + withdrawalAmount + " successful";
    }
}
console.log(giveUserBalance());
console.log(withdraw(1000));
console.log(giveUserBalance());
console.log(withdraw(500));
console.log(withdraw(700));
console.log(withdrawalHistory);