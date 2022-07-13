import { BaseComponent } from '../base/base.component';
import html from './selecter.component.html';
import css from './selecter.component.css';

export class SelecterComponent extends BaseComponent {

    // Constant properties

    private readonly ACTIVE = 'active';

    // Inner properties

    private _$selecter: Element;
    private _$selectionItem: Element;
    private _$dropdown: Element;
    private _$dropdownItems: NodeListOf<Element>;

    // Render

    public render() {
        this.renderHtml(html, css);

        this._$selecter = this.shadow.querySelector('[selecter]');
        this._$selectionItem = this.shadow.querySelector('[selection-item]');
        this._$dropdown = this.shadow.querySelector('[dropdown]');
        this._$dropdownItems = this.shadow.querySelectorAll('[dropdown-item]');

        this._$selecter.addEventListener('click', (event: PointerEvent) => {
            this._$dropdown.classList.toggle(this.ACTIVE);
        });

        this._$dropdownItems.forEach($dropdownItem => {
            $dropdownItem.addEventListener('click', (event: PointerEvent) => {
                event.stopPropagation();

                this._$dropdown.classList.toggle(this.ACTIVE);

                this._$dropdownItems.forEach($dropdownItem => {
                    $dropdownItem.classList.remove(this.ACTIVE);
                });

                $dropdownItem.classList.add(this.ACTIVE);

                this.setupSelection($dropdownItem.innerHTML);
            });
        });
    }

    // Inner work

    private setupSelection(selection: string) {
        this._$selectionItem.innerHTML = selection;
    }
}
