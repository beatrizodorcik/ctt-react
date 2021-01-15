// defini a classe card
class Card {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.noticias = document.querySelector('#Lista')
  }

  // monta o HTML do card com os dados do JSON
  mostraNoticia(dados) {
    // cria uma variavel que ira armazenar todo esse HTML
    let card = ''
    
    dados.noticias.map(function (item) {
      card += `
      <div class="card">
        <h2>${item.titulo}</h2>
        <p>${item.chamada}</p>
        <p>${item.link}</p>
      </div>
      `;
    })
    this.noticias.innerHTML = card

  }
}

//
