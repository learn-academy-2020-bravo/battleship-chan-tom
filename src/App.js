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
      shipsRemaining: 24,
      winText: false,
      gameOver: false
    }
  }

  handleChange = (click) =>  {
    if (this.state.gameOver === false){
      if (this.state.grid[click] === "white") {
        this.setState({grid: this.state.grid.map((value,index) => {
          if (click === index) {
            return "red"
          } else return value;
        }), torpedoCount: this.state.torpedoCount - 1})
      }
      if (this.state.battleships[click] === 1)  {
        this.setState({ shipsRemaining: this.state.shipsRemaining - 1})
      }
    }
  }

  checkWinner = () => {
    if (this.state.shipsRemaining === 0 && this.state.winText === false)  {
      this.setState({winText: true})
    } else if (this.state.torpedoCount === 0 && this.state.gameOver === false) {
      this.setState({gameOver: true})
    }
  }

  componentDidMount() {
    let currentArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let forbiddenArray = []
    let fiveShip = 0
    let fourShipVert = 1
    let fourShipHor = 1
    let threeShipVert = 1
    let threeShipHor = 1
    let twoShipVert = 1
    let twoShipHor = 1
    let oneShipCount = 1

    while (fiveShip > 0) {
      let random = Math.floor(Math.random() * 100)
      console.log("fiveShip start:",random)
      if (!forbiddenArray.includes(random)&& 
        !forbiddenArray.includes(random+1) && 
        !forbiddenArray.includes(random+2) && 
        !forbiddenArray.includes(random+3) && 
        !forbiddenArray.includes(random+4) && 
        Math.floor((random+4)/10) === Math.floor(random/10)) {
          //removes boxes above random
          if (random - 10 >= 0){
            forbiddenArray.push(random-10, random-9, random - 8, random - 7, random - 6)}
          
          //removes boxes below random
          if (random + 10 < 100){
            forbiddenArray.push(random+10, random + 11, random + 12, random + 13, random +14)}
          
          //removes the box to the left
          if (Math.floor((random - 1)/10) === Math.floor(random /10)){
            forbiddenArray.push(random-1)}
          
          //removes the box to the right 
          if (Math.floor((random + 4)/10) === Math.floor((random +5)/10)){
            forbiddenArray.push(random+5)}
          //removes the ship location
          forbiddenArray.push(random, random+1, random+2, random+3, random+4)
          //sets the ship location to 1 so it shows if clicked
          currentArray[random] = 1
          currentArray[random +1 ] = 1
          currentArray[random +2 ] = 1
          currentArray[random +3 ] = 1
          currentArray[random +4 ] = 1
          //subtracts from the amount of ships remaining
          fiveShip--
      }
    }
    while (fourShipHor > 0) {
      let random = Math.floor(Math.random() * 100)
      console.log("fourShipHor start:",random)
      if (!forbiddenArray.includes(random)&& 
        !forbiddenArray.includes(random+1) && 
        !forbiddenArray.includes(random+2) && 
        !forbiddenArray.includes(random+3) && 
        Math.floor((random+3)/10) === Math.floor(random/10)) {
          //removes boxes above random
          if (random - 10 >= 0){
            forbiddenArray.push(random-10, random-9, random - 8, random - 7)}
          
          //removes boxes below random
          if (random + 10 < 100){
            forbiddenArray.push(random+10, random + 11, random + 12, random + 13)}
          
          //removes the box to the left
          if (Math.floor((random - 1)/10) === Math.floor(random /10)){
            forbiddenArray.push(random-1)}
          
          //removes the box to the right 
          if (Math.floor((random + 3)/10) === Math.floor((random +4)/10)){
            forbiddenArray.push(random+4)}
          //removes the ship location
          forbiddenArray.push(random, random+1, random+2, random+3)
          //sets the ship location to 1 so it shows if clicked
          currentArray[random] = 1
          currentArray[random +1 ] = 1
          currentArray[random +2 ] = 1
          currentArray[random +3 ] = 1
          
          //subtracts from the amount of ships remaining
          fourShipHor--
      }
    }
    while (fourShipVert > 0) {
      let random = Math.floor(Math.random() * 100)
      console.log("fourShipVert start:",random)
      if (!forbiddenArray.includes(random)&& 
        !forbiddenArray.includes(random+10) && 
        !forbiddenArray.includes(random+20) && 
        !forbiddenArray.includes(random+30) && 
        random+30<100) {
          //removes box above random
          if (random - 10 >= 0){
            forbiddenArray.push(random-10)}
          
          //removes box below random
          if (random + 40 < 100){
            forbiddenArray.push(random+40)}
          
          //removes the boxes to the left
          if (Math.floor((random - 1)/10) === Math.floor(random /10)){
            forbiddenArray.push(random-1, random +9, random +19, random +29)}
          
          //removes the box to the right 
          if (Math.floor((random + 1)/10) === Math.floor((random)/10)){
            forbiddenArray.push(random+1, random +11, random+ 21, random +31)}
          //removes the ship location
          forbiddenArray.push(random, random+10, random+20, random+30)
          //sets the ship location to 1 so it shows if clicked
          currentArray[random] = 1
          currentArray[random +10 ] = 1
          currentArray[random +20 ] = 1
          currentArray[random +30 ] = 1
          fourShipVert--
          }
    }
    while (threeShipVert > 0) {
      let random = Math.floor(Math.random() * 100)
      console.log("threeShipVert start:",random)
      if (!forbiddenArray.includes(random)&& 
        !forbiddenArray.includes(random+10) && 
        !forbiddenArray.includes(random+20) && 
        random+20<100) {
          //removes box above random
          if (random - 10 >= 0){
            forbiddenArray.push(random-10)}
          
          //removes box below random
          if (random + 30 < 100){
            forbiddenArray.push(random+30)}
          
          //removes the boxes to the left
          if (Math.floor((random - 1)/10) === Math.floor(random /10)){
            forbiddenArray.push(random-1, random +9, random +19)}
          
          //removes the box to the right 
          if (Math.floor((random + 1)/10) === Math.floor((random)/10)){
            forbiddenArray.push(random+1, random +11, random+ 21)}
          //removes the ship location
          forbiddenArray.push(random, random+10, random+20)
          //sets the ship location to 1 so it shows if clicked
          currentArray[random] = 1
          currentArray[random +10 ] = 1
          currentArray[random +20 ] = 1
          threeShipVert--
          }
    }
    while (threeShipHor > 0) {
      let random = Math.floor(Math.random() * 100)
      console.log("threeShipHor start:",random)
      if (!forbiddenArray.includes(random)&& 
        !forbiddenArray.includes(random+1) && 
        !forbiddenArray.includes(random+2) && 
        Math.floor((random+2)/10) === Math.floor(random/10)) {
          //removes boxes above random
          if (random - 10 >= 0){
            forbiddenArray.push(random-10, random-9, random - 8)}
          //removes boxes below random
          if (random + 10 < 100){
            forbiddenArray.push(random+10, random + 11, random + 12)}
          
          //removes the box to the left
          if (Math.floor((random - 1)/10) === Math.floor(random /10)){
            forbiddenArray.push(random-1)}
          
          //removes the box to the right 
          if (Math.floor((random + 2)/10) === Math.floor((random +3)/10)){
            forbiddenArray.push(random+3)}
          //removes the ship location
          forbiddenArray.push(random, random+1, random+2)
          //sets the ship location to 1 so it shows if clicked
          currentArray[random] = 1
          currentArray[random +1 ] = 1
          currentArray[random +2 ] = 1
          
          //subtracts from the amount of ships remaining
          threeShipHor--
      }
    }
    while (twoShipHor > 0) {
      let random = Math.floor(Math.random() * 100)
      console.log("twoShipHor start:",random)
      if (!forbiddenArray.includes(random)&& 
        !forbiddenArray.includes(random+1) && 
        Math.floor((random+1)/10) === Math.floor(random/10)) {
          //removes boxes above random
          if (random - 10 >= 0){
            forbiddenArray.push(random-10, random-9)}
          //removes boxes below random
          if (random + 10 < 100){
            forbiddenArray.push(random+10, random + 11)}
          
          //removes the box to the left
          if (Math.floor((random - 1)/10) === Math.floor(random /10)){
            forbiddenArray.push(random-1)}
          
          //removes the box to the right 
          if (Math.floor((random + 1)/10) === Math.floor((random +2)/10)){
            forbiddenArray.push(random+2)}
          //removes the ship location
          forbiddenArray.push(random, random+1)
          //sets the ship location to 1 so it shows if clicked
          currentArray[random] = 1
          currentArray[random +1 ] = 1
          
          //subtracts from the amount of ships remaining
          twoShipHor--
      }
    }
    while (twoShipVert > 0) {
      let random = Math.floor(Math.random() * 100)
      console.log("twoShipVert start:",random)
      if (!forbiddenArray.includes(random)&& 
        !forbiddenArray.includes(random+10) && 
        random+10<100) {
          //removes box above random
          if (random - 10 >= 0){
            forbiddenArray.push(random-10)}
          
          //removes box below random
          if (random + 20 < 100){
            forbiddenArray.push(random+20)}
          
          //removes the boxes to the left
          if (Math.floor((random - 1)/10) === Math.floor(random /10)){
            forbiddenArray.push(random-1, random +9)}
          
          //removes the box to the right 
          if (Math.floor((random + 1)/10) === Math.floor((random)/10)){
            forbiddenArray.push(random+1, random +11)}
          //removes the ship location
          forbiddenArray.push(random, random+10)
          //sets the ship location to 1 so it shows if clicked
          currentArray[random] = 1
          currentArray[random +10 ] = 1
          twoShipVert--
          }
    }
    while (oneShipCount > 0)  {
      let random = Math.floor(Math.random() * 100)
      console.log("oneShip start:", random)
      if (!forbiddenArray.includes(random)) {
        currentArray[random] = 1;
        forbiddenArray.push(random);
        //removes box from above random
        if (random - 10 >= 0){
          forbiddenArray.push(random-10)}
        //removes box from below random
        if (random + 10 < 100){
          forbiddenArray.push(random+10)}
        //removes box to the left of random
        if (Math.floor((random - 1)/10) === Math.floor(random /10)){
          forbiddenArray.push(random-1)}
        //removes box to the right of random
        if (Math.floor((random + 1)/10) === Math.floor(random /10)){
          forbiddenArray.push(random+1)}
        oneShipCount--;
      }
    }

    console.log(currentArray)
    console.log(forbiddenArray)
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
          gameOver = {this.state.gameOver}
        />
      )
    })
    return(
      <React.Fragment>
      {this.checkWinner()}
        <h1>Battleship</h1>
        <div id="holder">
          <div id="grid">
            { grid }
          </div>
        </div>
        <p> YOU HAVE {this.state.torpedoCount} TORPEDOS REMAINING</p>
       
        <p> THERE ARE {this.state.shipsRemaining} UNHIT SHIP QUADRANTS REMAINING</p>
        <p> { this.state.winText && "YOU HAVE SUNK ALL THE SHIPS. YOU HAVE WON." } </p>
        <p>{ this.state.gameOver && "YOU COULD NOT FIND ALL THE SHIPS. GAME OVER - YOU LOSE." } </p>
      </React.Fragment>
    )
  }
}
export default App
