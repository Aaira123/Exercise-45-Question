let guest_list : string[] = ['sara','sana','sidra','rida','sania'];

let not_present: string = 'sara';
let new_guest: string = 'isha';
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('respected madam ' + guest_list[i] + ', \nwe invited you on dinner tomorrow.\nThank you\n')
}
console.log(`Mr. ${not_present} will  not coming tomorrow dinner.`)
guest_list.unshift('mishawal','shela','rafia');
for(let i=0; i<guest_list.length; i++){
    console.log('respected madam ' + guest_list[i] + ', \nwe found a bigger dinner tabla so more guest invited on dinner tomorrow.\nThank you\n')
}