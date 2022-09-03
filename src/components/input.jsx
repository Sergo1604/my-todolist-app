import React from "react";
class Input extends React.Component {
    render() {
        return (
            <div className='input'>
                <h2>Please, Enter listItem</h2>
                <form className='form' onSubmit = {this.props.handleSubmit}>
                    <input type="text" name="action" placeholder="Input" onChange = {this.props.handleChange}/>
                    <button className='btn'>Add listItem </button>
                </form>
            </div>
        )
    }
}
export default Input;