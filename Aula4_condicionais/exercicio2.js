const valorDaCompra = 100;
const numeroDeParcelas = 7;

if (numeroDeParcelas === 1){
    const desconto = valorDaCompra * 0.1;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você terá um desconto de 10%, e o produto ficara por ${valorAPagar} reais`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas<= 6){
    const valorDaParcela = (valorDaCompra/numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas} parcelas sem juros de R$ ${valorDaParcela}.`);
} else if(numeroDeParcelas >= 7 && numeroDeParcelas<= 12){
    const valorAPagarComJuros = (valorDaCompra*(1 + 0.01)** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas} parcelas com juros de R$ ${valorDaParcela} com total de ${valorAPagarComJuros}`)
} else{
    console.log("Número de parcelas inválidos.")
}