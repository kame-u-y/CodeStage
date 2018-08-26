import React from 'react';

export class CodeStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elem: props.element,
        }
    }


    getCodeElem() {
        return this.state.elem
    }


    render() {
        const elements = this.getCodeElem();
        console.log(elements);
        return (
            <div>
            </div>
        )
    }
}