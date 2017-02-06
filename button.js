function setText(element, text){

     element.replaceChild(/*newChild*/document.createTextNode(text), /*oldChild*/element.firstChild);

     // or
     // element.removeChild(element.firstChild);
     // element.appendChild(document.createTextNode(text));

     // or
     // element.innerText = text;

} 