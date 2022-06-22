import html2 from './hello-world.component.html';
import css from './hello-world.component.css';
import { autorun, makeAutoObservable, reaction } from 'mobx';

class Animal {
    public name: string;
    public energyLevel: number;

    constructor(name: string) {
        this.name = name;
        this.energyLevel = 100;
        makeAutoObservable(this);
    }

    public reduceEnergy(): void {
        this.energyLevel -= 10;
    }

    public get isHungry(): boolean {
        return this.energyLevel < 50;
    }
}

const giraffe = new Animal('Gary');

autorun(() => {
    console.log('Energy level 1:', giraffe.energyLevel);
});


reaction(
    () => {
        return {
            test: giraffe.name,
            test2: giraffe.energyLevel
        };
    },
    name => {
        console.log('Name change:', name);
    }
);

reaction(
    () => giraffe.isHungry,
    isHungry => {
        if (isHungry) {
            console.log('Now I\'m hungry!');
        } else {
            console.log('I\'m not hungry!');
        }
        console.log('Energy level 2:', giraffe.energyLevel);
    }
);

export class HelloWorldComponent extends HTMLElement {

    // Private properties

    private _shadow: ShadowRoot | undefined;

    // Lifecycle

    connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        });

        this.render();

        console.log('coucou');

        // giraffe.reduceEnergy();
        // giraffe.reduceEnergy();
        // giraffe.reduceEnergy();
        // giraffe.reduceEnergy();
        // giraffe.reduceEnergy();
        // giraffe.reduceEnergy();

        // giraffe.energyLevel = 40;
        giraffe.name = 'coucou';

        setTimeout(() => {
            console.log('coucou2');
            giraffe.name = 'coucou2';
            // giraffe.energyLevel = 40;
        }, 2000);

        setTimeout(() => {
            console.log('coucou3');
            // giraffe.name = 'coucou2';
            giraffe.energyLevel = 20;
        }, 4000);
    }

    test() {
        console.log('clickkkk');
    }

    // Render

    render() {
        this._shadow!.innerHTML = /* html*/`
            ${html2}
            <style>
                ${css}
            </style>
        `;
    }
}
