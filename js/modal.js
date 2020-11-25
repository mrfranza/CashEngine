// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function ApplyChanges() {
    cachesize = document.getElementById('cache_size').value;
    blocksize = document.getElementById('block_size').value;
    addresslenght = document.getElementById('address_lenght').value;
    nway = document.getElementById('nway').value;

    document.cachesize = cachesize;
    document.blocksize = blocksize;
    document.addresslenght = addresslenght;
    document.nway = nway;

}

function CheckSettings() {
    cachesize = document.getElementById('cache_size').value;
    blocksize = document.getElementById('block_size').value;
    addresslenght = document.getElementById('address_lenght').value;
    nway = document.getElementById('nway').value;

    //BLOCK
    var checkblock = cachesize % blocksize;
    if (checkblock == 0) {
        document.getElementById('wrp-cache-modal').style.backgroundColor = "#272727";
    } else {
        alert("BLOCK ERROR")
        document.getElementById('wrp-cache-modal').style.backgroundColor = "red";
        return false;
    }

    //CHECK CACHE SIZE
    var checkcache = cachesize % (nway * blocksize);
    if (checkcache == 0) {
        //x is a multiple of y --> cache valid
        document.getElementById('wrp-block-size').style.backgroundColor = "#272727";
    } else {
        //x is not a multiple of y --> cache not valid
        alert("CACHE ERROR \nData Cache size must be a multiple of associativity*blocksize")
        document.getElementById('wrp-block-size').style.backgroundColor = "red";
        return false;
    }
    return true;
}


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    if (CheckSettings()) {
        ApplyChanges()
        try {
            Refresh()
            modal.style.display = "none";
        } catch (error) {
            //LOL
        }
    }
}