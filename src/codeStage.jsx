import React from 'react';

export class CodeStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elem: props.element,
        }
    }

    render() {
        const topClass = [
            this.props.element && this.props.element.children[0].children[0].children[0] ? "top-active" : "top-deactive"
        ].join(" ");

        const bottomClass = [
            this.props.element && this.props.element.children[0].children[0].children[0] ? "bottom-active" : "bottom-deactive"
        ].join(" ");

        return (
            <div className={"code-stage"}>
            {
                this.props.element
                    ? <div className={bottomClass} dangerouslySetInnerHTML={{__html: this.props.element.innerHTML}} />
                    : <div className={bottomClass} />
            }
            </div>
        );
    }
}