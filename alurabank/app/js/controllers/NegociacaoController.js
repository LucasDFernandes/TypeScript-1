// app/ts/controllers/NegociacaoController.ts
class NegociacaoController {
    //private _negociacoesView = new NegociacoesView('#negociacoesView');
    /**
     * Construtor
     */
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    /**
     *
     * Adiciona uma Megociação
     *
     * @param event
     */
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.negociacoes);
    }
}
