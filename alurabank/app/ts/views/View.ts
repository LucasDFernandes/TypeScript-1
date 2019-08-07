// app/ts/views/MensagemView.ts

abstract class View<T> {

    private _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update (model: T) {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}