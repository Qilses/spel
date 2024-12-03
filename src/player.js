import GameObject from "./GameObject";
import Projectile from "./Projectile";

export default class player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game
    this.grounded = false

    this.image = new Image()
    this.image.src = "src/assets/franks_doge.png"

    this.frameWidth = 100
    this.frameHeight = 80
    this.frameX =  0
    this.frameY = 0
    this.maxFrame = 2
    this.timer = 0
    this.fps = 10
    this.interval = 1000/this.fps

    this.speedX = 0
    this.speedY = 1
    this.maxSpeedX = 1
    this.maxSpeedY = 5
    this.color = "255, 0, 0"
  }
  update(deltaTime) {
    if (this.game.input.keys.has("ArrowLeft","a")) {
      this.speedX -= this.maxSpeedX
    }
    if (this.game.input.keys.has("ArrowRight","d")) {
      this.speedX += this.maxSpeedX
    }
    if (!this.game.input.keys.has("ArrowRight","d") && !this.game.input.keys.has("ArrowLeft","a")) {
      this.speedX = 0
    }

    if (this.game.input.keys.has("ArrowUp","w")) {
      this.speedY -= this.maxSpeedY
      this.y -= 5
    }
    if (!this.game.input.keys.has("ArrowUp","w")) {
      this.speedY = 0
    }
    if (this.y > 400) {
      this.speedY = 0
    }else {
      this.speedY += 5
    }

    this.y += this.speedY
    this.x += this.speedX

    if (this.speedX != 0) {
      this.frameY = 3
      this.maxFrames = 9
    } else {
      this.frameY = 0
      this.maxFrames = 7
    }

    if (this.y > 320) {
      this.y = 320
      this.speedY = 0
      this.grounded = true
    }
    if (this.timer > this.interval) {
      this.frameX++
      this.timer = 0
    } else {
      this.timer += deltaTime
    }
    if (this.frameX >= this.maxFrames) {
      this.frameX = 0
      this.frameY = 100
    }
    if (this.frameY >= this.maxFrame) { 
    }
   
  }


  draw(ctx) {
    // ctx.drawImage(this.image, this.x, this.y, this.width,this.height)
    ctx.drawImage(
      this.image,
      this.frameWidth * this.frameX,
      this.frameHeight * this.frameY,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    )
  }
}