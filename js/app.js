/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
let nav_list = document.getElementById('navbar__list')

let sectionArray = document.querySelectorAll('.landing__container')
for(let section of sectionArray) {
    let id = section.parentNode.id
    let heading = section.children[0].innerText
    let li = document.createElement('li')
    li.setAttribute('class', id)
    li.innerText = heading 
    li.addEventListener('click', function(event) {
        event.preventDefault()
        section.scrollIntoView({behavior: 'smooth'})
    })
    nav_list.append(li)
}

document.addEventListener('scroll', function() {
    makeActive()
})

function makeActive() {
    for(let section of sectionArray) {
        let box = section.getBoundingClientRect()
        if(box.top <= 150 && box.bottom >= 150) {
            section.style.border = '1px solid white'
            let id = section.parentNode.id
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class")      
            
        }
        else {
            section.style.border = 'none'
            let id = section.parentNode.id
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class")          
        }
    }
}




/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


