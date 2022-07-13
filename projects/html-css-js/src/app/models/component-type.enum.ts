import { BaseComponent } from '../components/base/base.component';
import { HeightComponent } from '../components/height/height.component';
import { SliderComponent } from '../components/slider/slider.component';
import { SelecterComponent } from '../components/selecter/selecter.component';
import { ExceptionUtils } from './exception.utils';
import { Constructor } from './generic.type';

export enum ComponentType {
    Height = 'app-height',
    Slider = 'app-slider',
    Selecter = 'app-selecter'
}

export namespace ComponentType {

    export function getAll(): ComponentType[] {
        return Object.keys(ComponentType)
            .map(key => ComponentType[key])
            .filter(value => typeof value === 'string');
    }

    export function getComponent(type: ComponentType): Constructor<BaseComponent> {
        switch (type) {
            case ComponentType.Height:
                return HeightComponent;
            case ComponentType.Slider:
                return SliderComponent;
            case ComponentType.Selecter:
                return SelecterComponent;
            default:
                ExceptionUtils.assertUnreachable(type);
        }
    }

    export function getTitle(type: ComponentType): string | null {
        switch (type) {
            case ComponentType.Height:
                return 'height';
            case ComponentType.Selecter:
                return 'selecter';
            default:
                return null;
        }
    }

    export function isCompliantWithListing(type: ComponentType): boolean {
        return getTitle(type) != null;
    }
}
