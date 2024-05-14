interface item {
    name:string
    price:number
}
// create two objects item =
const book: item ={
    name: "ESSENTIAL TYPESCRIPT",
    price:500
}
const apple: item ={
    name: "APPLE",
    price: 200
}
console.log(`book name: ${book.name} , price: $${book.price}`)
console.log(`apple name: ${apple.name} , price: $${apple.price}`)