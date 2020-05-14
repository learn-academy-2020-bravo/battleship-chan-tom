import React, { Component } from 'react'

class Square extends Component{
  
  colorChange = () => {
    let color = "red"
    console.log(color)
  }
  
  render(){
    let color = this.props.torpedoColor
    return(
      <React.Fragment>
        <div 
          id="square" 
          style = {{backgroundColor:color}}
          onClick = {this.colorChange}
        >

        </div>
      </React.Fragment>
    )
  }
}
export default Square
