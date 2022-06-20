import { AppComponent } from './app/app.component'
import { HelloWorldComponent } from './app/hello-world.components'

document.addEventListener('DOMContentLoaded', (event) => {
    customElements.define( 'app-root', AppComponent);
    customElements.define( 'app-hello-world', HelloWorldComponent);
})