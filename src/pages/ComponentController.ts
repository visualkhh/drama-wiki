import {Component, Dispatch, SetStateAction} from 'react';
import {useEffect, useState} from 'react';
import {StateAndProps} from '../App';
import "reflect-metadata";
import {StateMetadataKey, StateSaveConfig} from '../decorators/State';
export type UseStateSet<S> = {
    data: S;
    setData: Dispatch<SetStateAction<S>>;
}
// export class ComponentController extends Component<StateAndProps, any>{
export class ComponentController {

    constructor(props: StateAndProps) {
        useEffect(() => {
            console.log('------>', this)
            this.onInit();
            return this.onDestroy
        }, []);
    }

    public onInit(): void {};
    public onDestroy(): void {};

    public useState<S>(initialState: S | (() => S)): UseStateSet<S> {
        const [data, setData] = useState(initialState);
        return {data, setData}
    }
    // public
}


export class CComponentController extends Component<any, any>{
    _isBoot = false;
    constructor(props: any, context: any) {
        super(props, context);
    }

    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate---------')
    //     if (!this._isBoot) {
    //         this.boot();
    //         this._isBoot = true;
    //     }
    //     return true;
    // }

    protected boot() {
        console.log('----proep----', Object.getPrototypeOf(this))
        const constructor = Object.getPrototypeOf(this).constructor;
        const statePropertys = Reflect.getMetadata(StateMetadataKey, constructor) as StateSaveConfig[]
        if (statePropertys) {
            this.state = {};
            statePropertys?.forEach(it => {
                (this.state as any)[it] = (this as any)[it];
                // console.log('--------property-->',  it.propertyKey)
                Object.defineProperty(this, it, {
                    get() {
                        console.log('----gggggggget?', it)
                        return (this.state as any)[it];
                    },
                    set(value: any) {
                        this.setState(Object.assign({}, this.state, {[it]: value}))
                    },
                    configurable: true
                });
            })
        }
        // Object.defineProperty(this, 'name', {
        //     get() {
        //         return 'zvvvvvvvvvvvvvvvvv'
        //     },
        //     set(value: any) {
        //     },
        //     configurable: true
        // });
        // // delete (this as any).name
        // console.log('boot-->', this.state, (this as any).name);
    }
}