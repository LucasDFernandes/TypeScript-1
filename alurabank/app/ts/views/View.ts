export abstract class View<T> {

    protected _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update(model: T) {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}


