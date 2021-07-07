import './main.scss';

<<<<<<< HEAD
<<<<<<< HEAD
const changeHandler = function() {
    // Select unchecked radio buttons. Returns a NodeList.
    const notfave = document.querySelectorAll('input:not(:checked)');

    // Create a new array from the NodeList
    notfave.forEach(function(item) {
        // Find the parent node, and add a 'fade' class
        item.parentNode.classList.add('fade');
    });
};

const form = document.querySelector('form');
form.addEventListener('change', changeHandler);

const transitionendHandler = function(domEvent) {
    domEvent.target.setAttribute('hidden', '');
    document.getElementById('thanks').removeAttribute('hidden');
};

document.addEventListener('transitionend', transitionendHandler);
=======

>>>>>>> 5066fc61782ae2f9b647e037b6696dd26c7c8490
=======
function toggleNav() {
    let updateElement = document.querySelector(".slide-menu");
 //toggle adds a class if it's not there or removes it if it is.
 updateElement.classList.toggle("open");
 console.log(updateElement);
}    


>>>>>>> e9ed5e54c24ade516b0bfa2cd9715d2562e34785
