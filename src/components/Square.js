import React, { Component } from 'react'

class Square extends Component{
  constructor(props){
    super(props)
    this.state = {
      revealShip: false
    }
  }

  showIfHit = () => {
    if (this.props.battleships[this.props.index] === 1 && this.props.gameOver === false) {
      this.setState({revealShip: true})
    }
  }

  showShipsGameOver = () => {
    if (this.props.gameOver === true && this.props.battleships[this.props.index] === 1 && this.state.revealShip === false) {
      this.setState({revealShip: true})
    }
  }

  render(){

    return(
      <React.Fragment>
        {this.showShipsGameOver()}
        <div
          id="square"
          style = { {backgroundColor: this.props.grid[this.props.index]} }
          onClick = {() => {
            this.props.handleChange(this.props.index)
            this.showIfHit()
          }}
        >
       { this.state.revealShip && "Ship" }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
