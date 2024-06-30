let $depoimentos = document.querySelector("#depoimentos");

const depoimentos_bd = [
    {
        id: 1,
        imgSrc: '1.png',
        imgAlt: 'Foto de uma mão',
        title: 'primeiro comentário',
        text: 'This is the text for card 1.',
        updatedAt: '3 mins ago'
    },
    {
        id: 2,
        imgSrc: '2.png',
        imgAlt: 'Image 2 description',
        title: 'Card olá 2',
        text: 'This is the text for card 2.',
        updatedAt: '5 mins ago'
    },
]

depoimentos_bd.forEach(data => carregarDepoimentos(data));
function carregarDepoimentos(data) {
    $depoimentos.innerHTML += `
              <div class="carousel-item active">
                <img src="/front/img/img_depo/${data.imgSrc}" class="d-block w-100" alt="...">
                <div>
                    <h5>${data.title}</h5>
                    <p>${data.text}</p>
                    <p>${data.updatedAt}</p>
                </div>
              </div>`;
}

carregarDepoimentos()