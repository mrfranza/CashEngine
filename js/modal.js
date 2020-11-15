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

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    ApplyChanges()
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        ApplyChanges()
        modal.style.display = "none";
    }
}