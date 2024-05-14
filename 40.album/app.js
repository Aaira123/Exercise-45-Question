"use strict";
function myAlbum(artistName, albumtitle) {
    return { artistName, albumtitle };
}
let album1 = myAlbum("Ali", "Rang-e-Mohabbat");
let album2 = myAlbum("Madad", "Roshan Andhera");
let album3 = myAlbum("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
// no.of tracks
function myAlbum2(artistName, albumtitle, numberofTracks) {
    return { artistName, albumtitle, numberofTracks };
}
let album4 = myAlbum2("Ali", "khubsurat", 30);
let album5 = myAlbum2("Madad", "khushboo k rang", 50);
let album6 = myAlbum2("sana", "zindagi k rang", 60);
console.log(album4);
console.log(album5);
console.log(album6);
