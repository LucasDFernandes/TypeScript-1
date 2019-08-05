class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    /**
     *
     * Adiciona uma Negociação na lista
     *
     * @param negociacao
     *
     */
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}
