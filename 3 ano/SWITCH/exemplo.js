const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const opcao = document.querySelector("#op");

    switch(opcao.value){
        case '1' :{
            alert("Você acobou de entrar no sistena aproveite");
            break;
        }
        case'2' :{
            alert("Você está no painel de controle");
            break;
        }
        case '3' :{
            alert("Você está na seção de Documentos!");
            break;
        }
        case '4' :{
            alert("Você está na seção de Imagens!");
            break;
        }
        case '5' :{
            alert("Tchau, volte logo!!!");
            break;
        }
        default :{
            alert("Você está perdido!!!");
            break;
        }
    }
});