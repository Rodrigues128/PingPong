const canvasEl = document.querySelector("canvas"), canvasCtx = canvasEl.getContext("2d"), gapX = 10;

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
    y: 100,
    w: line.w,
    h: 200,
    draw: function () {
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
    },
};

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 100,
    w: line.w,
    h: 200,
    draw: function () {
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
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
    draw: function () {
        canvasCtx.fillStyle = "#fff";
        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        canvasCtx.fill();
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

setup();
draw();