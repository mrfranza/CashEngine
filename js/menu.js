var isOpen = false;

function MenuToggle() {
    menu = document.getElementById('menu');
    icons = document.getElementsByClassName('icon-wrapper');
    tgl = document.getElementById('tgl-menu');

    if (isOpen == false) {
        menu.style.color = "#333333";
        menu.style.left = "-162px"
        tgl.innerHTML = '<i class="link-icon fas fa-arrow-right icon-menu"></i>';

        isOpen = true;
    } else if (isOpen == true) {
        menu.style.color = "white";
        menu.style.left = "0px"
        tgl.innerHTML = '<i class="link-icon fas fa-arrow-left icon-menu"></i>';
        isOpen = false;
    }

}

function OpenAddress() {
    Refresh();
    document.getElementById('addressing_info').style.display = "block";
}

function Refresh() {
    RefreshRAMSize();
    RefreshLinesInfo();
    RefreshSetInfo();
    RefreshWordSize();
    RefreshTagSize();
    GenCharm();
}

function RefreshLinesInfo() {
    if (document.nway == 1) {
        document.linesize = Math.log2(document.cachesize / document.blocksize);
        document.getElementById('cache_lines').innerHTML = Math.log2(document.cachesize / document.blocksize) + " bit/s";
    } else if (document.nway == (document.cachesize / document.blocksize)) {
        document.linesize = 0;
        document.getElementById('cache_lines').innerHTML = "0 [Fully Associative]"
    } else {
        document.linesize = 0;
        document.getElementById('cache_lines').innerHTML = "0 [Set Associative]"
    }
}

function RefreshRAMSize() {
    document.getElementById('ram_size').innerHTML = Math.pow(2, document.addresslenght) + " Bytes";
}

function RefreshSetInfo() {
    if (document.nway == 1) {
        document.setsize = 0;
        document.getElementById('cache_sets').innerHTML = "Direct Associative [N.Way = 1] <br> 0 bit";
    } else if (document.nway == (document.cachesize / document.blocksize)) {
        document.setsize = 0;
        document.getElementById('cache_sets').innerHTML = "Fully Associative [N.Way = NLines] <br> 0 bit";
    } else {
        document.setsize = Math.log2((document.cachesize / document.blocksize) / document.nway);
        document.getElementById('cache_sets').innerHTML = Math.log2((document.cachesize / document.blocksize) / document.nway) + " bit/s";
    }
}

function RefreshWordSize() {
    document.wordsize = Math.log2(document.blocksize);
    document.getElementById('word_bits').innerHTML = Math.log2(document.blocksize) + " bit/s";
}

function RefreshTagSize() {
    if (document.nway == 1) {
        document.tagsize = document.addresslenght - (Math.log2(document.cachesize / document.blocksize) + Math.log2(document.blocksize));
        document.getElementById('tagbits').innerHTML = document.addresslenght - (Math.log2(document.cachesize / document.blocksize) + Math.log2(document.blocksize)) + " bit/s";
    } else if (document.nway == (document.cachesize / document.blocksize)) {
        document.tagsize = document.addresslenght - Math.log2(document.blocksize);
        document.getElementById('tagbits').innerHTML = document.addresslenght - Math.log2(document.blocksize) + " bit/s";
    } else {
        document.tagsize = document.addresslenght - (Math.log2((document.cachesize / document.blocksize) / document.nway) + Math.log2(document.blocksize));
        document.getElementById('tagbits').innerHTML = document.addresslenght - (Math.log2((document.cachesize / document.blocksize) / document.nway) + Math.log2(document.blocksize)) + " bit/s";
    }
}