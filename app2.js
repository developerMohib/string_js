
/**
 * Task-1:
 * Count how many times a string has the letter a
 * 
 */

let sentence1 = 'kotha rakhe ni boruna i am a loser';
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
/**
 * 
 * Task-4:
 * If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 * 
 * 
 * Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
 */


/**
 * Task-5:
 * Capitalize Every first Letter of each word in a String
 */

let capitalize = 'capitalize every first Letter of each word in a string';

let simple = [ 23, 22, 12, 34, 24, 56, 5, 11, 100 ];
document.write('my initial array ', simple , '<br>')
for (const item of simple) {
    if ( item % 5 === 0 ){
        break;
    }
    document.write(item, ' ')
}
document.write(' after divisible by 5')