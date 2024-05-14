"use strict";
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`);
        ;
    }
}
console.log("enjoy your sandwich sana arshad");
sandwich("capsicum", "tomato", "chiken");
sandwich("beef", "cheese");
sandwich("garlic chicken", "mayo sauce");
