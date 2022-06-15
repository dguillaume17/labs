import { AppComponent } from './app/app.component.js'
import { HelloWorldComponent } from './app/hello-world.components.js'

document.addEventListener('DOMContentLoaded', (event) => {
    customElements.define( 'app-root', AppComponent);
    customElements.define( 'app-hello-world', HelloWorldComponent);
})