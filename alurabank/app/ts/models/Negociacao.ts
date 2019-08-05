class Negociacao {

    /**
    * 
    * Construtor
    * 
    * @param {*} data 
    * @param {*} quantidade 
    * @param {*} valor 
    */
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number) { }

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