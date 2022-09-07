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

// List of global variables.

const nav_list = document.getElementById('navbar__list')


// all the sections corresponding to class .landing__container have been selected

const sectionArray = document.querySelectorAll('.landing__container')

// looping through each section and appending nav link corresponding to the section and adding event listener to each link to scroll to that particular section.

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


// invoking the makeActive function on each scroll event

document.addEventListener('scroll', function() {
    makeActive()
})

// function to highlight the section and its corresponding nav link by applying active state to the section and nav link class and applying css to it. Section is highlighted using position fetched by getBoundingClientRect method on section which return the position of the rectange from the top left of viewport.

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



