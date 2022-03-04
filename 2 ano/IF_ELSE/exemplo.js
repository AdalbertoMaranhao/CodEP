const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const n1 = parseInt(document.querySelector("#n1").value);
    const n2 = parseInt(document.querySelector("#n2").value);
    const n3 = parseInt(document.querySelector("#n3").value);
    const n4 = parseInt(document.querySelector("#n4").value);
    
    const media = (n1 + n2 + n3 + n4)/4;

    if(media >= 6){
        alert("A media foi: " +media + " Passou!!!!");
    } else{
        alert("Não foi dessa vez :-(");
    }
});