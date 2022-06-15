
export class AppComponent extends HTMLElement {

    // Lifecycle

    connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        })

        this.render()
    }

    // Render

    render() {
        this._shadow.innerHTML = /*html*/`
            <form id="main-form">
                <div class="input-container">
                    <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" name="input-first-name">
                    <span name="viewer-first-name"></span>
                </div>
                <div class="input-container">
                    <label for="input-size">Size:</label>
                    <input type="range" min="20" max="80" id="input-size" name="input-size">
                    <span name="viewer-size"></span>
                </div>
                <div class="input-container">
                    <label for="preferences">Preference(s):</label>
                    <input type="checkbox" id="preferences1" name="preferences1">
                    <input type="checkbox" id="preferences2" name="preferences2">
                </div>
                <div class="input-container">
                    <label for="preferences">Sex:</label>
                    <input type="radio" id="sex" name="input-sex" value="M" checked>
                    <input type="radio" id="sex" name="input-sex" value="F">
                </div>
                <div class="input-container">
                    <button type="button" name="btn-default">Set default values</button>
                    <button type="button" name="btn-cancel">Cancel</button>
                    <button type="submit">Send form</button>
                </div>
            </form>

            <app-hello-world>
                <div slot="test"><span>OK</span></div>
            </app-hello-world>
        `
        this._setupGeneralTemplateRefs()
        this._setupGeneralListeners()
    }

    // Setup template refs

    _setupGeneralTemplateRefs() {
        this._setupButtonTemplateRefs()
        this._setupFormTemplateRefs()
        this._setupInputsTemplateRefs()
        this._setupViewerTemplateRefs()
    }

    _setupButtonTemplateRefs() {
        this._buttons = {
            default: this._shadow.querySelector('[name="btn-default"]'),
            cancel: this._shadow.querySelector('[name="btn-cancel"]')
        }
    }

    _setupFormTemplateRefs() {
        this._form = this._shadow.querySelector('#main-form')
    }

    _setupInputsTemplateRefs() {
        this._inputs = {
            firstName: this._shadow.querySelector('[name="input-first-name"'),
            size: this._shadow.querySelector('[name="input-size"'),
        }
    }

    _setupViewerTemplateRefs() {
        this._viewers = {
            firstName: this._shadow.querySelector('[name="viewer-first-name"]'),
            size: this._shadow.querySelector('[name="viewer-size"]')
        }
    }

    // Setup listeners

    _setupGeneralListeners() {
        this._setupFirstNameListener()
        this._setupSizeListener()
        this._setupDefaultButton()
        this._setupCancelButton()
    }

    _setupFirstNameListener() {
        this._inputs.firstName.addEventListener('input', event => {
            const newValue = event.target.value
            this._viewers.firstName.innerHTML = newValue
        })

        this._inputs.firstName.addEventListener('change', event => {
            this._viewers.firstName.innerHTML = ''
        })
    }

    _setupSizeListener() {
        this._inputs.size.addEventListener('change', event => {
            const newValue = event.target.value
            this._viewers.size.innerHTML = newValue
        })
    }

    _setupDefaultButton() {
        this._buttons.default.addEventListener('click', event => {
            this._inputs.firstName.value = 'John';
            this._inputs.size.value = 50;
        }) 
    }

    _setupCancelButton() {
        this._buttons.cancel.addEventListener('click', event => {
            this._form.reset();
        })
    }

}
