import React, { Component } from 'react'

class Square extends Component{
  constructor(props){
    super(props)
    this.state = {
      revealShip: false
    }
  }

  showIfHit = () => {
    if (this.props.battleships[this.props.index] === 1) {
      this.setState({revealShip: true})
    }
    console.log("Im here")
  }

  render(){

    return(
      <React.Fragment>
        <div
          id="square"
          style = { {backgroundColor: this.props.grid[this.props.index]} }
          onClick = {() => {
            this.props.handleChange(this.props.index)
            this.showIfHit()
          }}
        >
       { this.state.revealShip && "HIT" }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
