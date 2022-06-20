import html from './hello-world.component.html';
import css from './hello-world.component.css';

export class HelloWorldComponent extends HTMLElement {

    // Private properties

    private _shadow: ShadowRoot | undefined;

    // Lifecycle

    connectedCallback() { 
        this._shadow = this.attachShadow({
            mode: 'closed'
        })

        this.render();
    }

    // Render

    render() {
        this._shadow!.innerHTML = /*html*/`
            ${html}
            <style>
                ${css}
            </style>
        `
    }
}
