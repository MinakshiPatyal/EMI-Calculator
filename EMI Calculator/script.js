function calculate() {
    var Amount_input = parseInt(document.getElementById("Amount").value);

    var Rate_input = parseInt(document.getElementById("Rate").value);


    var Time_input = parseInt(document.getElementById("Time").value);

    var Interest = Amount_input * Rate_input * Time_input/ 100

    var Total = Interest + Amount_input;

    document.getElementById("output_1").innerHTML = Amount_input;
    document.getElementById("output_2").innerHTML = Interest;
    document.getElementById("output_3").innerHTML = Total;
}