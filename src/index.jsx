import React from 'react';
import {render} from 'react-dom';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/styles/hljs';
import {CodeStage} from './codeStage';
import {LoadCode} from './loadCode';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeElem: "",
        }
    }

    setCodeStage() {
        return this.state.codeElem;
    }

    callbackLoadCode(elem) {
        this.setState({
            codeElem: elem,
        });
        console.log(elem);
    }


    render() {
        return (
            <div>
                <CodeStage element={()=>this.setCodeStage()} />
                <LoadCode callback={(elem)=>this.callbackLoadCode(elem)} />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));