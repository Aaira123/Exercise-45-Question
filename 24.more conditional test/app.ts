//test 1
let name1 : string = "sana";
let name2 : string = "sana arshad";
let name3 : string = "miss sana arshad";
if(name1 == name2){
    console.log("names are equal"     );
    
}
else{
   console.log("names are not equal")
}
//test 2



if(name1 != name2){
    console.log("names are equal");
    
}else{
   console.log("names are not equal")
}


//lowercase
//test 3
if(name1 != name3){
    console.log("names are equal");
    
}else{
   console.log("names are not equal")
}

//test 4
if(name2 == name3){
    console.log("names are equal"     );
    
}
else{
   console.log("names are not equal")
}


//numerical test
let age1: number = 10
let age2: number = 20
if (age1 ==10){
    console.log("equal");
    
}

if(age2 !=22){
    console.log("unequal");
    
}


if(age1 <= age2){
    console.log("true");
    
}

if(age2 >= age1){
    console.log("false");
    
}

//and & or operator
if(age1 == 10 && age2 == 20){
    console.log("eligible");
    
}

if(age1 ==10 || age2 !=20){
    console.log("uneligible");
    
}


//testvin array
let number: number[] =[1,2,3,4];
console.log("Is 3 in number? I predict True");
console.log(3 in number);


//not in array
console.log (5 in number)




