import React from 'react';

export class CodeStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elem: props.element,
        }
    }


    // getCodeElem() {
    //     return this.props.element;
    // }


    render() {
        // if(this.props.element===null) {
        //     return null;
        // }
        // console.log(this.props.element);


        // const codeTag = this.props.element.children[0].children[0];
        // if(!codeTag.children[0]) {
        //     return null;
        // }



        // console.log(codeTag.text)
        // const newArray = splitArray.map((x) => {return `<p>${x}</p>`;});
        // console.log(newArray);

        
        // const tag = codeTag.innerHTML
            // .replace(/\n/g, "<br/>")
                        // .replace(/ /g, "&nbsp;")


        // const splitArray = codeTag.innerHTML.split("\n");
        

        // console.log(tag);

        // console.log(splitArray);
        // splitArray.map((x) => {console.log(x)});
        // const codeClass = "codeStage";


        


        // const code = <div></div>

        // const codeClass = 'codeStage';


        const topClass = [
            // "stage-top",
            this.props.element && this.props.element.children[0].children[0].children[0] ? "top-active" : "top-deactive"
        ].join(" ");

        const bottomClass = [
            // "stage-bottom",
            this.props.element && this.props.element.children[0].children[0].children[0] ? "bottom-active" : "bottom-deactive"
        ].join(" ");

        // console.log(this.props.element.children.children);

        // const elem = this.props.element 
        //            ? 
        


        return (
            <div className={"code-stage"}>
            {/* {
                this.props.element
                    ? <div className={topClass} dangerouslySetInnerHTML={{__html: this.props.element.innerHTML}} />
                    : <div className={topClass} />
            } */}
            {
                this.props.element
                    ? <div className={bottomClass} dangerouslySetInnerHTML={{__html: this.props.element.innerHTML}} />
                    : <div className={bottomClass} />
            }
            </div>
        );
    }
}