import GameObject from "./GameObject";
import Projectile from "./Projectile";

export default class player extends GameObject {
  constructor(game, x, y, width, height) {
    super(x, y, width, height)
    
    this.game = game
    this.speedX = 0
    this.maxSpeedX = 0.4
    this.health = 100

    this.image = new Image()
    this.image.src = "./src/assets/franks_doge.png"

    this.attackDelay = 0
    this.attackInterval = 100
    
  }

  update(deltaTime) {
    if (this.game.input.keys.has("a")) {
      this.speedX -= this.maxSpeedX
    }
    if (this.game.input.keys.has("d")) {
      this.speedX += this.maxSpeedX
    }
    if (
      this.game.input.keys.has("d") &&
      this.game.input.keys.has("a")
    ) {
      this.speedX = 0
    }

    if (this.game.input.keys.has("space")) {
      this.attack()
    }

    this.x += this.speedX
    if (this.x < 0) {
      this.x = 0
      this.speedX = 0
    }
    if (this.x + this.width > this.game.width) {
      this.x = this.game.width - this.width
      this.speedX = 0
    }

    if (this.attackDelay > 0) {
      this.attackDelay -= deltaTime
    }
  }

  attack() {
    if (this.attackDelay > 0) return
  
    this.attackDelay = this.attackInterval

    this.game.projectiles.push(
      new Projectile(
        this.game,
        this.x + this.width / 2 - 2,
        this.y,
        4,
        4
      )
    )
  }

  takeDamage(damage) {
    this.health -= damage
    this.game.ui.triggerFlash()
    if (this.health <= 0) {
      this.game.gameOver = true
    }
  }
}