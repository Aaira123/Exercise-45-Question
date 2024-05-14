let mynumber:number[] =[1,2,3,4,5,6,7,8,9];
for(let i = 0; i < mynumber.length; i++){
    if(mynumber[i] == 1){
        console.log(`${mynumber[i]}st`);
        
    }else if(mynumber[i] == 2){
        console.log(`${mynumber[i]}nd`);
        
    }else if(mynumber[i] ==3){
        console.log(`${mynumber[i]}rd`);
        
    }else if(mynumber[i] >=4 && mynumber[i] <= 9){
        console.log(`${mynumber[i]}th`);
        
    }
}