var tabella = document.getElementById("cash_info_design");

var line = document.linesize;
var set = document.setsize;
var word = document.wordsize;

function DrawTable() {
    c.style.height = '350px';
    c.style.width = '100%';
    c.style.border = "2px white solid"

    cachesize = document.cachesize;
    blocksize = document.blocksize;
    numberoflines = document.cachesize / document.blocksize;
    numberofsets = document.nway;

    if (numberofsets == numberoflines) {
        //DISEGNA TABELLA CON UNA LINEA
    } else if (numberofsets = 1) {
        //DISEGNA TABELLA CON UN SET
    } else if (numberofsets > 0) {
        //DISEGNA TABELLA CON PIU' DI UN SET
    }

    tabella.innerHTML = "";



    /*
    for (i = 0; i < document.tagsize; i++) {
        row.insertAdjacentHTML('beforeend', "<td style='background-color: rgba(55, 177, 48, 0.5);' id='" + i + "column'>&nbsp;</td>")
    }
    */
}

DrawTable();