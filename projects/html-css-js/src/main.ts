import { AppComponent } from './app/components/app.component';
import { SelecterComponent } from './app/components/selecter/selecter.component';

document.addEventListener('DOMContentLoaded', (event) => {
    customElements.define('app-root', AppComponent);
    customElements.define('app-dropdown', SelecterComponent);
});
