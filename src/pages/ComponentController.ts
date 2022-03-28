import {Component, Dispatch, SetStateAction} from 'react';
import {useEffect, useState} from 'react';
import {StateAndProps} from '../App';
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