let chisla = [3, 7, 8, 2, 9, 1];
let max = chisla[0];
let min = chisla[0];

for(i=0; i<chisla.length; i++){
if(max < chisla[i]){
max = chisla[i];
}
}
for(i=0; i<chisla.length; i++){
    if(min > chisla[i]){
    min = chisla[i];
    }
    }

console.log(chisla);
console.log(max);
console.log(min);