const BET_LOST = 0;
let balance = 100;
let winCount = 0;
let Bets = 0;

while (balance > 0 && balance < 200) {
    let bet = Math.floor(Math.random() * 10) % 2;
    if (bet == BET_LOST)
        balance--;
    else {
        balance++;
        winCount++;
    }
    Bets++;
}

console.log("bets = " + Bets);
console.log("Total wins = " + winCount);
console.log("Final balance = " + balance);