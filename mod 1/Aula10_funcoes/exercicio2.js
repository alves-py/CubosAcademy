function verificarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade < 66) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}


console.log(verificarFaixaEtaria(45));