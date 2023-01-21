const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    expr = [...expr]
    let arrNew = [];
    while(expr.length>0) {
       let arr = expr.splice(0, 10);
       arrNew.push(arr);
    } 

    arrNew.forEach(item => item.filter(e => {
        if(e === '1') {
           let index =  item.indexOf(e);
        
           item.splice(0, index);
        } 
    }
    ))
    
    for(let i=0; i<arrNew.length; i++) {
        arrNew[i] = arrNew[i].join('');
        arrNew[i] = arrNew[i].replace(/10/g, '.');
        arrNew[i] = arrNew[i].replace(/11/g, '-');
    }

    let text = [];
    
    for(let j=0; j<arrNew.length; j++) {
        if(arrNew[j] === '**********') {
            text[j] = ' ';
        } else { 
            text[j] = MORSE_TABLE[arrNew[j]];
        }
    }
return text.join('');
}

module.exports = {
    decode
}