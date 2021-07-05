import './main.scss';

function toggleNav() {
    let updateElement = document.querySelector(".slide-menu");
 //toggle adds a class if it's not there or removes it if it is.
 updateElement.classList.toggle("open");
 console.log(updateElement);
}    


