System.register(["./Entity"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Entity_1, Negociacoes;
    return {
        setters: [
            function (Entity_1_1) {
                Entity_1 = Entity_1_1;
            }
        ],
        execute: function () {
            Negociacoes = class Negociacoes extends Entity_1.Entity {
                constructor() {
                    super(...arguments);
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                get negociacoes() {
                    return [].concat(this._negociacoes);
                }
                toString() {
                    console.log('-- paraTexto --');
                    console.log(JSON.stringify(this._negociacoes));
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
