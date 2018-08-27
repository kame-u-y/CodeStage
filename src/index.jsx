import React from 'react';
import {render} from 'react-dom';
import {CodeStage} from './codeStage';
import {LoadCode} from './loadCode';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeElem: "",
        }
    }

    callbackLoadCode(elem) {
        this.setState({
            codeElem: elem,
        });
    }


    render() {
        return (
            <div>
                <CodeStage element={this.state.codeElem} />
                <LoadCode callback={(elem)=>this.callbackLoadCode(elem)} />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));