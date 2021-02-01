interface Dev{
  nome: string
  idade: number
  empresa: string
  famoso: true
}


function programador(objeto: Dev, array: string[]) {
	// não precisa desenvolver nada aqui
}

const dev = {
  nome: 'Bill Gates',
  idade: 60,
  empresa: 'Microsoft',
  famoso: true
}
const produtos: string[] = ["Azure", "VS Code", "Office"]

programador(dev, produtos)