'use strict';

//VARIABLES
const navLinks = document.querySelectorAll('.js-nav-link');
const navSubmenus = document.querySelectorAll('.js-submenu');


//DOM
const highlightEl = document.createElement('span');
highlightEl.classList.add('highlight');
document.body.append(highlightEl);


//FUNCTIONS
function highlightLink() {
    //Gives us all the information about where the element is positioned in the page
    const linkCoordinates = this.getBoundingClientRect();
    //Adapt dimensions to each element's size and position
    highlightEl.style.width = `${linkCoordinates.width}px`;
    highlightEl.style.height = `${linkCoordinates.height}px`;
    highlightEl.style.transform = `translate(${linkCoordinates.left}px, ${linkCoordinates.top}px)`;
    //Show or hide the submenu
    for(let submenu of navSubmenus){
        if(submenu.id === this.id){
                submenu.classList.remove('js-hidden');
                submenu.style.width = `${linkCoordinates.width + 150}px`;
                submenu.style.transform = `translate(${linkCoordinates.left - 75}px, ${linkCoordinates.top}px)`;
        }else{
            submenu.classList.add('js-hidden');
        }
    }
}

function removeHighlight() {
    highlightEl.style = 'none';
    for(let submenu of navSubmenus){
            submenu.classList.add('js-hidden');
    }
}


//EVENT LISTENERS
for(let link of navLinks){
    link.addEventListener('mouseenter', highlightLink);
}

for(let link of navLinks){
    link.addEventListener('mouseleave', removeHighlight);
}