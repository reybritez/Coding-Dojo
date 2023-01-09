import React, {useState} from 'react';

const StatefulComponent = props => {
    const [state, setState] = useState({
        clickCount: 0
    })
    const clickHandler = e => {
        console.log(state);
        setState({
            clickCount: state.clickCount + 1
        })
    }
    return(
        <div>
            <button onClick={clickHandler}>Haz presionado el boton {state.clickCount} veces</button>
        </div>
    )
}

export default StatefulComponent;