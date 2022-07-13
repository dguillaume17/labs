import { ComponentType } from '../../models/component-type.enum';
import { Dictionnary } from '../../models/dictionnary.interface';

export abstract class BaseComponent extends HTMLElement {

    // Private properties

    private _shadow: ShadowRoot;

    // Calculated properties

    protected get shadow(): ShadowRoot {
        return this._shadow;
    }

    // Lifecycle

    public connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        });

        this.render();
    }

    // Render

    public abstract render(): void;

    // Protected work

    protected renderHtml(html: string, css?: string) {
        this._shadow.innerHTML = css == null
            ? html
            : `${html}<style>${css}</style>`;
    }

    protected createFrom(
        $templateRef: HTMLTemplateElement,
        bindingDictionary?: Dictionnary
    ): DocumentFragment {
        const $cloneRef = document.createElement('template') as HTMLTemplateElement;

        $cloneRef.innerHTML = Object.keys(bindingDictionary ?? []).reduce((innerHtml, dictionaryKey) => {
            const dictionaryValue = bindingDictionary[dictionaryKey];
            const tag = `{{${dictionaryKey}}}`;

            return innerHtml.replace(tag, dictionaryValue);
        }, $templateRef.innerHTML);

        return $cloneRef.content;
    }

    protected createComponentFrom(
        componentType: ComponentType,
        inputs?: Dictionnary
    ): HTMLElement {
        const $component = document.createElement(componentType) as HTMLElement;

        Object.keys(inputs ?? []).forEach(inputKey => {
            const inputValue = inputs[inputKey];

            $component.setAttribute(inputKey, inputValue);
        });

        return $component;
    }
}
