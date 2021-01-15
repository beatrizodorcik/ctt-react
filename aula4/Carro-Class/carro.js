    
    class Carro {
      constructor(modeloDoCarro, corCarro, propriedadesMarca){
        this.marca = propriedadesMarca
        this.cor = corCarro
        this.modelo = modeloDoCarro
      }
      acelerar(){
        return "Acelerou"
      }
      freiar(){
        return "Freiou"
      }
    }

    const carro1 = new Carro("Fiat", "preto", "Siena")
    console.log(carro1)

    const carro2 = new Carro("Ford", "branco", "Polo")
    console.log(carro2)

    console.log(carro1.freiar())
    console.log (carro2.acelerar())