import React, {useReducer} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {StateAndProps} from '../App';

const globalReducer = (state: any, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case 'ONE':
            return {count: state.count + 1}
        case 'TWO':
            return {count: state.count + 2}
        default:
            return;
    }
}
// Omin
type T0 = Parameters<typeof globalReducer>[1];
export const GlobalContext = React.createContext({} as {state: any, dispatch:  React.Dispatch<T0>})

function GlobalState(props: StateAndProps) {
    const [state, dispatch] = useReducer(globalReducer, {count: 5});
    console.log('-------2->', state, dispatch);
    // props.globalState = {state, dispatch};
    props.globalState.state = state;
    props.globalState.dispatch = dispatch;
    // console.log('-------2->', props.container);
    // console.log('------2-->', props);
    // props.children
    return(
    <GlobalContext.Provider value={{state, dispatch}}>
        <BrowserRouter>
            {props.children}
        </BrowserRouter>
    </GlobalContext.Provider>
    )
}
export default GlobalState;