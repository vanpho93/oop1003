/*

Tao class Point. Co 2 thuoc tinh la x, va y duoc truyen vao khi khoi tao.
viet phuong thuc getDistance
tra ve khoang cach giua diem do va (0, 0);

*/
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
    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    getPerimeter() {
        const line1 = new Line(this.pointA, this.pointB);
        const line2 = new Line(this.pointA, this.pointC);
        const line3 = new Line(this.pointB, this.pointC);

        const length1 = line1.getLength();
        const length2 = line2.getLength();
        const length3 = line3.getLength();
        const max = Math.max(length1, length2, length3);
        const total = length1 + length2 + length3;
        if (total / 2 === max) throw new Error('Ba diem thang hang.');
        return total;
    }
}

const p0 = new Point(1, 2);
const p1 = new Point(2, 2);
const p2 = new Point(3, 3);
// const l1 = new Line(p0, p1);
// console.log(l1.getLength());
const tr1 = new Triangle(p0, p1, p2);

console.log(tr1.getPerimeter());
