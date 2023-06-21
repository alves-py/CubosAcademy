let palavra = "aqui tem 5 aaaa";
let contador = 0;

for(let letra of palavra){
    if (letra === "a"){
        contador++;
    }
}

console.log(`Existem ${contador} letras a.`)