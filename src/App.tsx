import React, {useReducer, useRef, useState} from 'react'
import {BrowserRouter} from 'react-router-dom';
import logo from './logo.svg'
import {Routes, Route, Link} from "react-router-dom";
import './App.css'
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import GlobalState from './states/GlobalState';
import {Manager} from './managers/Manager';
export type StateAndProps = {
    manager: Manager;
    globalState: any;
    [key: string]: any;
}
function App() {

    console.log('apppppppppp')
    const [count, setCount] = useState(0)
    const state: StateAndProps = {
        manager: new Manager(),
        globalState: {}
    };
    const change = () => {
        console.log('------>', state)
    }
    return (
        <GlobalState {...state} >
            <header> header2
                <div>
                    <Link to="/">Home</Link>,
                    <Link to="/1">Detail</Link>
                </div>
                <button onClick={change}>aaaaa</button>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home {...state} />}/>
                    <Route path="/:id" element={<Detail {...state}/>}/>
                </Routes>
            </main>
            <footer>footer</footer>
        </GlobalState>
    )
}

export default App
