import GameObject from "./GameObject" 
import ball from "./Ball"
import input from "./Input"
import player from "./player"
import enemy from "./enemy"
import Projectile from "./Projectile"

export default class Game { // skapar klassen
  constructor(width, height) { // klassens constructor
    this.width = width
    this.height = height
    console.log("Ny instans av game ", this.width)
    this.box = new GameObject(40, 40, 20, 20, "purple")
    this.ball = new ball(80, 50, 10 ,10 , "red")
    this.player = new player(0, 0, 50, 50, "green", this)
    this.enemies = []
    this.projectiles = []
    this.input = new input(this)

    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime)
      if (this.checkCollision(enemy, this.player)) {
        this.player.takeDamage(10)
        enemy.markedForDeletion = true
      }
    })

  this.projectiles.forEach((projectile) => {
    this.enemies.forEach((enemy) => {
      if (this.checkCollision(projectile, enemy)) {
        this.score += 10
        projectile.markedForDeletion = true
        enemy.markedForDeletion = true
      }
    })
  })
  this.projectiles = this.projectiles.filter((p) => !p.markedForDeletion)
  this.enemies = this.enemies.filter((e) => !e.markedForDeletion)
}

draw(ctx) {
  this.player.draw(ctx)
  this.projectiles.forEach((projectile) => {
    projectile.draw(ctx)
  })
  this.enemies.forEach((enemy) => {
    enemy.draw(ctx)
  })
  this.ui.draw(ctx)
}
  checkCollision(a, b) {
    return a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
  }

}