import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from "../models/Negociacao";
import { DiaDaSemana } from "../models/enums/DiaDaSemana";
import { domInject } from '../helpers/decorators/DomInject';
import { NegociacaoParcial } from '../models/NegociacaoParcial'
import { throttler } from '../helpers/decorators/throttle';
import { NegociacaoService } from "../services/NegociacaoService";
import { HandlerFunction } from "../services/NegociacaoService";

/**
 * 
 * Controller da Aplicação
 * 
 */
export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#quantidae')
    private _inputValor: JQuery;

    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _negociacaoService = new NegociacaoService();

    /**
     * Construtor
     */
    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    /**
     * 
     * Adiciona uma Negociação
     * 
     * @param event 
     */
    @throttler()
    adiciona(event: Event) {

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {

            this._mensagemView.update('Somente negociações em dias úteis, por favor!', 'danger');
            return
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!', 'info');
    }

    /**
     * importa Dados de Negociação de uma API Externa
     */
    @throttler()
    importarDados() {

        /**
         * Função para verificar se A resposta da API foi realizado com sucesso!
         * 
         * @param res 
         */
        const isOK: HandlerFunction = (res: Response) => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        this._negociacaoService.obterNegociacoes(isOK)
            .then(negociacoes => {
                negociacoes.forEach(negociacao => {
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                });
            });

    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

}