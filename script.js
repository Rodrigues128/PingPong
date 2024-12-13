const canvasEl = document.querySelector("canvas"), canvasCtx = canvasEl.getContext("2d");
const linewidth = 15;

const setup = () => {
    canvasEl.width = canvasCtx.width = window.innerWidth;
    canvasEl.height = canvasCtx.height = window.innerHeight;
};

const draw = () => {
    // Desenho do campo
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0, 0, innerWidth, innerHeight);

    
    // Desenho da linha central
    const x = innerWidth / 2 - linewidth / 2;
    const y = 0;
    const w = linewidth;
    const h = innerHeight
    
    canvasCtx.fillStyle = "#fff";
    canvasCtx.fillRect(x, y, w, h);

    // Desenho das raquetes
};

setup();
draw();