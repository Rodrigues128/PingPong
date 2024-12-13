const canvasEl = document.querySelector("canvas"), canvasCtx = canvasEl.getContext("2d");
const linewidth = 15;

const setup = () => {
    canvasEl.width = canvasCtx.width = window.innerWidth;
    canvasEl.height = canvasCtx.height = window.innerHeight;
};

const draw = () => {
    // desenho do campo
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0, 0, innerWidth, innerHeight);


    // desenho da linha central
    canvasCtx.fillStyle = "#fff";
    canvasCtx.fillRect(innerWidth / 2 - linewidth / 2, 0, linewidth, innerHeight);

    // desenho das raquetes
    canvasCtx.fillRect(10, 400, linewidth, 200); //esquerda
    canvasCtx.fillRect(innerWidth - linewidth - 10, 400, linewidth, 200); // direita 

    // desenho da bolinha
    canvasCtx.beginPath();
    canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();

    // desenho do placar
    canvasCtx.font = "bold 72px Arial";
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline = "top";
    canvasCtx.fillStyle = "#01341D"
    canvasCtx.fillText("3", innerWidth / 4, 50);
    canvasCtx.fillText("3", innerWidth / 2 + innerWidth / 4, 50);
};

setup();
draw();