class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    static compareLines(l1, l2) {
        // console.log(this);
        return l1.getLength() > l2.getLength();
    }

    getLength() {
        // console.log(this);
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(0, 0);
const p2 = new Point(1, 0);
const p3 = new Point(2, 0);

const l1 = new Line(p1, p2);
const l2 = new Line(p1, p3);

console.log(Line.compareLines(l1, l2));
