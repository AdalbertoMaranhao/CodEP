const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const qtdeLitros = parseInt(document.querySelector("#qtdeLitros").value);
    const qtdeKms = parseInt(document.querySelector("#KmRodados").value);

    const media = qtdeKms/qtdeLitros;

    alert(media);
});
