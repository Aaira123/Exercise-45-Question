"use strict";
let current_users = ["sana", "saba", "admin", "rafi", "sania"];
let new_users = ["mishi", "shela", "sidra", "admin", "mari"];
new_users.forEach(newUser => {
    if (current_users.some((currentUsers) => currentUsers.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
