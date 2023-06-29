const pessoaObj = {
    nome: "joão",
    idade: 26,
    altura: 1.75,
    profissao: "Programador"
}

function apresentar(pessoa){
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou ${pessoa.profissao},
tenho ${pessoa.altura}m e sou ${pessoa.profissao}`);}

apresentar(pessoaObj);