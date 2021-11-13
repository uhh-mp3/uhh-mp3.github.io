let array1 = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];
let array2 = [1200, 1140, 1400, 1150, 1400, 2500, 2950];
for(i=0; i<chisla.length; i++){
    if(max < chisla[i]){
    max = chisla[i];
    }}
console.log(`День - прибуток`);

let sum = 0;
for(i=0; i<array1.length; i++){
   console.log(`${array1[i]} - ${array2[i]}`);
   sum = sum + array2[i]
}
console.log(sum);