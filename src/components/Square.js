import React, { Component } from 'react'
import ShipPic from '../images/shipicon.png'

class Square extends Component{
  constructor(props){
    super(props)
    this.state = {
      revealShip: false
    }
  }

  showIfHit = () => {
    if (this.props.battleships[this.props.index] !== 0 && this.props.gameOver === false) {
      this.setState({revealShip: true})
    }
  }

  showShipsGameOver = () => {
    if (this.props.gameOver === true && this.props.battleships[this.props.index] !== 0 && this.state.revealShip === false) {
      this.setState({revealShip: true})
    }
  }

  resetShips = () => {
    if (this.props.resetGame === true && this.state.revealShip === true) {
      this.setState ({revealShip : false })
    }
  }

  render(){

    return(
      <React.Fragment>
        {this.showShipsGameOver()}
        {this.resetShips()}
        <div
          id="square"
          style = { {backgroundColor: this.props.grid[this.props.index]} }
          onClick = {() => {
            this.props.handleChange(this.props.index)
            this.showIfHit()
          }}
        >
        <div>{ this.state.revealShip && <img src= { ShipPic } /> }</div>
        </div>
      </React.Fragment>
    )
  }
}
export default Square
