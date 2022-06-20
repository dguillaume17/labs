export declare class AppComponent extends HTMLElement {
    private _form;
    private _buttons;
    private _inputs;
    private _viewers;
    private _shadow;
    connectedCallback(): void;
    render(): void;
    _setupGeneralTemplateRefs(): void;
    _setupButtonTemplateRefs(): void;
    _setupFormTemplateRefs(): void;
    _setupInputsTemplateRefs(): void;
    _setupViewerTemplateRefs(): void;
    _setupGeneralListeners(): void;
    _setupFirstNameListener(): void;
    _setupSizeListener(): void;
    _setupDefaultButton(): void;
    _setupCancelButton(): void;
}
