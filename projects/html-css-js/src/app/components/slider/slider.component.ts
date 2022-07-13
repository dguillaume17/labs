import { BaseComponent } from '../base/base.component';
import html from './slider.component.html';
import css from './slider.component.css';
import { SliderAttribute } from '../../models/slider/slider-attribut.enum';

export class SliderComponent extends BaseComponent {

    // Setup attributes

    public static get observedAttributes() {
        return SliderAttribute.getAll();
    }

    // Template refs

    private _$inputRange: HTMLInputElement;
    private _$valueContainerRef: HTMLElement;
    private _$templateValueRef: HTMLTemplateElement;

    // Lifecycle

    public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case SliderAttribute.Unit:
                console.log('ok1');
                break;
            case SliderAttribute.Value:
                console.log('ok2');
                break;
        }
    }

    // Render

    public render() {
        this.renderHtml(html, css);

        this.setupTemplateRefs();
        this.setupInputRangeChange();

        this.setupValueContainer();
    }

    // Setup template refs

    private setupTemplateRefs() {
        this._$inputRange = this.shadow.querySelector('input');
        this._$valueContainerRef = this.shadow.querySelector('[valueContainerRef]');
        this._$templateValueRef = this.shadow.querySelector('[templateValueRef]') as HTMLTemplateElement;
    }

    // Setup event listeners

    private setupInputRangeChange() {
        this._$inputRange.addEventListener('input', event => {
            this.setupValueContainer();
        });
    }

    // Setup templates

    private setupValueContainer() {
        const $valueRef = this.createFrom(this._$templateValueRef, {
            value: this._$inputRange.value
        });

        this._$valueContainerRef.replaceChildren($valueRef);
    }

}
