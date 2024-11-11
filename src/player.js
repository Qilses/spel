import GameObject from "./GameObject";


export default class player extends GameObject {
    constructor(x, y, width, height, color, game){
        super(x, y, width, height, color)
        this.game = game
       
        this.speedX = 0
        this.speedY = 1
        this.maxSpeedX = 1
        this.maxSpeedY = 5
    }
    update(deltaTime) {
        if (this.game.input.keys.has("ArrowLeft")) {
            console.log("pil vänster")
            this.speedX -= this.maxSpeedX
          }
          if (this.game.input.keys.has("ArrowRight")) {
            this.speedX += this.maxSpeedX
          }
          

          if (!this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft")) {
            this.speedX = 0
          }
      
          if (this.game.input.keys.has("ArrowUp")) {
            this.speedY -= this.maxSpeedY
            this.y -= 5
          } 
          if (!this.game.input.keys.has("ArrowUp")){
               this.speedY = 0
          }
      
          console.log(this.y)
          if (this.y > 400) {
            this.speedY = 0
          } else {
            this.speedY += 5
          }
        
          this.y += this.speedY
          this.x += this.speedX
        }
      }