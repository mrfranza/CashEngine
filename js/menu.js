var isOpen = false;

function MenuToggle(){
    menu = document.getElementById('menu');
    icons = document.getElementsByClassName('icon-wrapper');
    tgl = document.getElementById('tgl-menu');

    if(isOpen == false){
        menu.style.color = "#333333";
        menu.style.left = "-162px"
        tgl.innerHTML = '<i class="link-icon fas fa-arrow-right icon-menu"></i>';

        isOpen = true;
    }else if(isOpen == true){
        menu.style.color = "white";
        menu.style.left = "0px"
        tgl.innerHTML = '<i class="link-icon fas fa-arrow-left icon-menu"></i>';
        isOpen = false;
    }

}