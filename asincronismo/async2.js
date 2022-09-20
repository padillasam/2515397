let counter=0;

function forCounter(x){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            counter+=1;
           resolve(`ready ${x} counter ${counter} `) 
        }, 2000);
    })
}

async function solucion(x){
//console.log(`valor de x ${x}`)
//console.log(`valor de counter ${counter}`)
const local=await forCounter(x);
console.log(local);
}

for (let i = 0; i < 9; i++) {
    solucion(i);    
}

