import React from 'react';
import {render} from 'react-dom';

class CodeStage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

class LoadCode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="file" />
                <div>

                </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CodeStage />
                <LoadCode />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));