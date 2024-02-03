let sentence = `I am a good audience`;
let subject = `English`;
let sub_ject =  ` english`;

if(sub_ject.toLowerCase().trim()=== subject.toLowerCase().trim() ){
    document.write('Both are English.');
}
else{
    document.write('Both are difference.');
}

for( let letter of sentence){
    document.write('<br>' + letter);
}

let split = sentence.split( ' ' );
document.write(' <br> To see split :- ' + split);

let reverse = ' ';
for (let leter of sentence ){
    reverse = leter + reverse;
}

document.write(' <br> To see reverse :- ' + reverse);

let reversed = sentence