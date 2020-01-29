let name = () => {
    return "Trevor";
}

let myNameIs = name();
console.log(myNameIs);

function tipCalc(bill) {
    let tip = bill * 0.14;
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.84);
console.log(totalTip);

let tipCalc = bill => bill *0.2;
let totalTip = tipCalc(19.84);
console.log(totalTip);
