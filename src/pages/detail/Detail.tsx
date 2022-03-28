import {useParams} from 'react-router';
import {useContext} from 'react';

function Detail(props: any) {
    console.log('detail props', props);
    const globalState = props.globalState;

    // const global = useContext(GlobalContext);
    // console.log(global);
    let {id} = useParams();
    const up = () => {
        globalState.dispatch({type: 'ONE', payload: 2});
    }
    return (
        <div>
            <h1>{id} Detail Hello World</h1>
            <h1>ss{globalState.state.count}</h1>
            <div>
                <button onClick={up}>upuoupupupp</button>
            </div>
        </div>
    );
}

export default Detail;