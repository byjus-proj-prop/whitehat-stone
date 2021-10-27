class Stand {
    constructor(bodyA,pointB) {
        var options = {
            "bodyA":bodyA,
            "pointB":pointB,
            "stiffness": 0.004,
            "length": 1
        }
        this.pointB = pointB
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }
    display() {
        if(this.chain.bodyA){
        strokeWeight(3);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,
            this.pointB.y)
        }
    }
    fly() {
        this.chain.bodyA = null;
    }
    connect(bodyA) {
        this.chain.bodyA = bodyA;
    }
}