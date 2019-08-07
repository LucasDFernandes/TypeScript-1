export class Negociacao {

    /**
    * 
    * Construtor
    * 
    * @param {*} data 
    * @param {*} quantidade 
    * @param {*} valor 
    */
    constructor(
        readonly data: Date,
        readonly quantidade: number,
        readonly valor: number) { }

    /**
     * 
     * Volume = Quantidade * Valor
     * 
     */
    get volume() {
        return this.valor * this.quantidade;
    }

}