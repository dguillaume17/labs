import { html } from './utils'

export class HelloWorldComponent extends HTMLElement {

    // Lifecycle

    connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        })

        this.render()
    }

    // Render

    render() {
        this._shadow.innerHTML = html`
            <div>
                coucou ok
            </div>
            <style>
                div {
                    background-color: red;
                }
            </style>
        `
    }
}
