function toggleMenu (menu, button) {

    if (menu.classList.contains("unrender")) {

        menu.classList.remove("unrender");
        setText(button, "Hide");

        document.body.addEventListener("click", closeMenuWhenUserClicksOutside, false);

    }
    else {

        document.body.removeEventListener("click", closeMenuWhenUserClicksOutside, false);

        menu.classList.add("unrender");
        setText(button, "Show");

    }

}

function toggleLeftPaneMenu () {

    toggleMenu(document.getElementById('left-pane'), document.getElementById("mybutton"));

}

function menuTriggerButtonClickHandler (event) {

    event.stopPropagation();

    toggleLeftPaneMenu();

}

function mainMenuItemsClickHandler (event){
    
    event.preventDefault();

    if (this.classList.contains("selected")) {

        this.classList.remove("selected");
    }
    else {

        this.classList.add("selected");
    } 

}

function subMenuItemsClickHandler (event) {

    if (event.target.nodeName === "A") {

        toggleLeftPaneMenu();

    }

}

function closeMenuWhenUserClicksOutside (event) {

    var currentItem = event.target;

    while (currentItem) {

        if (currentItem.id === 'left-pane') {

            return;

        }

        currentItem = currentItem.parentNode;

    }

    toggleLeftPaneMenu();
    
}

function bindEvents () {

    document.getElementById("mytask").addEventListener("click", mainMenuItemsClickHandler, false);
    document.getElementById("mybutton").addEventListener("click", menuTriggerButtonClickHandler, false);
    document.getElementsByClassName("sub-menu")[0].addEventListener("click", subMenuItemsClickHandler, false);

}

//window.addEventListener("load", bindEvent);
document.addEventListener("DOMContentLoaded", bindEvents, false);