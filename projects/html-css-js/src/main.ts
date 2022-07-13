import { AppComponent } from './app/components/app.component';
import { ComponentType } from './app/models/component-type.enum';

document.addEventListener('DOMContentLoaded', (event) => {
    customElements.define('app-root', AppComponent);

    ComponentType.getAll().forEach(componentType => {
        customElements.define(
            componentType,
            ComponentType.getComponent(componentType)
        );
    });
});
