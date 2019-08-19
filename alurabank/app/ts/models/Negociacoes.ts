import { Negociacao } from "./Negociacao";
import { Entity } from "./Entity";

export class Negociacoes extends Entity {

    private _negociacoes: Negociacao[] = [];

    /**
     * 
     * Adiciona uma Negociação na lista
     * 
     * @param negociacao 
     * 
     */
    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    toString(): void {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

}