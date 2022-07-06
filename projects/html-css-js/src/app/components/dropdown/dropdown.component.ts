import { BaseComponent } from '../base/base.component';
import html from './dropdown.component.html';

export class DropdownComponent extends BaseComponent {

    // Inner properties

    private _$dropdown: Element;
    private _$dropdownSelection: Element;
    private _$dropdownContainer: Element;
    private _$dropdownItems: NodeListOf<Element>;

    // Render

    public render(shadow: ShadowRoot) {
        shadow.innerHTML = html;

        this._$dropdown = shadow.querySelector('[dropdown]');
        this._$dropdownSelection = shadow.querySelector('[dropdown-selection]');
        this._$dropdownContainer = shadow.querySelector('[dropdown-item-container]');
        this._$dropdownItems = shadow.querySelectorAll('[dropdown-item]');

        this._$dropdown.addEventListener('click', (event: PointerEvent) => {
            this.toggleDropdown();
        });

        this._$dropdownItems.forEach($dropdownItem => {
            $dropdownItem.addEventListener('click', (event: PointerEvent) => {
                event.stopPropagation();

                this.toggleDropdown();
                this.setupSelection($dropdownItem.innerHTML);
            });
        });
    }

    // Inner work

    private setupSelection(selection: string) {
        this._$dropdownSelection.innerHTML = selection;
    }

    private toggleDropdown() {
        this._$dropdownContainer.classList.toggle('active');
    }
}
