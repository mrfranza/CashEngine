var tabellabody = document.getElementById("cash_info_design_body");
var tabella = document.getElementById("cash_info_design");

function DrawTable() {
    tabella.style.height = '350px';
    tabella.style.width = '100%';
    tabella.style.border = "2px white solid"
    tabella.style.padding = "10px"

    cachesize = document.cachesize;
    numberoflines = document.cachesize / document.blocksize;
    numberofsets = document.nway;

    tabellabody.innerHTML = "";

    if (numberofsets == numberoflines) {
        //DISEGNA TABELLA CON UNA riga
        //una linea
        //piu set
        //full associative

        //CREA LA ROW 1 = unica linea
        tabellabody.insertAdjacentHTML('beforeend', "<tr style='background-color: #252525;' id='unicalinea' ></tr>")

        unicalinea = document.getElementById("unicalinea");

        for (i = 0; i < document.nway; i++) {
            //per ogni set fai una colonna
            unicalinea.insertAdjacentHTML('beforeend', "<td style='border-radius:0;background-color:#DB4437;'>" + formatBytes(document.blocksize) + "</td>")
        }

    } else if (numberofsets == 1) {
        //DISEGNA TABELLA CON UNA colonna
        //un set 
        //piu linee
        //direct associative

        for (i = 0; i < numberoflines; i++) {
            //per ogni set fai una colonna
            tabellabody.insertAdjacentHTML('beforeend', '<tr style="z-index:20000;border-radius:0;background-color:#4285F4;"><td style="width:100%;border-radius:0;background-color:#4285F4;">' + formatBytes(document.blocksize) + '</td></tr>');
        }
    } else if (numberofsets > 0 && numberofsets != 1 && numberofsets != numberoflines) {
        //tot linee per set
        tabellabody.insertAdjacentHTML('beforeend', '<tr id="rigamenu" style="border-radius:0;"></tr>');
        tmpriga = document.getElementById("rigamenu");
        tmpriga.insertAdjacentHTML('beforeend', "<td style='border-radius:0;background-color:#272727;'></td>")
        for (k = 0; k < document.nway; k++) {
            tmpriga.insertAdjacentHTML('beforeend', "<td style='border-radius:0;background-color:#F4B40040;'>LINE/BLOCK</td>")
        }

        //quante righe? linee/nway
        divisione = numberoflines / numberofsets;

        for (i = 0; i < divisione; i++) {
            tabellabody.insertAdjacentHTML('beforeend', '<tr id="riga' + i + '" style="border-radius:0;"></tr>');
            tmpriga = document.getElementById("riga" + i);

            //titolo
            tmpriga.insertAdjacentHTML('beforeend', "<td style='border-radius:0;background-color:#9c3228;padding:1px;'>SET " + dec2Bin(i) + " --></td>")
                //le colonne sono document.nway
            for (k = 0; k < document.nway; k++) {
                tmpriga.insertAdjacentHTML('beforeend', "<td style='border-radius:0;background-color:#4285F4;'>" + formatBytes(document.blocksize) + "</td>")
            }
        }
    }
}

DrawTable();