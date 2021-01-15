const objetoAluno = new Alunos()
const objetoCard = new Card()

objetoAluno.buscaAlunos()
  .then(function (resposta) {
    resposta.json()
      .then(function (dados) {
        objetoCard.mostraAlunos(dados)
      })
  })