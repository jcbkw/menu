function toggleMenu(menu) {

    if (menu.classList.contains("unrender")) {

        menu.classList.remove("unrender");
        
    }
    else {

        menu.classList.add("unrender");
    
    }

}

function mainMenuButtonClickHandler(event) {
                    
    toggleMenu(document.getElementById('left-pane'));

}

function subMenuItemsClickHandler(event){
    
    event.preventDefault();

    if (this.classList.contains("selected")) {

        this.classList.remove("selected");
        
    }
    else {

        this.classList.add("selected");
    } 

}

function bindEvents() {

    document.getElementById("mytask").addEventListener("click", subMenuItemsClickHandler, false);

    document.getElementById("mybutton").addEventListener("click", mainMenuButtonClickHandler, false);
    
}

//window.addEventListener("load", bindEvent);
document.addEventListener("DOMContentLoaded", bindEvents, false);