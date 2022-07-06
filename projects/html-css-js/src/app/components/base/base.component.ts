export abstract class BaseComponent extends HTMLElement {

    // Private properties

    private _shadow: ShadowRoot | undefined;

    // Lifecycle

    connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        });

        this.render(this._shadow);
    }

    // Render

    public abstract render(shadow: ShadowRoot): void;

}
