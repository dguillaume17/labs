class Component {

    // Lifecycle
    
    constructor() {}

    initialize(refs) {
        this._form = refs.form
        this._inputs = refs.inputs
        this._buttons = refs.buttons
        this._viewers = refs.viewers

        this._setupGeneralListeners()
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

const component = new Component()

document.addEventListener('DOMContentLoaded', (event) => {
    component.initialize({
        form: document.querySelector('#main-form'),
        inputs: {
            firstName: document.querySelector('[name="input-first-name"'),
            size: document.querySelector('[name="input-size"'),
        },
        buttons: {
            default: document.querySelector('[name="btn-default"]'),
            cancel: document.querySelector('[name="btn-cancel"]')
        },
        viewers: {
            firstName: document.querySelector('[name="viewer-first-name"]'),
            size: document.querySelector('[name="viewer-size"]')
        }
    })
})