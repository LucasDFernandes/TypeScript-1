System.register(["./Entity"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Entity_1, Negociacao;
    return {
        setters: [
            function (Entity_1_1) {
                Entity_1 = Entity_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao extends Entity_1.Entity {
                constructor(data, quantidade, valor) {
                    super();
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.valor * this.quantidade;
                }
                toString() {
                    console.log('-- paraTexto --');
                    console.log(`Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
