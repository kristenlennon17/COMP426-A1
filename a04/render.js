/**
 * Course: COMP 426
 * Assignment: a04
 * Author: Kristen Lennon
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;

/**
 * hero.first - first name
 * hero.last - last name 
 * hero.name - superhero name
 * hero.img - hero image displayed via <img> or background-image
 * hero.color - foreground color 
 * hero.backgroundColor - background color 
 * hero.description - short paragraph 
 * hero.firstSeen - month and year of first comic (JavaScript Date object)
 * Must have <div>, a <p> and a <span> 
 * Must include an "edit" <button> 
 * 
 */
//section class = "section"><div class = "container"><section class = "container" style = "color: ${hero.backgroundColor};"><img src = "${hero.img}" alt="Hero Image"></img><h1>${hero.first}</h1></section></div></section>
    var obj = `<div>
                <section class = "container" style = "background-color: ${hero.backgroundColor};">
                <h style = "color:${hero.color};">${hero.name}</h>
                <img src = "${hero.img}" alt="Hero Image"></img>
                <p>${hero.first} ${hero.last}</p>
                <p>${hero.description}</p>
                <span>${hero.firstSeen}</span>
                <div><button type = "button">edit</button></div>
                </section>
               </div>`;
    return obj;
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;

/**
 * Form fields (<input>, <textarea>) for editing: hero.first, hero.last, hero.name, hero.description, hero.firstSeen
 * Form fields initially pre-populated with field values from hero object
 * Must include, <form> tag containing at least three <input> tags and a <textarea> tag
 * Must include "save" <button> 
 * Must include "cancel" <button> 
 */
    var obj = `<form> 
                Hero Name:<br> 
                <input type="text" name="heroname" value="${hero.name}">
                <br>
                First Name:<br>
                <input type="text" name="firstname" value="${hero.first}">
                <br>
                Last Name:<br> 
                <input type="text" name="lastname" value="${hero.last}">
                <br>
                Hero Description:<br>
                <textarea type="text" name="descript">${hero.description}</textarea>
                <br> 
                First Seen:<br>
                <input type="text" name="firstseen" value="${hero.firstSeen}">
                <br>
                <div><button type = "submit">save</button>
                <button type = "button">cancel</button></div>
                </form> 
                `
    return obj; 

};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    let arr = [];
    for (let i = 0; i < heroes.length; i++) {
        console.log(heroes[i]);
        arr[i] = renderHeroCard(heroes[i]);
    }

    // TODO: Append the hero cards to the $root element
    $root.append(arr);
    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // // TODO: Generate the hero edit form using renderHeroEditForm()

    // // TODO: Append the hero edit form to the $root element
    // let arr = [];
    // for (let i = 0; i < heroes.length; i++) {
    //     console.log(heroes[i]);
    //     arr[i] = renderHeroCard(heroes[i]);
    // }

    // TODO: Append the hero cards to the $root element
    $root.append(renderHeroEditForm(randomHero));
    return $root;
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
