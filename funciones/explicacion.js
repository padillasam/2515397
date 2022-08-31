function primo(num){
    var cont=0;
    for (let i = 1; i < num; i++) {
        num%i==0?cont++:cont=cont;        
    }
    //cont>2?return 'no primo': return `no primo`;
    return cont>2? 'no primo': `primo`;
    // if (cont>2) {
    //     return 'no primo'
    // } else {
    //     return `primo`
    // }
}

console.log(primo(11));

var x=11
x%2==0 ? console.log('par'):console.log('impar')
//condición?valor si verdadero: valor si falso

if (x%2==0) {
    console.log('par')
} else {
    console.log('impar')
}

//FUNCION PARA DETERMINAR VOCALES Y CONSONANTES
// const palabra="agosto";
// const vowels=['a','e','i','o','u','A','E','I','O','U']

// function cuantasLetras(cadena) {
//     var cont=0;
//     cadena.forEach(element => {
//         if (element.in(vowels)) {
//            cont++; 
//         }
//     });
//     return cont;
// }
//  console.log(cuantasLetras('agosto'));

