class Card {
  constructor() {
    this.alunos = document.querySelector('#alunos')
  }

  mostraAlunos(dados) {
    console.log(dados)

    let card = ''

    dados.alunos.map(function (aluno) {
      card += `
      <div>
        <h2>Aluno: ${aluno.name}</h2>
        <p>Chamada: ${aluno.id}</p>
      </div>
      `;
    })

    this.alunos.innerHTML = card

  }
}