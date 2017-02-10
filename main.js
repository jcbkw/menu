

function toggleMenu(menu, button) {

    if (menu.classList.contains("unrender")) {

        menu.classList.remove("unrender");
        setText(button, "Hide");

    }
    else {

        menu.classList.add("unrender");
        setText(button, "Show");

    }

}

function menuTriggerButtonClickHandler(event) {
                    
    toggleMenu(document.getElementById('left-pane'), event.target);

}

function mainMenuItemsClickHandler(event){
    
    event.preventDefault();

    if (this.classList.contains("selected")) {

        this.classList.remove("selected");
    }
    else {

        this.classList.add("selected");
    } 

}

function subMenuItemsClickHandler(event) {

    if (event.target.nodeName === "A" ) {

        toggleMenu(document.getElementById('left-pane'), document.getElementById("mybutton"));

    }

}

function bindEvents() {

    document.getElementById("mytask").addEventListener("click", mainMenuItemsClickHandler, false);
    document.getElementById("mybutton").addEventListener("click", menuTriggerButtonClickHandler, false);
    document.getElementsByClassName("sub-menu")[0].addEventListener("click", subMenuItemsClickHandler, false);

}

//window.addEventListener("load", bindEvent);
document.addEventListener("DOMContentLoaded", bindEvents, false);