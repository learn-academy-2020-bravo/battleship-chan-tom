import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      grid:["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
      battleships: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      torpedoCount: 25,
      shipsRemaining: 5,
      winText: false
    }
  }

  handleChange = (click) =>  {
    if (this.state.grid[click] === "white") {
      this.setState({grid: this.state.grid.map((value,index) => {
        if (click == index) {
          return "red"
        } else return value;
      }), torpedoCount: this.state.torpedoCount - 1})
    }
    if (this.state.battleships[click] === 1)  {
      this.setState({ shipsRemaining: this.state.shipsRemaining - 1})
    }
  }

  checkWinner = () => {
    if (this.state.shipsRemaining === 0 && this.state.winText === false)  {
      this.setState({winText: true})
    }
  }

  componentDidMount() {
    let currentArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let forbiddenArray = []
    let oneShipCount = 5

    while (oneShipCount > 0)  {
      let random = Math.floor(Math.random() * 100)
      if (!forbiddenArray.includes(random)) {
        currentArray[random] = 1;
        forbiddenArray.push(random);
        oneShipCount--;
      }
    }

    console.log(currentArray)
    this.setState({battleships: currentArray})
  }

  render(){
    let grid = this.state.grid.map((value,index)=> {
      return (
        <Square
          index = {index}
          value = {value}
          grid = {this.state.grid}
          handleChange = {this.handleChange}
          battleships = {this.state.battleships}
        />
      )
    })
    return(
      <React.Fragment>
      {this.checkWinner()}
        <h1>Battleship App</h1>
        <div id="holder">
          <div id="grid">
            { grid }
          </div>
        </div>
        <p> YOU HAVE {this.state.torpedoCount} TORPEDOS REMAINING</p>
        <p> {this.state.battleships} </p>
        <p> THERE ARE {this.state.shipsRemaining} SHIPS REMAINING</p>
        <p> { this.state.winText && "YOU HAVE SUNK ALL THE SHIPS. YOU HAVE WON." } </p>
      </React.Fragment>
    )
  }
}
export default App
