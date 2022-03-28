import {StateAndProps} from '../../App';
import {UserService} from '../../services/UserService';
import {useEffect, useState} from 'react';
import {Manager} from '../../managers/Manager';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

`;

class HomeController {
    private _userData: string;
    private _setUserData: (value: (((prevState: string) => string) | string)) => void;
    private userService: UserService;

    constructor(manager: Manager) {
        this.userService = manager.get(UserService);
        const [userData, setUserData]  = useState('')
        this._userData = userData;
        this._setUserData = setUserData;
        useEffect(() => {
            this.userService.getData().then(it => {
                this.userData = it;
            })
            return () => {
                console.log('exit')
            }
        }, []);

    }

    get userData() {
      return this._userData;
    }
    set userData(data: string) {
        this._setUserData(data);
    }
}
function Home(props: StateAndProps) {
    const data = new HomeController(props.manager);

    console.log('home props', props);
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