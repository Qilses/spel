import GameObject from "./GameObject" 
import ball from "./Ball"
import input from "./Input"
import player from "./Player"

export default class Game { // skapar klassen
  constructor(width, height) { // klassens constructor
    this.width = width
    this.height = height
    console.log("Ny instans av game ", this.width)
    this.box = new GameObject(40, 40, 200, 200, "purple")
    this.ball = new ball(100, 350, 100 ,100 , "red")
    this.player = new player(0, 0, 50, 50, "green", this)
    this.input = new input(this)

  }

  update(deltaTime) {
    this.box.update(deltaTime)
    this.ball.update(deltaTime)
    this.player.update(deltaTime) 
  }

  draw(ctx) {
    this.box.draw(ctx)
    this.ball.draw(ctx)
    this.player.draw(ctx)
    
  }
 }