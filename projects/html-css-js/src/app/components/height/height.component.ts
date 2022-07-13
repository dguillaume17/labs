import { BaseComponent } from '../base/base.component';
import html from './height.component.html';
import css from './height.component.css';
import { ComponentType } from '../../models/component-type.enum';

export class HeightComponent extends BaseComponent {

    // Constant properties

    public static readonly CSS_CONTAINER_WIDTH = '--container-width';
    public static readonly CSS_CONTAINER_HEIGHT = '--container-height';

    // Render

    public render() {
        this.renderHtml(html, css);

        const host = this.shadow.host as HTMLElement;

        host.style.setProperty(HeightComponent.CSS_CONTAINER_WIDTH, '200px');

        const $slider = this.createComponentFrom(ComponentType.Slider, {
            unit: 'px',
            value: '9'
        });
        this.shadow.appendChild($slider);
    }
}
