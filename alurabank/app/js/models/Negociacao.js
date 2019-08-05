class Negociacao {
    /**
    *
    * Construtor
    *
    * @param {*} data
    * @param {*} quantidade
    * @param {*} valor
    */
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    /**
     *
     * Volume = Quantidade * Valor
     *
     */
    get volume() {
        return this._valor * this._quantidade;
    }
}
