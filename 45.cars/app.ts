type car ={
    manufacture : string
    model : string
    [key:string]: any;
}
function createCar(manufacture:string, model:string, optional:Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
let mycar:car = createCar("toyota","corolla", { color: "silver" , year: "2023"})
console.log(mycar);
