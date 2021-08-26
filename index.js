var moneyInserted = 0;
var change = 0;
var msg = "";
var sodas = ["Coke", "Pepsi", "Soda"]
const price = 1.3

var messageEl = document.getElementById("message")
var totalPaid = 0;

const currency_penny = 0.01 ;
const currency_nickel = 0.05 ;
const currency_dime = 0.10 ;
const currency_quarter = 0.25 ;

function getTotal() {
    var currency_pennys = Number(document.getElementById("pennys").value)
    var currency_nickels = Number(document.getElementById("nickels").value)
    var currency_dimes = Number(document.getElementById("dimes").value)
    var currency_quarters = Number(document.getElementById("quarters").value)

    if(currency_pennys > 0) {
        currency_pennys = currency_pennys * currency_penny
    }

    if(currency_nickels > 0) {
        currency_nickels = currency_nickels * currency_nickel
    }

    if(currency_dimes > 0) {
        currency_dimes = currency_dimes * currency_dime
    }

    if(currency_quarters > 0) {
        currency_quarters = currency_quarters * currency_quarter
    }

    totalPaid = currency_pennys + currency_nickels + currency_dimes + currency_quarters;

    return totalPaid.toFixed(2)
}

function tally() {
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally() {
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm() {
    document.getElementById("pennys").value = 0
    document.getElementById("nickels").value = 0
    document.getElementById("dimes").value = 0
    document.getElementById("quarters").value = 0
}

function cancel() {
    getTotal()

    if(totalPaid > 0) {
        msg = "Transaction cancelled. $" + totalPaid.toFixed(2) + " has been returned."
        clearTally()
        clearForm()
        messageEl.innerHTML = msg
    } else if (totalPaid == 0) {
        msg = "Insert money first. Select a soda"
        messageEl.innerHTML = msg
    } 
}

function calculateChange() {
    var tempChange = 0
    if (getTotal() != 0) {
        return (tempChange = (getTotal() - price ).toFixed(2))
    }

    return tempChange.toFixed(2)
}

function dispenseSoda(soda) {
    messageEl.innerHTML = "";
    change = 0;
    var selectedSoda = sodas[soda]
    change =calculateChange()
    if (change < 0) {
        msg = "You did not pay enough. Each drink is $1.30. $" + totalPaid.toFixed(2) + " has been returned to the coin return."
        totalPaid = 0
        change = 0 
        clearForm()
        clearTally()
        messageEl.innerHTML = msg
    } else if (change > 0 ) {
        msg = selectedSoda + " has been dispensed. $" + change + " has been returned to the coin return."
        totalPaid = 0
        change = 0 
        clearForm()
        clearTally()
        messageEl.innerHTML = msg
    } else if (totalPaid == 0) {
        msg = "Please pay before selecting a soda. Each Soda is $1.30"
        messageEl.innerHTML = msg
    } else if (change == 0) {
        msg = selectedSoda + " has been dispensed. Enjoy!"
        totalPaid = 0
        change = 0 
        clearForm()
        clearTally()
        messageEl.innerHTML = msg
    }
}
