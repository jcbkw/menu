function hideMenu(menu) {

    menu.style.display = "none";

}


function showMenu(menu) {
    
    menu.style.display = "block";

}

function toggleMenu(menu) {

    if (menu.style.display === "none" ) {

        showMenu(menu);
    }
    else {
        
         hideMenu(menu);
    }
}
