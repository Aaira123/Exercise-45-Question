
function makeGreat(magicians:string[]): string[] {
    let greatMagicians:string[] = [];
    for(let i=0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }

return greatMagicians;
}
let magicians1 : string[] =["chris","David","Alice"];
//let greatMagicians2:string[] = make_great(magicians1);

//show_magicians(magicians1);

//show_magicians(greatMagicians2);

