var row = document.getElementById("row");

var tag = document.tagsize;
var line = document.linesize;
var set = document.setsize;
var word = document.wordsize;

function GenCharm() {
    row.innerHTML = "";
    for (i = 0; i < document.tagsize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: rgba(55, 177, 48, 0.5);' id='" + i + "column'>&nbsp;</td>")
    }
    for (i = 0; i < document.linesize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: rgba(59, 74, 191, 0.5);' id='" + i + "column'>&nbsp;</td>")
    }
    for (i = 0; i < document.setsize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: rgba(169, 58, 58, 0.5);' id='" + i + "column'>&nbsp;</td>")
    }
    for (i = 0; i < document.wordsize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: rgba(196, 150, 0, 0.5);' id='" + i + "column'>&nbsp;</td>")
    }
}