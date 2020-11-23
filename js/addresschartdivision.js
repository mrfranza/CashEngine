var row = document.getElementById("row");

var tag = document.tagsize;
var line = document.linesize;
var set = document.setsize;
var word = document.wordsize;

function GenCharm() {
    row.innerHTML = "";
    for (i = 0; i < document.tagsize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: #0F9D58;' id='" + i + "column'>&nbsp;</td>")
    }
    for (i = 0; i < document.linesize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: #4285F4;' id='" + i + "column'>&nbsp;</td>")
    }
    for (i = 0; i < document.setsize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: #DB4437;' id='" + i + "column'>&nbsp;</td>")
    }
    for (i = 0; i < document.wordsize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: #F4B400;' id='" + i + "column'>&nbsp;</td>")
    }
}