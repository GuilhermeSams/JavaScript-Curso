const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){alert("biiiiiiiiiiiiiiiiiii")},
    completo: function() {
        return "A marca é " + this.marca +" e o modelo é " +this.modelo;
    }
};


//console.log(carro["marca"]);

//carro.buzina();

console.log(carro.completo())
