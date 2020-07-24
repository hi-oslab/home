    var logos1;
    var logos2;
    var logos3;

    let s = 0.7;
    let x1, y1;
    let x2, y2;
    let x3, y3;
    var speed1 = 1;
    var speed2 = 1;
    var speed3 = 1;

    function setup() {
      createCanvas(windowWidth, windowHeight);
      s = width / 1400;

      logos1 = new logo1(random(100, width / 3), 100, s, 5);
      logos2 = new logo2(random(width / 3, width / 3 * 2), 100, s, 5);
      logos3 = new logo3(random(width / 3 * 2, width - 100), 100, s, 5);
      background(0);

    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
      background(0);
    }

    function draw() {

      background(0);
      noStroke();
      // }
      fill(255, 150);
      let gravity = createVector(0, -2);
      logos1.applyForce(gravity);
      logos1.update();
      logos1.display();
      logos1.checkEdges();

      logos2.applyForce(gravity);
      logos2.update();
      logos2.display();
      logos2.checkEdges();

      logos3.applyForce(gravity);
      logos3.update();
      logos3.display();
      logos3.checkEdges();
    }
    class logo1 {
      constructor(x, y, s, m) {
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m * 2;
        this.s = s;
      }
      applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
      }
      update() {
        this.vel.add(this.acc);
        //velocity.limit(7);
        this.loc.sub(this.vel);
        this.acc.mult(0);
      }

      display() {
        push();
        translate(this.loc.x - 128 * this.s, this.loc.y - 128 * this.s);
        //center => fit to scale (128 * s(scale))
        scale(this.s);
        //control shape scale
        beginShape();
        // 1// /
        vertex(127.6, 259.6);
        bezierVertex(57.3, 259.6, 0.0, 202.3, 0.0, 131.9);
        bezierVertex(0.0, 61.5, 57.3, 4.3, 127.6, 4.3);
        bezierVertex(198.0, 4.3, 255.3, 61.5, 255.3, 131.9);
        bezierVertex(255.3, 202.3, 198.0, 259.6, 127.6, 259.6);
        // 1// /
        beginContour();
        vertex(127.6, 18.3);
        bezierVertex(65.0, 18.3, 14.0, 69.3, 14.0, 131.9);
        bezierVertex(14.0, 194.6, 65.0, 245.6, 127.6, 245.6);
        bezierVertex(190.3, 245.6, 241.3, 194.6, 241.3, 131.9);
        bezierVertex(241.3, 69.3, 190.3, 18.3, 127.6, 18.3);
        endContour();
        endShape();
        pop();
      }
      checkEdges() {

        if (this.loc.x > width) {
          this.loc.x = width;
          this.vel.x *= -1;
        } else if (this.loc.x < 0) {
          this.vel.x *= -1;
          this.loc.x = 30;
        }
        if (this.loc.y > height - 100) {
          this.vel.y *= -0.9;
          this.loc.y = height - 100;
        }
      }
      bounce() {
        this.vel.x *= -1;
        this.vel.y *= -1;
      }
    }

    class logo2 {
      constructor(x, y, s, m) {
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m * 2;
        this.s = s;
      }
      applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
      }
      update() {
        this.vel.add(this.acc);
        //velocity.limit(7);
        this.loc.sub(this.vel);
        this.acc.mult(0);
      }

      display() {
        push();
        translate(this.loc.x - 393.5 * this.s, this.loc.y - 128 * this.s);
        //center => fit to scale (128 * s(scale))
        scale(this.s);
        //control shape scale
        beginShape();
        // 1// /
        vertex(540.6, 254.7);
        vertex(246.5, 254.7);
        vertex(393.6, 0.0);
        vertex(540.6, 254.7);
        // 1// /
        beginContour();
        vertex(270.8, 240.7);
        vertex(516.4, 240.7);
        vertex(393.6, 28.0);
        vertex(270.8, 240.7);
        endContour();
        endShape();
        pop();
      }
      checkEdges() {

        if (this.loc.x > width) {
          this.loc.x = width;
          this.vel.x *= -1;
        } else if (this.loc.x < 0) {
          this.vel.x *= -1;
          this.loc.x = 30;
        }
        if (this.loc.y > height - 100) {
          this.vel.y *= -0.7;
          this.loc.y = height - 100;
        }
      }
      bounce() {
        this.vel.x *= -1;
        this.vel.y *= -1;
      }
    }

    class logo3 {
      constructor(x, y, s, m) {
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m * 2;
        this.s = s;
      }
      applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
      }
      update() {
        this.vel.add(this.acc);
        //velocity.limit(7);
        this.loc.sub(this.vel);
        this.acc.mult(0);
      }

      display() {
        push();
        translate(this.loc.x - 681.5 * this.s, this.loc.y - 128 * this.s);
        //center => fit to scale (128 * s(scale))
        scale(this.s);
        //control shape scale
        // 1/ 3rd Shape
        beginShape();
        // 1/// /
        vertex(791.8, 254.0);
        vertex(570.4, 254.0);
        vertex(570.4, 184.3);
        vertex(791.8, 184.3);
        vertex(791.8, 254.0);
        // 1/// /
        beginContour();
        vertex(584.4, 240.0);
        vertex(777.8, 240.0);
        vertex(777.8, 198.3);
        vertex(584.4, 198.3);
        vertex(584.4, 240.0);
        endContour();
        endShape();
        // ------------------------------------------------------------
        // 1/// 3rd Shape
        beginShape();
        // 1/// /
        vertex(791.8, 166.0);
        vertex(570.4, 166.0);
        vertex(570.4, 96.3);
        vertex(791.8, 96.3);
        vertex(791.8, 166.0);
        // 1/// /
        beginContour();
        vertex(584.4, 152.0);
        vertex(777.8, 152.0);
        vertex(777.8, 110.3);
        vertex(584.4, 110.3);
        vertex(584.4, 152.0);
        endContour();
        endShape();
        // ------------------------------------------------------------
        // 1// 3rd Shape
        beginShape();
        // 1/// /
        vertex(791.8, 78.1);
        vertex(570.4, 78.1);
        vertex(570.4, 8.3);
        vertex(791.8, 8.3);
        vertex(791.8, 78.1);
        // 1/// /
        beginContour();
        vertex(584.4, 64.1);
        vertex(777.8, 64.1);
        vertex(777.8, 22.3);
        vertex(584.4, 22.3);
        vertex(584.4, 64.1);
        endContour();
        endShape();
        pop();
      }
      checkEdges() {

        if (this.loc.x > width) {
          this.loc.x = width;
          this.vel.x *= -1;
        } else if (this.loc.x < 0) {
          this.vel.x *= -1;
          this.loc.x = 30;
        }
        if (this.loc.y > height - 100) {
          this.vel.y *= -0.8;
          this.loc.y = height - 100;
        }
      }
      bounce() {
        this.vel.x *= -1;
        this.vel.y *= -1;
      }
    }