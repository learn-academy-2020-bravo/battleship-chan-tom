import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      grid:[...Array(100).fill("white")],
      battleships: [...Array(100).fill(0)],
      torpedoCount: 50,
      shipsRemaining: 18,
      winText: false,
      gameOver: false,
      fourShipHor: 4,
      fourShipVert: 4,
      threeShipHor: 3,
      threeShipVert: 3,
      twoShipHor: 2,
      twoShipVert: 2,
      fourShipHorSunk: false,
      fourShipVertSunk: false,
      threeShipHorSunk: false,
      threeShipVertSunk: false,
      twoShipHorSunk: false,
      twoShipVertSunk: false
    }
  }

  handleChange = (click) =>  {
    if (this.state.gameOver === false && this.state.winText === false){
      if (this.state.grid[click] === "white") {
        this.setState({grid: this.state.grid.map((value,index) => {
          if (click === index) {
            return "red"
          } else return value;
        }), torpedoCount: this.state.torpedoCount - 1})
        if (this.state.battleships[click] !== 0)  {
          this.setState({ shipsRemaining: this.state.shipsRemaining - 1})
        }
        if (this.state.battleships[click] === 6) {
          this.setState({fourShipHor: this.state.fourShipHor - 1})
        } else if (this.state.battleships[click] === 5) {
          this.setState({fourShipVert: this.state.fourShipVert - 1})
        } else if (this.state.battleships[click] === 4) {
          this.setState({threeShipHor: this.state.threeShipHor - 1})
        } else if (this.state.battleships[click] === 3) {
          this.setState({threeShipVert: this.state.threeShipVert - 1})
        } else if (this.state.battleships[click] === 2) {
          this.setState({twoShipHor: this.state.twoShipHor - 1})
        } else if (this.state.battleships[click] === 1) {
          this.setState({twoShipVert: this.state.twoShipVert - 1})
        }
      }
    }
  }

  checkShipSunk = () => {
    if (this.state.fourShipHor === 0 && this.state.fourShipHorSunk === false)  {
      this.setState({fourShipHorSunk: true})
    }
    if (this.state.fourShipVert === 0 && this.state.fourShipVertSunk === false)  {
      this.setState({fourShipVertSunk: true})
    }
    if (this.state.threeShipHor === 0 && this.state.threeShipHorSunk === false)  {
      this.setState({threeShipHorSunk: true})
    }
    if (this.state.threeShipVert === 0 && this.state.threeShipVertSunk === false)  {
      this.setState({threeShipVertSunk: true})
    }
    if (this.state.twoShipHor === 0 && this.state.twoShipHorSunk === false)  {
      this.setState({twoShipHorSunk: true})
    }
    if (this.state.twoShipVert === 0 && this.state.twoShipVertSunk === false)  {
      this.setState({twoShipVertSunk: true})
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
    let currentArray = [...Array(100).fill(0)]
    let forbiddenArray = []
    let fiveShip = 0
    let fourShipVert = 1
    let fourShipHor = 1
    let threeShipVert = 1
    let threeShipHor = 1
    let twoShipVert = 1
    let twoShipHor = 1
    let oneShipCount = 0

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
          currentArray[random] = 8
          currentArray[random +1 ] = 8
          currentArray[random +2 ] = 8
          currentArray[random +3 ] = 8
          currentArray[random +4 ] = 8
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
          currentArray[random] = 6
          currentArray[random +1 ] = 6
          currentArray[random +2 ] = 6
          currentArray[random +3 ] = 6

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
          currentArray[random] = 5
          currentArray[random +10 ] = 5
          currentArray[random +20 ] = 5
          currentArray[random +30 ] = 5
          fourShipVert--
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
          currentArray[random] = 4
          currentArray[random +1 ] = 4
          currentArray[random +2 ] = 4

          //subtracts from the amount of ships remaining
          threeShipHor--
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
          currentArray[random] = 3
          currentArray[random +10 ] = 3
          currentArray[random +20 ] = 3
          threeShipVert--
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
          currentArray[random] = 2
          currentArray[random +1 ] = 2

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
        currentArray[random] = 7;
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
    // console.log(this.state.fourShipHor, this.state.fourShipVert)
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
      {this.checkShipSunk()}
      {this.checkWinner()}
        <h1>Battleship</h1>
        <div id="holder">
          <div id="grid">
            { grid }
          </div>
        </div>
        <p> YOU HAVE {this.state.torpedoCount} TORPEDOS REMAINING</p>
        <p> THERE ARE {this.state.shipsRemaining} UNHIT SHIP QUADRANTS REMAINING</p>
        <p> {this.state.fourShipHorSunk && "YOU HAVE SUNK THE HORIZONTAL FOUR SHIP"} </p>
        <p> {this.state.threeShipHorSunk && "YOU HAVE SUNK THE HORIZONTAL THREE SHIP"} </p>
        <p> {this.state.twoShipHorSunk && "YOU HAVE SUNK THE HORIZONTAL TWO SHIP"} </p>
        <p> {this.state.fourShipVertSunk && "YOU HAVE SUNK THE VERTICAL FOUR SHIP"} </p>
        <p> {this.state.threeShipVertSunk && "YOU HAVE SUNK THE VERTICAL THREE SHIP"} </p>
        <p> {this.state.twoShipVertSunk && "YOU HAVE SUNK THE VERTICAL TWO SHIP"} </p>
        <p> { this.state.winText && "YOU HAVE SUNK ALL THE SHIPS. YOU HAVE WON." } </p>
        <p>{ this.state.gameOver && "YOU COULD NOT FIND ALL THE SHIPS. GAME OVER - YOU LOSE." } </p>
      </React.Fragment>
    )
  }
}
export default App
