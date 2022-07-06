import html from './dropdown.component.html';

export class DropdownComponent extends HTMLElement {

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

        this._shadow.addEventListener('click', event => {
            console.log(event);

            const $el = this._shadow.querySelector('.dropdown-item-container');
            $el.classList.toggle('active');
            console.log($el);
        });
    }
}
