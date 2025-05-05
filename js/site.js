let isTruthy = function (valor) {
    return !!valor;
}
console.log("Falsy");
console.log(isTruthy(0));
console.log(isTruthy(''));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log("Truthy");
console.log(isTruthy(1));            
console.log(isTruthy(-100));         
console.log(isTruthy('hello'));      
console.log(isTruthy([]));           
console.log(isTruthy({}));           
console.log(isTruthy(true));         
console.log(isTruthy(() => {}));     
console.log(isTruthy(Infinity));     
console.log(isTruthy(new Date()));   
console.log(isTruthy(3.14));

let carro = {
    marca: "BMW",
    modelo: "M3 G80",
    placa: "BMWM380",
    ano: 2022,
    cor: "Venetian Violet",
    qtdPortas: 5,
    assentos: 5,
    qtdPessoas: 0,
    mudarCor: function (novaCor) {
        this.cor = novaCor;
    },
    obterCor: function () {
        return this.cor;
    },
    obterModelo: function(){
        return this.modelo;
    },
    obterMarca: function (){
        return this.marca;
    },
    obterMarcaModelo: function () {
        return `Esse carro é um ${this.marca} ${this.modelo}` 
    },
    adcionaPassageiros: function(quantidade){
        const totalAtual = this.qtdPessoas;
        const totalFinal = totalAtual + quantidade;

        if (totalAtual === this.assentos) {
            return 'O carro já está lotado!'
        }
        if (totalFinal > this.assentos) {
            const lugaresRestantes = this.assentos - totalAtual;
            const palavraPessoa = lugaresRestantes === 1 ? 'pessoa' : 'pessoas';
            return `Só cabem mais ${lugaresRestantes} ${palavraPessoa}!`;
        }
        this.qtdPessoas = totalFinal;
        return `Já temos ${this.qtdPessoas} pessoas no carro!`;
    },
    removerPessoas: function(quantidade) {
        this.qtdPessoas -= quantidade;
        if (this.qtdPessoas < 0) {
          this.qtdPessoas = 0;
        }
        return `Agora temos ${this.qtdPessoas} pessoas no carro.`;
      }
}

console.log(carro.obterCor());                              //Venetian Violet;
carro.mudarCor("Preto fosco"); 
console.log(carro.obterCor());                              //Preto fosco; 
carro.mudarCor("Verde musgo");
console.log(carro.obterCor());                              //Verde musgo;
console.log(carro.obterMarcaModelo());                      //Esse carro é um BMW M3 G80
console.log(carro.adcionaPassageiros(2));                   //Já temos 2 pessoas no carro!
console.log(carro.adcionaPassageiros(3));                   //Já temos 5 pessoas no carro!
console.log(carro.adcionaPassageiros(5));                   //O carro já está lotado!
console.log(carro.removerPessoas(4));                       //Agora temos 1 pessoas no carro.
console.log(carro.adcionaPassageiros(10));                  //Só cabem mais 4 pessoas!
console.log(`Temos ${carro.qtdPessoas} pessoa no carro.`);  //Temos 1 pessoa no carro.
