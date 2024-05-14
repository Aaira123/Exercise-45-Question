function describe_city(nameofcity:string, country: string = "pakistan"){
    return `${nameofcity} is in ${country}`;
};

let city1 = describe_city("karachi,Pakistan");
let city2 = describe_city("UAE,Dubai");
let city3 = describe_city("Delhi,India");
let city4 =describe_city("Cape Town,South Africa")


console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);




