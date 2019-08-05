class Negociacao {
    /**
    *
    * Construtor
    *
    * @param {*} data
    * @param {*} quantidade
    * @param {*} valor
    */
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
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
