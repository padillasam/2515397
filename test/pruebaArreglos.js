//Angie Cubillos
y= 100
let A = []
let V = Math.round((Math.random()*20-5)+10)
console.log(V)
for (let i = 0; i < V; i++){
    A [i]  = Math.round(Math.random()*100)
}
console.log(A)

let C = []
let H = Math.round((Math.random()*20-5)+5)
console.log(H)
for (let i = 0; i < H; i++){
    C [i]  = Math.round(Math.random()*100)
}
console.log(C)

let M = []
let L = Math.round((Math.random()*20-5)+5)
console.log(L)
for (let i = 0; i < L; i++){
    f [i]  = Math.round(Math.random()*100)
}
console.log(f)


//cual de los tre arreglos es el mas grande?

if ((V >= H)&&(V >= L)){
   console.log('el arreglo',V,'es mayor a',H,'y',L);
} else if ((H >= V)&&(H >= L)){
    console.log('el arreglo',H,'es mayor a',,'y',);
} else ((L >= V)&&(L >= H))
    console.log('el arreglo',g,'es mayorclear a',,'y',);

//Johan Marquez
let v=[]
  t=Math.round((Math.random(5)*20)+5)                         
  console.log (t)          
  for (let i = 0; i < t; i++) {       
  v[i]=Math.round(Math.random()*100)
  }
  console.log(v)  
  for (let i = 0; i < v.length; i++) { 
        
        }if (v %2==0){
            console.log('es par',v)
        }else{
            console.log('es impar',v)
        }
             
      
    
  //console.log(v) 

  let a=[]
  t1 =Math.round((Math.random(5)*20)+5)
  console.log (t)          
  for (let i = 0; i < t1; i++) {       
  a[i]=Math.round(Math.random()*100)
  }
  console.log(a)
  for (let i = 0; i < a.length; i++) {    
  }       
    
  //console.log(a)    

  let b=[]
  t=Math.round((Math.random(5)*20)+5)
  console.log (t)          
  for (let i = 0; i < t; i++) {       
  b[i]=Math.round(Math.random()*100)
  }
  console.log(v)
  for (let i = 0; i < b.length; i++) {    
      }       
 
      
// saber cual es mas grande
console.log(b) 
console.log(v.length)
console.log(a.length)
console.log(b.length) 
    if (v.length > a.length ) {
    console.log(v.length)
    } else if (a.length > b.length ) {
    console.log(a.length)
    } else if (b.length > a.length ) {
    console.log(b.length)
    } else if (b.length > v.length ) {
        console.log(b.length)
    }else if (a.length > v.length ) {
        console.log(a.length)
        } 
        


//Johan Castaño

/*
1-Llenar tres arreglos con numeros aleatorios, tamaño entre=min5, max=20
-CUAL DE LOS TRES AREGLOS ES EL MAS GRANDE
-DECIR CANTIDAD DE NUMEROS PARES E IMPARES QUE TIENE EL AREGLO
-RELLENAR AREGLOS MAS PEQUEÑOS, CON DATOS DEL AREGLO MAS GRANDE TIENE DE MAS 

*/


/*
var arreglo_1, arreglo_2, arreglo_3

areglo_1=[]
areglo_2=[]
areglo_3=[]


for (let i = 0; i < 20; i++) {
    arreglo_1[i]=Math.round(Math.random()(5-5)*20)
    arreglo_2[i]=Math.round(Math.random()(5-5)*20)
    arreglo_3[i]=Math.round(Math.random()(5-5)*20)
   
}
console.log(arreglo_1)
console.log(arreglo_2)
console.log(arreglo_3)

*/


//Creación variables aleatorias con cantidad de valores aleatorios
let arregloprueba = [];
let arregloprueba_1 = [];
let arregloprueba_2 = [];
var aleatorio_1=Math.round(Math.random()*20);
var aleatorio_2=Math.round(Math.random()*20);
var aleatorio_3=Math.round(Math.random()*20);
for (let i = 0; i < aleatorio_1; i++) {
   arregloprueba[i]=Math.floor(Math.random(5)*(21))
}
for (let j = 0; j < aleatorio_2; j++) {
    arregloprueba_1[j]=Math.floor(Math.random(5)*(21))
 }
 for (let a = 0; a < aleatorio_3; a++) {
    arregloprueba_2[a]=Math.floor(Math.random(5)*(21))
 }

console.log('ARRAY_1',arregloprueba)
console.log('ARRAY_2',arregloprueba_1)
console.log('ARRAY_3',arregloprueba_2)

//Identificar cual de los tres areglos es el mas grande
console.log('______________________________________________________________________________')
//Array 1
var mayor_1 = 0
for (let b = 0; b < arregloprueba.length; b++) {
    if (mayor_1<arregloprueba[b]) {
        mayor_1 = arregloprueba[b]
    }
    
}
console.log('El numero mayor del ARRAY_1 es: ', mayor_1)

//Array 2
var mayor_2 = 0
for (let c = 0; c < arregloprueba_1.length; c++) {
    if (mayor_2<arregloprueba_1[c]) {
        mayor_2 = arregloprueba_1[c]
    }
    
}
console.log('El numero mayor del ARRAY_2 es: ', mayor_2)



//Array 3
var mayor_3 = 0
for (let d = 0; d < arregloprueba_2.length; d++) {
    if (mayor_3<arregloprueba_2[d]) {
        mayor_3 = arregloprueba_2[d]
    }
    
}
console.log('El numero mayor del ARRAY_3 es: ', mayor_3)


//Decir la cantidad de numeros impares que tiene el arregglo
console.log('______________________________________________________________________________')

var sumap, sumai
sumap=1
sumai=1

for (let e = 0; e < arregloprueba.length; e++) {
    if(arregloprueba%2==0){
        sumap=sumap+1

    }else{
        sumai=sumai+1
    }
    
}
console.log('La cantidad de numeros pares son: ', sumap)
console.log('La cantidad de numeros impares son: ', sumai)

//James Sandoval
//llenar tres arreglos con numerops aleactorios el tamaño de los arreglos estara, minimo 5 maximo 20 elementos.   arreglo entre 0 y 100


let a = []
let b = Math.round((Math.random()*20-5)+10)
console.log(b)
for (let i = 0; i < b; i++){
    a [i]  = Math.round(Math.random()*100)
}
console.log(a)

let c = []
let d = Math.round((Math.random()*20-5)+5)
console.log(d)
for (let i = 0; i < d; i++){
    c [i]  = Math.round(Math.random()*100)
}
console.log(c)

let f = []
let g = Math.round((Math.random()*20-5)+5)
console.log(g)
for (let i = 0; i < g; i++){
    f [i]  = Math.round(Math.random()*100)
}
console.log(f)


//cual de los tre arreglos es el mas grande?

if ((b >= d)&&(b >= g)){
   console.log('el arreglo',b,'es mayor a',d,'y',g);
} else if ((d >= b)&&(d >= g)){
    console.log('el arreglo',d,'es mayor a',b,'y',g);
} else ((g >= b)&&(g >= d))
    console.log('el arreglo',g,'es mayor a',b,'y',d);



//Juan Manuel Garcia
//examen 

//llenar tres arreglos con numeros aleatorios el tamañano de lo arreglos estara entre min 5 y max 20 elementos 
var v1 = []
    v2 = []
    v3 = []
    t1 = Math.round((Math.random()*20+5)-5)
    t2 = Math.round((Math.random()*20+5)-5)
    t3 = Math.round((Math.random()*20+5)-5)
    p1 = 0
    ip1 = 0
    p2 = 0
    ip2 = 0
    p3 = 0
    ip3 = 0
console.log(t1+' '+t2+' '+t3)
for(let i=0; i<t1; i++){
    v1[i]=Math.round(Math.random()*100)
}
for(let i=0; i<t2; i++){
    v2[i]=Math.round(Math.random()*100)
}
for(let i=0; i<t3; i++){
    v3[i]=Math.round(Math.random()*100)
}
console.log('Arreglo 1 ['+v1+']\n Arreglo 2 ['+v2+']\n Arreglo 3 ['+v3+']')
//cual de los tres arreglos es el mas grande
if (v1.length > v2.length) {
    if (v1.length > v3.length) {
        console.log('el arreglo v1 tiene mayor cantidad de indices con un total de: '+v1.length)
    }
}
if (v2.length > v1.length) {
    if (v2.length > v3.length) {
        console.log('el arreglo v2 tiene mayor cantidad de indices con un total de: '+v2.length)
    }
}
if (v3.length > v2.length) {
    if (v3.length > v1.length) {
        console.log('el arreglo v3 tiene mayor cantidad de indices con un total de: '+v1.length)
    }
}
//de cada uno digo que cantidad de numeros pares y numeros inpares tiene
for (let i = 0; i < v1.length; i++) {
    if (v1[i]%2==0) {
        p1 = p1 + 1
    } else {
        ip1 = ip1 + 1
    }
}
for (let i = 0; i < v2.length; i++) {
    if (v2[i]%2==0) {
        p2 = p2 + 1
    } else {
        ip2 = ip2 + 1
    }
}
for (let i = 0; i < v3.length; i++) {
    if (v1[i]%2==0) {
        p3 = p3 + 1
    } else {
        ip3 = ip3 + 1
    }
}
console.log('el arreglo 1 tiene: \npares:'+p1+'\nimpares:'+ip1+'\nel arreglo 2 tiene: \npares:'+p2+'\nimpares:'+ip2+'\nel arreglo 3 tiene: \npares:'+p3+'\nimpares:'+ip3 )

//rellenar los arreglos mas pequeños con los datos del arreglos mas grandes tiene de mas 

console.log(v1.length)
console.log(v2.length)
console.log(v3.length)
let p = v2.length 
while (v1.length>v2.length) {
    v2[v2.length] = v1[v2.length]
}
while (v1.length>v3.length) {
    v3[v3.length] = v1[v3.length]
}
while (v2.length>v1.length) {
    v1[v1.length] = v2[v1.length]
}
while (v2.length>v3.length) {
    v3[v3.length] = v2[v3.length]
}
while (v3.length>v1.length) {
    v1[v1.length] = v3[v1.length]
}
while (v3.length>v2.length) {
    v2[v2.length] = v3[v2.length]
}

console.log(v1.length)
console.log(v2.length)
console.log(v3.length)

console.log(v1)
console.log(v2)
console.log(v3)

//Tatiana Martinez
/* llenar tres arreglos con numeros aleatorios, el tamaño de los areglos estara entre mminimo 5 y maximo 20 elmentos */

let ar1 = []
let tam1 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
for (let i = 0; i < tam1; i++) {
    ar1[i] = Math.round(Math.random() * 100)

}
console.log(ar1)
console.log('')

let ar2 = []
let tam2 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam2:', +tam2)
for (let i = 0; i < tam2; i++) {
    ar2[i] = Math.round(Math.random() * 100)

}
console.log(ar2)
console.log('')

let ar3 = []
let tam3 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam3:', +tam3)
for (let i = 0; i < tam3; i++) {
    ar3[i] = Math.round(Math.random() * 100)

}
console.log(ar3)
console.log('')





/*1. Cual de los tres arreglos es el mas grande */
let ar1 = []
let tam1 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
for (let i = 0; i < tam1; i++) {
    ar1[i] = Math.round(Math.random() * 100)

}
console.log(ar1)
console.log('')

let ar2 = []
let tam2 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam2:', +tam2)
for (let i = 0; i < tam2; i++) {
    ar2[i] = Math.round(Math.random() * 100)

}
console.log(ar2)
console.log('')

let ar3 = []
let tam3 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam3:', +tam3)
for (let i = 0; i < tam3; i++) {
    ar3[i] = Math.round(Math.random() * 100)

}
console.log(ar3)
console.log('')
//or exclusivo
if ((tam1 > tam2) == (tam2 < tam3)) {
    console.log(tam1, +tam2, +tam3, 'El arreglo mayor es', +tam2)
} else if ((tam1 > tam2) == (tam2 < tam3)) {
    console.log(tam1, +tam2, +tam3, 'El arreglo mayor es', +tam3)
} else
    console.log(tam1, +tam2, +tam3, 'El arreglo mayor es', +tam1)





/*2. De cada uno diga qeu cantidad de numeros pares y que cantidad de numeros impares hay */
let ar1 = []
let tam1 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
for (let i = 0; i < tam1; i++) {
    ar1[i] = Math.round(Math.random() * 100)

}
console.log(ar1)
console.log('')
var contadorpar1 = 0
var contadorimpar1 = 0
for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] % 2 == 0) {
        var contadorpar1 = contadorpar1 + 1

    } else {
        var contadorimpar1 = contadorimpar1 + 1


    }
}
console.log('Total numeros pares arreglo 1  de:', +contadorpar1)
console.log('Total numeros impares arreglo 1  de:', +contadorimpar1)
console.log('')
console.log('')



let ar2 = []
let tam2 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam2:', +tam2)
for (let i = 0; i < tam2; i++) {
    ar2[i] = Math.round(Math.random() * 100)

}
console.log(ar2)
console.log('')
var contadorpar2 = 0
var contadorimpar2 = 0
for (let i = 0; i < ar2.length; i++) {
    if (ar2[i] % 2 == 0) {
        var contadorpar2 = contadorpar2 + 1

    } else {
        var contadorimpar2 = contadorimpar2 + 1


    }
}
console.log('Total numeros pares arreglo 2  de:', +contadorpar2)
console.log('Total numeros impares arreglo 2  de:', +contadorimpar2)
console.log('')
console.log('')



let ar3 = []
let tam3 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam3:', +tam3)
for (let i = 0; i < tam3; i++) {
    ar3[i] = Math.round(Math.random() * 100)
}
console.log(ar3)
console.log('')
var contadorpar3 = 0
var contadorimpar3 = 0
for (let i = 0; i < ar3.length; i++) {
    if (ar3[i] % 2 == 0) {
        var contadorpar3 = contadorpar3 + 1
    } else {
        var contadorimpar3 = contadorimpar3 + 1
    }
}
console.log('Total numeros pares arreglo 3  de:', +contadorpar3)
console.log('Total numeros impares arreglo 3  de:', +contadorimpar3)



/*3. RELLENAR LOS ARREGLOS MAS PEQUEÑOS CON LOS DATOS QUE LE SOBRAN AL ARREGLOS MAS GRANDE*/

//Kevin Palencia
let count = 0;
let vector12 = [],
    tamaño8 = Math.round((Math.random() * 20 - 15) + 10)
for (let i = 0; i < tamaño8; i++) {
    vector12[i] = Math.round(Math.random() * 100)
}
console.log(vector12)
for (let i = 0; i < vector12.length; i++) {
    if (vector12[i] % 2 == 0) {
        count = count = i;
        console.log(`${vector12[i]} es par`)
    } else {
        console.log(`${vector12[i]} es impar`)
    }
}
console.log('La cantidad de  numeros pares son' + count)




/*let count = 0;
let vector12 = [],
    tamaño8 = Math.round((Math.random() * 20 - 15) + 95)
for (let i = 0; i < tamaño8; i++) {
    vector12[i] = Math.round(Math.random() * 100)
}



let count = 0;
let vector12 = [],
    tamaño8 = Math.round((Math.random() * 20 - 15) + 95)
for (let i = 0; i < tamaño8; i++) {
    vector12[i] = Math.round(Math.random() * 100)
}*/


//Nicol Sanchez
var vector4=[];
var max =0;
vector4 [0]=Math.round(Math.random() * 100);
vector4 [1]=Math.round(Math.random() * 100);
vector4 [2]=Math.round(Math.random() * 100);
console.log(vector4);

  for(let i=0;i<vector4.length; i++) {
    if(vector4 [i]%2==0){
        console.log(`${vector4[i]} es par`)
        
    
    }else{
        console.log(`${vector4[i]}es impar `)
    }
  } 

  var rifa=Math.round((Math.random() * 48-1)+1);
  console.log(rifa)