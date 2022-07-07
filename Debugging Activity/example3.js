function checkPoint3(){
    alert4();
    function superMarket(cash) {
        let milk = 4.99;
        let vegetables = 15.99;
        let bread = 2.99;
        let total = milk + vegetables + bread; 
        cash = cash - total;
        return cash;
    }
    function main(cash) {
        let moneySpent = superMarket(cash);
        return moneySpent;
    }
    let totalCash = 50.00;
    console.log("Total Cash: $" + totalCash);
    console.log("Change Return = $" + main(totalCash));

    if (main(totalCash) < 50) {
        alert("Awesome work! You got the system running!");
    }
}

function alert4() {
    alert("The system at the supermarket doesn't seem to be working. Can you help debug the system to help calculate the total change return to the customer? Go to the example3.js file and work on checkpoint 3.");
}