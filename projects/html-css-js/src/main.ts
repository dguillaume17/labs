import { AppComponent } from './app/components/app.component';
import { BoxSizingComponent } from './app/components/box-sizing/box-sizing.component';
import { DropdownComponent } from './app/components/dropdown/dropdown.component';

document.addEventListener('DOMContentLoaded', (event) => {
    customElements.define('app-root', AppComponent);
    customElements.define('app-dropdown', DropdownComponent);
    customElements.define('app-box-sizing', BoxSizingComponent);
});
