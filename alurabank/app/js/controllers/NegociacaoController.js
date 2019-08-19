System.register(["../views/NegociacoesView", "../views/MensagemView", "../models/Negociacoes", "../models/Negociacao", "../models/enums/DiaDaSemana", "../helpers/decorators/DomInject", "../helpers/decorators/throttle", "../services/NegociacaoService"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_1, MensagemView_1, Negociacoes_1, Negociacao_1, DiaDaSemana_1, DomInject_1, throttle_1, NegociacaoService_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (DiaDaSemana_1_1) {
                DiaDaSemana_1 = DiaDaSemana_1_1;
            },
            function (DomInject_1_1) {
                DomInject_1 = DomInject_1_1;
            },
            function (throttle_1_1) {
                throttle_1 = throttle_1_1;
            },
            function (NegociacaoService_1_1) {
                NegociacaoService_1 = NegociacaoService_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesView = new NegociacoesView_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._negociacaoService = new NegociacaoService_1.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update('Somente negociações em dias úteis, por favor!', 'danger');
                        return;
                    }
                    const negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!', 'info');
                }
                importarDados() {
                    const isOK = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this._negociacaoService.obterNegociacoes(isOK)
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => {
                            this._negociacoes.adiciona(negociacao);
                            this._negociacoesView.update(this._negociacoes);
                        });
                    });
                }
                _ehDiaUtil(data) {
                    return data.getDay() != DiaDaSemana_1.DiaDaSemana.Sabado && data.getDay() != DiaDaSemana_1.DiaDaSemana.Domingo;
                }
            };
            __decorate([
                DomInject_1.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                DomInject_1.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                DomInject_1.domInject('#quantidae')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                throttle_1.throttler()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                throttle_1.throttler()
            ], NegociacaoController.prototype, "importarDados", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
