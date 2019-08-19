import { Entity } from "./Entity";

export class Negociacao extends Entity {

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
        readonly valor: number) {
        super();
    }

    /**
     * 
     * Volume = Quantidade * Valor
     * 
     */
    get volume() {
        return this.valor * this.quantidade;
    }

    toString(): void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }
}