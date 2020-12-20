let imagens = document.querySelector('img#icone')

function mudarfoto(menu) {
    if (menu === 1) {
        index('image/home.png')
    } else if (menu === 2) {
        specs('image/especificacoes.png')
    } else if (menu === 3) {
        fotos('image/fotos.png')
    } else if (menu === 4) {
        multi('image/multi.png')
    } else if (menu === 5) {
        falecon('image/contato.png')
    }
}

function index(img) {
    let imagens = document.querySelector('img#icone').src = img
}

function specs(img) {
    let imagens = document.querySelector('img#icone').src = img
}

function fotos(img) {
    let imagens = document.querySelector('img#icone').src = img
}

function multi(img) {
    let imagens = document.querySelector('img#icone').src = img
}

function falecon(img) {
    let imagens = document.querySelector('img#icone').src = img
}

function fotoout(img) {
    imagens.src = img
}