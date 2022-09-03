import React from "react";

class Output extends React.Component {
    render() {
        const outputList = this.props.outputItems.map((e, index) => 
        <li className={e.className} id={index} onClick={this.props.handleChoose}>{e.inputValue}</li>)
        return (
            <div >
                <span className='help__Item'>To select a list item, click on it, to cancel, click again</span>
                <ol className="list__Items">
                    {outputList}
                </ol>
                
                <button className="btn" onClick = {this.props.deleteItems}>Delete items</button>
            </div>
        )
    }
}
export default Output;