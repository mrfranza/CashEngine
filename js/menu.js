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
    GenCharm();
}

function RefreshLinesInfo() {
    var cl = document.getElementById('cache_lines').innerHTML = Math.log2(document.cachesize / document.blocksize) + " bit/s";
}

function RefreshRAMSize() {
    document.getElementById('ram_size').innerHTML = Math.pow(2, document.addresslenght) + " Bytes";
}

function RefreshSetInfo() {
    if (document.nway == 1) {
        document.getElementById('cache_sets').innerHTML = "Direct Associative [N.Way = 1]";
    } else if (document.nway == (document.cachesize / document.blocksize)) {
        document.getElementById('cache_sets').innerHTML = "Fully Associative [N.Way = NLines]";
    } else {
        document.getElementById('cache_sets').innerHTML = Math.log2((document.cachesize / document.blocksize) / document.nway) + " bit/s";
    }
}

function RefreshWordSize() {
    document.getElementById('word_bits').innerHTML = Math.log2(document.blocksize) + " bit/s";
}