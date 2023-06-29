const dadosPessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho", "Filipinho"]
}

let textoCNH = ( dadosPessoa.temCNH ? "possui CNH" : "não possui CNH");

if(dadosPessoa.temCNH){
    textoCNH = "possui CNH";
} else{
    textoCNH = "não possui CNH"
}

console.log(`${dadosPessoa.nome} tem ${dadosPessoa.idade} anos, ${dadosPessoa.altura}m de altura, ${textoCNH} e os seguintes apelidos: `);
for (let item of dadosPessoa.apelidos){
    console.log(`- ${item}`);
}