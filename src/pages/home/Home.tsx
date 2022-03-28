import {StateAndProps} from '../../App';
import {UserService} from '../../services/UserService';
import {useEffect, useState} from 'react';
import {Manager} from '../../managers/Manager';
import styled, { css } from 'styled-components';
import {ComponentController, UseStateSet} from '../ComponentController';

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
export default Home;