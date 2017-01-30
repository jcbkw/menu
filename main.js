function hideMenu(menu) {

    menu.className = "unrender";

}


function showMenu(menu) {
    
    menu.className = "";

}

function toggleMenu(menu) {

    if (menu.className === "unrender") {

        showMenu(menu);
    }
    else {
        
         hideMenu(menu);
    }
}

function bindEvent() {

    document.getElementById("mybutton").addEventListener("click", function(){
                    
        toggleMenu(document.getElementById('mymenu'));

    }, false);
    
}

//window.addEventListener("load", bindEvent);
document.addEventListener("DOMContentLoaded", bindEvent, false);