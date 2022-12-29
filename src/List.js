import { Component } from "react";
import image from "./point.jpg";

export class List extends Component{

state ={
userInput: "",
wishList: []
}    

 getUserInput(e){
    this.setState({ userInput: e })
 }

 addItem(input){
    if(input === ""){
        alert("Please, add a wish")
    } else {
let listArray = this.state.wishList;
listArray.push(input);
this.setState({wishList: listArray, userInput: ""});
 }
}

 crossedItem(e){
    const listItem = e.target;
    listItem.classList.toggle('crossed');
 }

 deleteItem(){
    let listArray = this.state.wishList;
    listArray = [];
    this.setState({wishList: listArray})
 }
 onFormSubmit(e){
    e.preventDefault();
 }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input className="input" 
                type="text" 
                placeholder="I wish for..."
                onChange={(e) =>{this.getUserInput(e.target.value)}}
                value={this.state.userInput}
                />

                <button  className="btn" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                
                <div className="container">
                <ul>
                    {this.state.wishList.map((item, index) =>(
                        <li onClick={this.crossedItem} key={index}>
                            <img src={image} alt="point" width="30px" />
                            {item}
                        </li>
                    ))}
                   
                </ul>
                </div>
                <div className="container">
                    <button className="btn" onClick={() => this.deleteItem()}>
                        Clear list</button>
                </div>
                </form>
            </div>
        )
    }
}