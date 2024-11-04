export default class GameObject {
    constructor(height,width,x,y,color) {
        this.height
        this.width
        this.x
        this.y
        this.color = color
        this.speed = 0,1
    }

    update(deltaTime) {
       this.x += this.speed
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }

}