import React from "react";
import Header from "./components/header";
import Input from "./components/input";
import './App.css'
import Output from "./components/output";

class  App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        inputValue: undefined,
        className: '',
        listItems:[],
    }
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
this.pushListItem=this.pushListItem.bind(this);
this.handleChoose = this.handleChoose.bind(this);
this.deleteItems = this.deleteItems.bind(this);
}

pushListItem = ()=>{
   if (this.state.inputValue) this.state.listItems.push({inputValue:this.state.inputValue,isChosen:false, className:'list__Item'})
}

handleChange(event) {
 this.setState({ inputValue: event.target.value })
}

handleSubmit(event) {
  event.preventDefault();
  this.pushListItem();
  this.setState({inputValue :undefined})
}

handleChoose(event){
  let tempStr = event.target.className
  const index = event.target.id
  const tempArr = [...this.state.listItems]
  tempArr[index].isChosen = !this.state.listItems[index].isChosen;
  tempArr[index].isChosen?tempStr+=' done':tempStr=tempStr.slice(0,tempStr.indexOf(' done'))
  tempArr[index].className = tempStr
  this.setState({listItems:[...tempArr]})
  //event.target.className=tempStr
}
deleteItems (event){
  event.preventDefault();
  this.setState({listItems:[...this.state.listItems.filter(e=>e.isChosen===false)]})
  //console.log('new listItems after delete >>',this.state.listItems)
}

  render(){
    return (
      <div className="container">
        <Header />
        <Input handleSubmit = {this.handleSubmit} handleChange={this.handleChange}/>
        <Output outputItems = {this.state.listItems} handleChoose={this.handleChoose} deleteItems = {this.deleteItems}/>
      </div>
    );
  }
  
}
export default App;
