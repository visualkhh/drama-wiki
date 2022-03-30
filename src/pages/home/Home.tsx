import {StateAndProps} from '../../App';
import {UserService} from '../../services/UserService';
import React, {Component, useEffect, useState} from 'react';
import {Manager} from '../../managers/Manager';
import styled, { css } from 'styled-components';
import {CComponentController, ComponentController, UseStateSet} from '../ComponentController';
import "reflect-metadata";
import {State} from '../../decorators/State';

const StyledContainer = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
`;
class HomeController extends ComponentController {
    private _userData: UseStateSet<string>;
    private userService: UserService;
    constructor(props: StateAndProps) {
        super(props);
        this.userService = props.manager.get(UserService);
        this._userData = this.useState('')
    }
    get userData() {
      return this._userData.data;
    }
    set userData(data: string) {
        this._userData.setData(data);
    }

    onInit() {
        this.userService.getData().then(it => {
            this.userData = it;
        })
    }

    onDestroy() {
        console.log('exit')
    }

}
function Home(props: StateAndProps) {
    const data = new HomeController(props);
  return (
      <StyledContainer>
          <h1>Hello World</h1>
            <div>{data.userData}</div>
            <div>
                <button onClick={() => {data.userData = 'zzz'}}>2222</button>
            </div>
      </StyledContainer>
  );
}


export const formatMetadataKey = Symbol("format");

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    // console.log('---classDecorator------>',  Reflect.getOwnMetadata(formatMetadataKey, constructor))
    const a = class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
    let naty  = {
        net() {
            return 'use net';
        }
    }
// Set raay's __proto__ to naty's  __proto__'s  __proto__
    console.log('--classDecorator---?', constructor)
    let newVar = class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
    // Object.setPrototypeOf(newVar, naty);
    return newVar
}



const format = (formatString: string) => {
    // console.log('--format------->', formatString);
    return (target: any, propertyKey: string | symbol) => {
        console.log('--format----', target, target.constructor,  propertyKey);
        Reflect.defineMetadata(formatMetadataKey, formatString, target, propertyKey)
    }
    // return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    console.log('-getFormat----->', target, target.constructor, propertyKey)
    // const a = Reflect.getMetadataKeys(target);
    // const a = Reflect.getMetadata(formatMetadataKey, target,propertyKey);
    const a = Reflect.getOwnMetadata(formatMetadataKey, target,propertyKey);
    console.log('--?뭐야.---', a)
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
// @classDecorator
// class Test extends Component<any, any> {
//     constructor(props: any, context: any) {
//         super(props, context);
//     }
//     greet() {
//         let formatString = getFormat(this, "name");
//         return formatString.replace("%s", this.name);
//     }
//     setName() {
//         console.log('-----', this)
//         this.name = new Date().toISOString();
//     }
//
//     render() {
//         return <div>[{this.greet()}]aa{(this as any).newProperty}a222<button onClick={() => {this.setName()}}>dd</button></div>;
//     }
// }

class Test2 extends CComponentController {
    @State
    name: string='22';
    @State
    age: string='33';

    constructor(props: any, context: any) {
        super(props, context);
        this.boot();
    }


// greet() {
    //     let formatString = getFormat(this, "name");
    //     return formatString.replace("%s", this.name);
    // }
    setName() {
        // console.log('-----', this)
        this.name = new Date().toISOString();
    }

    shouldComponentUpdate(nextProps:Readonly<any>, nextState:Readonly<any>, nextContext:any) {
        console.log('shouldComponentUpdate')
        return true;
    }
    render() {
        console.log('rander--->', this, this.name);
        return <div>[{this.name}]aa222  [{(this as any).name2}]<button onClick={() => {this.setName()}}>dd</button></div>;
    }
}
// React.createElement(Test2, {toWhat: 'World'}, null);
export default Test2;