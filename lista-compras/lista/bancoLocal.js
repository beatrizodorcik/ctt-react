class BancoLocal {
  constructor() {
    this.minhaLista = JSON.parse(localStorage.getItem("lista-de-compras")) || []
  }

  ler() {
    this.minhaLista = JSON.parse(localStorage.getItem("lista-de-compras"))
  }

  gravar(item) {
    let lista = this.minhaLista || []
    lista.push(item)
    localStorage.setItem("lista-de-compras", JSON.stringify(lista))
  }
  
  apagar() {
    localStorage.clear()
  }
}