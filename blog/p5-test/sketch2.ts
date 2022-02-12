import p5 from "p5";

function initializeCanvas(p5: p5, canvasElement: HTMLElement, width: number, height: number): void {
  const renderer = p5.createCanvas(width, height).parent(canvasElement);
  const htmlElement = (renderer.elt as HTMLElement);
  htmlElement.style.width = null;
  htmlElement.style.height = null;
}

function setup(p5: p5, canvasElement: HTMLElement): void {
  initializeCanvas(p5, canvasElement, 500, 500);
  p5.noLoop();

  p5.background(0);

  p5.noStroke();
  p5.fill(0, 255, 0);
  p5.circle(250, 250, 100);
}

export {
  setup
}