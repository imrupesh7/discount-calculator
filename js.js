function checkValue() {
    let x = parseFloat(document.getElementById("origiprice").value);
    let z = parseFloat(document.getElementById("discountprice").value);

    let sum = x / 100 * z;


    let c = document.getElementById("savingamount").value = Math.round(sum.toFixed());
    let d = document.getElementById("discountamount").value = Math.round(sum = x - z / 100 * x.toFixed());

    let printvalue = `Your Saving Amount is ₹${c} Your Discount Amount is ${d}%`;
    document.getElementById('value').innerHTML = printvalue;
}
