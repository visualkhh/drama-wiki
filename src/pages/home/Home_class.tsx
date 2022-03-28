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
    // private _userData: UseStateSet<string>;
    // private userService: UserService;
    constructor(props: StateAndProps) {
        super(props);

        // this.userService = props.manager.get(UserService);
        // this._userData = this.useState('')
    }

    componentDidMount() {
        console.log('------')
        // useEffect(() => {
        //     console.log('------>', this)
        //     this.onInit();
        //     return this.onDestroy
        // }, []);
    }
    componentDidUpdate() {
        console.log("Component did update", this.state.buttonPressed)
    }


// get userData() {
    //   return this._userData.data;
    // }
    // set userData(data: string) {
    //     this._userData.setData(data);
    // }
    //
    // onInit() {
    //     this.userService.getData().then(it => {
    //         this.userData = it;
    //     })
    // }
    //
    // onDestroy() {
    //     console.log('exit')
    // }

    render() {
      return (<StyledContainer>
          <h1>Hello World</h1>
            <div>
                <button onClick={() => {console.log(this)}}>2222</button>
            </div>
      </StyledContainer>)
    }
}
// function Home(props: StateAndProps) {
//     const data = new HomeController(props);
//   return (
//       <StyledContainer>
//           <h1>Hello World</h1>
//             <div>{data.userData}</div>
//             <div>
//                 <button onClick={() => {data.userData = 'zzz'}}>2222</button>
//             </div>
//       </StyledContainer>
//   );
// }
// export default Home;
export default HomeController;