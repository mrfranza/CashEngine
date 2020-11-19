var row = document.getElementById("row");


function GenCharm() {
    row.innerHTML = "";
    for (i = 0; i < document.addresslenght; i++) {
        row.insertAdjacentHTML('beforeend', "<td id='" + i + "column'>&nbsp;</td>")
    }
}