const RESULT_DEPOSIT_TEXT = "If you deposit";
const RESULT_RATE_TEXT = "at an interest rate of";
const RESULT_AMOUNT_TEXT = "You will reveive an amount of";
const RESULT_YEAR_TEXT = "in the year";

function compute()
{
    var deposit = document.getElementById("deposit").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var gains = (deposit * (rate/100)) * years;

    var yearInFuture = new Date().getFullYear() + parseInt(years);

    document.getElementById('output-deposit').innerHTML
        = RESULT_DEPOSIT_TEXT + " " + "<span style='background-color: yellow;'>" + deposit + "</span>";
    document.getElementById('output-rate').innerHTML
        = RESULT_RATE_TEXT + " " + "<span style='background-color: yellow;'>" + rate + "%" + "</span>";
    document.getElementById('output-amount').innerHTML
        = RESULT_AMOUNT_TEXT + " " + "<span style='background-color: yellow;'>" + gains + "</span>";
    document.getElementById('output-year').innerHTML 
        = RESULT_YEAR_TEXT + " " + "<span style='background-color: yellow;'>" + yearInFuture + "</span>";
}
        