function clk(val) {
    document.getElementById("scrn").value = document.getElementById("scrn").value + val;

}

function allClear() {
    document.getElementById("scrn").value = "";

}


function eqClk() {
    var text = document.getElementById("scrn").value
    var result = eval(text)
    document.getElementById("scrn").value = result;
    console.log('hai')
}