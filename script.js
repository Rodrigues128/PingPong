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
    canvasCtx.fillStyle = "#fff";
    canvasCtx.fillRect(innerWidth / 2 - linewidth / 2, 0, linewidth, innerHeight);

    // Desenho das raquetes
    canvasCtx.fillRect(10, 400, linewidth, 200); //esquerda
    canvasCtx.fillRect(innerWidth - linewidth - 10, 400, linewidth, 200); // direita 

    // desenho da bolinha
    canvasCtx.beginPath();
    canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();

    // desenho do placar
};

setup();
draw();