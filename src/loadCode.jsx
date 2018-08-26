import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/styles/hljs';

export class LoadCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: null,
            extension: "",
            code: "",
        }
    }


    fileChange(ev) {
        this.setState(
            {files: ev.currentTarget.files}
        );
    }

    

    displayCode(ev) {
        const file = this.state.files[0];
        
        const fileTypeDict = {
            "js": "javascript",
            "go": "go",
            "py": "python",
            "rb": "ruby",
            "java": "java",
            "pde": "java",
        }
        const splits = file.name.split(".");
        const extensionKey = splits[splits.length-1];
        const extensionValue = fileTypeDict[extensionKey];

        const fileReader = new FileReader();

        fileReader.onload = () => {
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
                    onChange={(ev)=>this.fileChange(ev)}
                />
                <input 
                    type="button" 
                    value="反映" 
                    onClick={(ev)=>this.displayCode(ev)}
                />
                <div ref={(elem)=>{
                        // console.log( this.props.callback(elem) );
                    }}>
                    <SyntaxHighlighter 
                        language={this.state.extension}
                        style={railscasts}
                    >
                        {this.state.code}
                    </SyntaxHighlighter>
                </div>
            </div>
        )
    }
}