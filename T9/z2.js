/*let pov = [1, 4, 4, 4, 6, 7, 8, 9, 5, 4, 2, 3, 3, 6, 7];
let array = [];
array.push();





for(i=0; i<pov.length; i++){
if(array.indexOf(pov[i]) == -1){
    array.push(pov[i])
}}
           
console.log(pov);
console.log(array)
*/
let array1 = [1, 2, 3, 4];
let array2 = [7, 8, 0, 9, 10];
let final = [];
for(i=0; i<array1.length; i++){
    if(final.indexOf(array1[i]) == -1){
        final.push(array1[i])
    }}

    for(i=0; i<array2.length; i++){
        if(final.indexOf(array2[i]) == -1){
            final.push(array2[i])
        }}

        for(i=0; i<array2.length; i++){
            if(array1.indexOf(array2[i]) == -1){
                array1.push(array2[i])
            }}
           
        console.log(array1);
        console.log(array2);
        console.log(final);