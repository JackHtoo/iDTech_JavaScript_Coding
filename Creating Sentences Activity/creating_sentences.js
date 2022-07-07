
const words = ['This', 'is', 'JavaScript', 'Coding!'];

var sentence = ' ';

function createSentence() {
    for(x in words){
       sentence = sentence + ' ' + words[x]
    }
    return sentence; 
}

console.log(createSentence());