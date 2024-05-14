"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
let mycar = createCar("toyota", "corolla", { color: "silver", year: "2023" });
console.log(mycar);
