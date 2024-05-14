"use strict";
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }
    return greatMagicians;
}
let magicians1 = ["chris", "David", "Alice"];
//let greatMagicians2:string[] = make_great(magicians1);
//show_magicians(magicians1);
//show_magicians(greatMagicians2);
