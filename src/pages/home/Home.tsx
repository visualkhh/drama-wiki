import {StateAndProps} from '../../App';
import {UserService} from '../../services/UserService';
import {useEffect, useState} from 'react';

function Home(props: StateAndProps) {
    const userService = props.manager.get(UserService);
    const [data, setData] = useState('data');
    useEffect(() => {
        userService.getData().then(it => {
            setData(it);
        })
        return () => {
            console.log('exit')
        }
    }, []);
    console.log('home props', props);
  return (
    <div>
      <h1>Hello World</h1>
        <div>{data}</div>
    </div>
  );
}
export default Home;