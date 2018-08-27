import React from 'react';

export class CodeStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elem: props.element,
        }
    }


    getCodeElem() {
        return this.props.element;
    }


    render() {
        if(this.props.element==="") {
            return null;
        }

        const codeTag = this.props.element.children[0].children[0];
        if(!codeTag.children[0]) {
            return null;
        }

        return (
            <div dangerouslySetInnerHTML={{__html: codeTag.innerHTML}}>

            </div>
        )
    }
}