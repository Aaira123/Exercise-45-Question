"use strict";
let guestlist = ['sara', 'sana', 'sidra', 'rida', 'sania'];
let absent = 'sara';
let newguest = 'isha';
guestlist[0] = newguest;
guestlist.unshift('mishawal', 'shela', 'rafia');
console.log('\nUnfortunately we can not arrange big table ,Only two people allow.');
while (guestlist.length > 2) {
    let remove_guest = guestlist.pop();
    console.log(`Sorry Madam.${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guestlist.length; i++) {
    console.log('Respected Madam ' + guestlist[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n');
}
guestlist.splice(0, 2);
console.log(guestlist);
