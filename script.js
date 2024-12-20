const canvasEl = document.querySelector("canvas"), canvasCtx = canvasEl.getContext("2d"), gapX = 10;

const mouse = {
    x: 0,
    y: 0,
};

const field = {
    w: innerWidth,
    h: innerHeight,
    draw: function () {
        canvasCtx.fillStyle = "#286047";
        canvasCtx.fillRect(0, 0, this.w, this.h);
    },
};

const line = {
    w: 15,
    h: field.h,
    draw: function () {
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, field.h);
    },
};

const leftPaddle = {
    x: gapX,
    y: 0,
    w: line.w,
    h: 200,
    _move: function () {
        this.y = mouse.y - this.h / 2;
    },
    draw: function () {
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
        this._move();
    },
};

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 100,
    w: line.w,
    h: 200,    
    _move: function () {
        this.y = ball.y;
    },
    draw: function () {
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
        this._move;
    },
};

const score = {
    human: 1,
    computer: 2,
    draw: function () {
        canvasCtx.font = "bold 72px Arial";
        canvasCtx.textAlign = "center";
        canvasCtx.textBaseline = "top";
        canvasCtx.fillStyle = "#01341D"
        canvasCtx.fillText(this.human, field.w / 4, 50);
        canvasCtx.fillText(this.computer, field.w / 2 + field.w / 4, 50);
    }
};

const ball = {
    x: 300,
    y: 200,
    r: 20,
    sepeed: 5,
    _move: function () {
        this.x += 1 * this.sepeed;
        this.y += 1 * this.sepeed;
    },
    draw: function () {
        canvasCtx.fillStyle = "#fff";
        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        canvasCtx.fill();

        this._move()
    },
};

const setup = () => {
    canvasEl.width = canvasCtx.width = field.w;
    canvasEl.height = canvasCtx.height = field.h;
};

const draw = () => {
    field.draw();
    line.draw();
    leftPaddle.draw();
    rightPaddle.draw();
    score.draw();
    ball.draw();
};

window.animateFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60)
        }
    );
})();

const main = () => {
    animateFrame(main);
    draw();
};

setup();
main();

canvasEl.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
})