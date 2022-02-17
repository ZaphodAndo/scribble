let ctx: CanvasRenderingContext2D | null = null;
let lineWidth = 5;
let lastUsedColour = "#000000";

const canvasInit = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  if (canvas) {
    ctx = canvas.getContext("2d");
  }

  const canvasOffsetX = canvas.offsetLeft;
  const canvasOffsetY = canvas.offsetTop;

  canvas.width = window.innerWidth - canvasOffsetX;
  canvas.height = window.innerHeight - canvasOffsetY;

  let isPainting = false;
  let startX;
  let startY;

  const draw = (e: MouseEvent) => {
    if (!isPainting) {
      return;
    }

    if (ctx) {
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";

      ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
      ctx.stroke();
    }
  };

  canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    isPainting = false;

    if (ctx) {
      ctx.stroke();
      ctx.beginPath();
    }
  });

  canvas.addEventListener("mousemove", draw);
};

const updateCanvasColour = (colour: string) => {
  if (ctx) {
    lastUsedColour = colour;
    ctx.strokeStyle = colour;
  }
};

const updateCanvasLineWidth = (newLineWidth: number) => {
  lineWidth = newLineWidth;
};

const enablePencil = () => {
  if (ctx) {
    ctx.strokeStyle = lastUsedColour;
  }
};

const enableRubber = () => {
  if (ctx) {
    ctx.strokeStyle = "#171717";
  }
};

export {
  canvasInit,
  updateCanvasColour,
  updateCanvasLineWidth,
  enablePencil,
  enableRubber,
};
