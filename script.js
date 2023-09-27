let currentSelectedButton = ''
let currentSelectdSubmit = ''
let idspan = document.getElementById('id-span')
function clicado(element) {

    const buttonNumbers = document?.getElementById('id-buttons-select')?.getElementsByTagName('div')
//avaliação ao ser clicado muda de cor 
    if (element.style.backgroundColor === "orange") {
        element.style.backgroundColor = "#262e39";

    } else {
        element.style.backgroundColor = "orange";
        // currenteSelectdButton armazendando o ultimo click da avaliação
        currentSelectedButton = element.innerText

    }
// removendo atributos para deixar selecionado somente um
    for (let i = 0; i < buttonNumbers.length; i++) {
        if (buttonNumbers[i].innerHTML !== currentSelectedButton) {
            // remove o background para o hover voltar ao normal
            buttonNumbers[i].removeAttribute('style');
        }

    }

}
function submitclicado(element) {
    console.log(currentSelectedButton);
    // condição para não deixar clicar no submti sem avaliar 
    currentSelectdSubmit = currentSelectdSubmit + 1;
    if (currentSelectdSubmit !== '' && currentSelectedButton !== '') {
        // display none para esconder o container
        const idContainerPrincipal = document.getElementById('id-container-principal')
        idContainerPrincipal.style.display = 'none'
        // display flex para mostrar o segundo container
        const idContainerImage = document.getElementById('id-container-image')
        idContainerImage.style.display = 'flex'
        // pega o valor da estrela e coloca na frase
        console.log(idspan);
        idspan.innerText = currentSelectedButton;
        idspan.style.margin = "3px";

    }

}