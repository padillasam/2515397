function promisoria(x){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            //console.log('Promesa que ocurrira con segundos de retardo')
            resolve(`Maicol se fue por el agua en ${x}`);
        }, 2000);
    })
}

async function usarPromesa(parametro){    
    const reciboPromesa=await promisoria(parametro);
    console.log(reciboPromesa)
    console.log('Alistando ingredientes, esperando el agua');
}

usarPromesa('a pie');



// promisoria()
//     .then((valor)=>{
//         console.log(valor);
//         console.log('Alistando ingredientes, esperando el agua');
//         return 'Ya estuvo el almuerzo, pueden servir'
        
//     })
//     .then((value)=>{
//         console.log(value)
//     })
