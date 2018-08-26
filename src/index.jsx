import React from 'react';
import {render} from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

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
        this.state = {
            files: null,
            extension: "",
            code: "",
        }
    }

    fileChange(e) {
        this.setState(
            {files: e.currentTarget.files}
        );
    }


    displayCode(e) {
        
        const file = this.state.files[0];
        const fileReader = new FileReader();
        const fileTypeDict = {
            "js": "javascript",
            "go": "go",
            "py": "python",
            "rb": "ruby",
            "java": "java",
            "pde": "java",
        }
        const splits = file.name.split(".");
        console.log(splits);
        const extensionKey = splits[splits.length-1];
        const extensionValue = fileTypeDict[extensionKey];
        console.log(extensionKey);
        console.log(extensionValue);
        fileReader.onload = (extension) => {
            this.setState({
                extension: extensionValue,
                code: fileReader.result,
            });
        };
        fileReader.readAsText(file);

    }

    render() {
        return (
            <div>
                <input 
                    type="file"
                    onChange={(e)=>this.fileChange(e)}
                />
                <input 
                    type="button" 
                    value="反映" 
                    onClick={(e)=>{
                        console.log("hoge");
                        console.log(this.state.files);
                        this.displayCode(e)
                    } }
                />
                <div>
                    <SyntaxHighlighter 
                        language={this.state.extension}
                        style={docco}
                    >
                        {this.state.code}
                    </SyntaxHighlighter>
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