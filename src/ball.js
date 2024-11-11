import GameObject from "./GameObject";

export default class ball extends GameObject {
    constructor(x, y, width, height, color){
        super(x, y, width, height, color)

    }
    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI)
        ctx.fill()
    }

}