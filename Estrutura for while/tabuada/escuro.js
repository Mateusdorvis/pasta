alert('Wellcome :) ')



const toggleBtn = document.getElementById('toggle-mode')
const body = document.body

toggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode')
    img.src = 'https://cdn-icons-png.flaticon.com/512/1985/1985657.png'
    //toggleBtn.style.backgroundColor = 'Gray'
})



function gerarTabuada() {
    var numero = parseInt(document.getElementById('nummber').value); //transformar em número inteiro graças ao parseInt
    var table = document.getElementById('tabela-tabuada');

    table.innerHTML = ""; //limpar a tabela antes de gerar outra
  
    img.src = 'https://cdn-icons-png.flaticon.com/512/1605/1605815.png'

    //gerar a tabuada
    for (var i = 1; i <= 100; i++) {
        var resultado = numero * i;
        var linha = "<tr><td>" + numero + "X" + i + "</td><td>" + resultado + "</td></tr>";//tr é tabela

        table.innerHTML += linha

    }


}

