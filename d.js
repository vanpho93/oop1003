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

const p1 = new Point(1, 1);
console.log(p1.getDistance());
