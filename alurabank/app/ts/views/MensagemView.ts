import { View } from './View';

export class MensagemView extends View<string> {

    template(model: string, classCss?: string): string {
        return `<p class="alert alert-${classCss}">${model}</p>`;
    }

}

