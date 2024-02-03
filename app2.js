
/**
 * Task-1:
 * Count how many times a string has the letter a
 * 
 */

let sentence1 = 'kotha rakhe ni boruna';
document.write( '<br> kotha == '+ typeof(sentence1) );
let make_array = sentence1.split('');
console.log(' <br> made array to this sentence :  ' + make_array);
document.write(' <br> made array to this sentence :  ' + make_array);

let is_array = Array.isArray(make_array);
document.write('<br> is it an array : '+is_array)


let letter_a = 'a';
let sum = 0;
for (let i = 0; i < make_array.length; i++){
    let x = make_array[i];
    if( x == 'a'){ 
        sum++;
    }
}
document.write( '<br> kotha rakhe ni boruna. Here a comes ' + sum + ' times. <br>');


/*
Task-2:
Count how many times a string has the letter a or A
*/

let big_hand = sentence1.toUpperCase();


document.write(' <br> Big Hand = '+ big_hand+ '<br>')

let sum_A = 0;

for ( let i = 0; i < big_hand.length; i++){
    let x = big_hand.charAt(i);
    if(x == 'A'){
        sum_A++;
    }
}
document.write('Big Hand A comes '+ sum_A + ' times. <br>')

/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/
