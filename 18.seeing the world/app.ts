let places : string[] = ['turkey','lahore','cape town','bankok','murree'];
 console.log('original: ' + places);

console.log("alphabetical order:", [...places].sort());

  console.log('original: ' + places);

 console.log('reverse alphabetical order: ' + [...places].sort().reverse());
 console.log('original after reverse sorting:' + places);

 console.log('original ' + places.sort());

 console.log('original ' + places.sort().reverse());

 console.log('reverse alphabetical order: ', [...places].sort().reverse());