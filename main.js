
function tocaSom (seletorAudio) {
    const elemento = documento.querySelector(seletorAudio);
    document.querySelector(seletorAudio);

    if (elemento === null) {

    }

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');



//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (evento) {
        if (evento.code == 'Space' || 'Enter') {
            tecla.classList.remove('ativa');
        }
        
    }

}

