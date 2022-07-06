import html from './app.component.html';

export class AppComponent extends HTMLElement {

    // Private properties

    private _shadow: ShadowRoot | undefined;

    // Lifecycle

    connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        });

        this.render();
    }

    // Render

    public render() {
        this._shadow.innerHTML = html;
    }
}
