function verificar() {
    // obter o valor do campo de entrada
    var numero = document.getElementById("numero").value;
    
    // converter o valor para um número inteiro
    numero = parseInt(numero);
    
    // verificar se o número é par ou ímpar
    if (numero % 2 == 0) {
      alert("O número " + numero + " é par.");
    } else {
      alert("O número " + numero + " é ímpar.");
    }
}