import "./App.css";
import { Component } from "react";
import BtnContainer from "./components/BtnContainer/BtnContainer";
import MsgContainer from "./components/MsgContainer/MsgContainer";

export default class App extends Component {
  state = {
    spice: 1,
    message: "Nice"
  }
  
  renderMessage = (spice) => {
    switch(true) {
      case (spice === 0):
        this.setState({message: "A little kick"})
        break
      case (spice >= 1 && spice < 3):
        this.setState({message: "Nice"})
        break
      case (spice >= 3 && spice < 5):
        this.setState({message: "Start mopping your brow"})
        break
      case (spice >= 5 && spice < 10):
        this.setState({message: "Watch out"})
        break
      case (spice >= 10 && spice < 15):
        this.setState({message: "Are you sure?"})
        break
      case (spice >= 15 && spice < 20):
        this.setState({message: "Some like it hot"})
        break
      case (spice === 20):
        this.setState({message: "May cause stomach upset"})
        break
    }
  }

  handleAddSpice = () => {
    if (this.state.spice < 20) {
      this.setState(state => ({spice: state.spice + 1}), () => {
        this.renderMessage(this.state.spice)
      })
    }
  }

  handleSubtractSpice = () => {
    if (this.state.spice > 0) {
      this.setState(state => ({spice: state.spice - 1}), () => {
        this.renderMessage(this.state.spice)
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Salad King Pepper Chart SPA</h1>
        <BtnContainer 
          handleAddSpice={this.handleAddSpice}
          handleSubtractSpice={this.handleSubtractSpice}
        />
        <MsgContainer 
          spice={this.state.spice}
          message={this.state.message}
        />
      </div>
    );
  }
}
