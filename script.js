const canvasEl = document.querySelector("canvas"), canvasCtx = canvasEl.getContext("2d");

const setup = () => {
    canvasEl.width = canvasCtx.width = window.innerWidth;
    canvasEl.height = canvasCtx.height = window.innerHeight;
};

const draw = () => {
};

setup();
draw();