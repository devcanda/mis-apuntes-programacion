function Carro(marca, modelo, color) {
    this.marc = marca;
    this.model = modelo;
    this.col = color;
  }

  let mycarro= new Carro("Toyota", "Corolla", "Rojo");
  console.log(mycarro.marc);
  mycarro["version"]="4x4";
    console.log(mycarro);