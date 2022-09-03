import React from "react";
class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date().toLocaleDateString()
        }
    }
    
    render() {
        return (
          <div className='header'>
            <h1>This is TodoList App</h1>
            <p>Today is : {this.state.date}</p>
          </div>
        )
      }
}
export default Header;