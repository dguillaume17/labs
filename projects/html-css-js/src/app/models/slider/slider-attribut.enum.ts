export enum SliderAttribute {
    Unit = 'unit',
    Value = 'value'
}

export namespace SliderAttribute {

    export function getAll(): SliderAttribute[] {
        return Object.keys(SliderAttribute)
            .map(key => SliderAttribute[key])
            .filter(value => typeof value === 'string');
    }

}
