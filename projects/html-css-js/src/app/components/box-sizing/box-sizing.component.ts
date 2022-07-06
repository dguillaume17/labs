import { BaseComponent } from '../base/base.component';
import html from './box-sizing.component.html';

export class BoxSizingComponent extends BaseComponent {

    // Render

    public render(shadow: ShadowRoot) {
        shadow.innerHTML = html;
    }
}
