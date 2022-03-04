const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const altura = parseInt(document.querySelector("#altura").value);
    const peso = parseInt(document.querySelector("#peso").value);
    
    const imc = (peso/(altura * altura));
    console.log(imc);

    if(imc <= 18.5){
        alert("Muito magro");
    } else if(imc > 18.5 && imc <= 24.9){
        alert("Peso normal");
    } else if(imc > 24.9 && imc <= 29.9){
        alert("Sobrepeso");
    } else if(imc > 29.9 && imc <= 34.9){
        alert("Obesidade");
    } else{
        alert("Não consegui entender");
    }
});