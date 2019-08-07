import { Negociacao } from "./Negociacao";

export class Negociacoes {

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
        return [].concat(this._negociacoes);
    }

}