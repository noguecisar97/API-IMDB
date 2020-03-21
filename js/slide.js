function slide() {
    let img1 = document.querySelectorAll('.img') // criado uma node list 
    const listaMov = Array.from(img1) // criado um Array para trabalhar

    listaMov.map((e, index) => {
        //map percore os elementos de um Array, representado por 'e', INDEX é posição dela startando do 0
        e.style.left = `${450 * index}px`
        /*
        a cada imagem que for adicionada vai receber o valor de +450px na lateral 
        para ficar do lado e não subir uma em cima da outra 
        */
    })

    function mouse(img) {
        //seleciona uma div == img, dentro dessa div tem um elemento de texto com display none
        const elemento = img.querySelector('.exb')
        //selecionando o elemento dentro da div
        img.onmouseover = function () {
            elemento.style.display = 'block'
            //passar o mouse na div ele fica visivel
        }
        img.onmouseout = function () {
            elemento.style.display = 'none'
            //retirado o mouse ele fica invisivel denovo
        }
    }

    function mover() {
        listaMov.map(e => {
            // percorendo a lista de imagens no slide e adicionando os efeitos           
            movendo(e)
            // efeito de movimentação para todos os elementos se moverem juntos
            mouse(e)
            // adicionado o efeito do display para cada imagem 
        })
    }
    setInterval(mover, 10) // isso faz com que execute o movimento da imagem a cada 10 milisegundos
    function movendo(img) {
        let number = parseInt(img.style.left) // pego a posição atual da imagem
        img.style.left = (number < -450) ? `${(listaMov.length - 1)*450}px` : `${number-3}px`
        //verifico se ela ja saiu do limite de visualização e adiciono uma nova posição
    }
    mover()
}
slide()