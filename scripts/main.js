function hideLoadingScreen (){
   
   document.getElementById("overlay1").classList.add("unrender");
  
}

function showLoadingScreen (){
   
   document.getElementById("overlay1").classList.remove("unrender");
  
}

function aTagClickEventListener (target, eventFunctionName) {

 var 
 aTags = target.getElementsByTagName("a"), 
 i;

    if (aTags) {

        for(i = 0; i < aTags.length; i++) {
            //"http" and "https" protocal urls for achors that will reload the window screen.
            if (aTags[i].href.indexOf('http') > -1 || aTags[i].href.indexOf('https') > -1) { 

                aTags[i].addEventListener("click", eventFunctionName, false);

            } 
        }
    }
 }

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

    var leftPane = document.getElementById('left-pane');

    toggleMenu(leftPane, document.getElementById("mybutton"));
    aTagClickEventListener (leftPane, showLoadingScreen);
    
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
    document.getElementById('portal').addEventListener("load", hideLoadingScreen, false);
    hideLoadingScreen();
}

//window.addEventListener("load", bindEvent);
document.addEventListener("DOMContentLoaded", bindEvents, false);