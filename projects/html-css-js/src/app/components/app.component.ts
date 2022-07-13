import { ComponentType } from '../models/component-type.enum';
import css from './app.component.css';
import html from './app.component.html';
import { BaseComponent } from './base/base.component';

export class AppComponent extends BaseComponent {

    // Constant properties

    public static readonly COMPONENT_TYPE_PARAM = 'component-type';

    // Render

    public render() {
        this.renderHtml(html, css);

        const componentType = this.getQueryParamValue(AppComponent.COMPONENT_TYPE_PARAM);

        const $component = document.createElement(componentType);
        this.shadow.appendChild($component);

        this.renderComponentTypes();
        this.renderCurrentComponentType();
    }

    private renderComponentTypes() {
        const $componentTypesRef = this.shadow.querySelector('[componentTypesRef');
        const $templateRef = this.shadow.querySelector('[templateRef]') as HTMLTemplateElement;

        const availableComponentTypes = ComponentType.getAll().filter(componentType => {
            return ComponentType.isCompliantWithListing(componentType);
        });

        for (const componentType of availableComponentTypes) {
            const $fragment = this.createFrom($templateRef, {
                linkUrl: `?${AppComponent.COMPONENT_TYPE_PARAM}=${componentType}`,
                linkTitle: ComponentType.getTitle(componentType)
            });

            $componentTypesRef.appendChild($fragment);
        }
    }

    private renderCurrentComponentType() {

    }

    // Inner work

    private getQueryParamValue(name: string): string {
        const urlParams = new URLSearchParams(window.location.search);

        return urlParams.get(name);
    }
}

