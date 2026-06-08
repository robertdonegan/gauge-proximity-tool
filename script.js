window.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generatePoints();
  }
  window.addEventListener("resize", resize);

  const STYLE = {
    point: "#444",
    activePoint: "#1da1ff",
    line: "#1da1ff",
    cursor: "#ffffff"
  };

  let spacing = 70;
  let radius = 200;
  let layout = "grid";

  let points = [];
  let mouse = { x: 0, y: 0 };

  function generatePoints() {
    points = [];

    if (layout === "grid") {
      for (let x = spacing; x < canvas.width; x += spacing) {
        for (let y = spacing; y < canvas.height; y += spacing) {
          points.push({ x, y });
        }
      }
    }

    if (layout === "hex") {
      const h = spacing * Math.sqrt(3) / 2;

      for (let y = spacing; y < canvas.height; y += h) {
        for (let x = spacing; x < canvas.width; x += spacing) {
          const offset = Math.floor(y / h) % 2 ? spacing / 2 : 0;
          points.push({ x: x + offset, y });
        }
      }
    }
  }

  // ---- Controls ----
  const spacingInput = document.getElementById("spacing");
  const spacingVal = document.getElementById("spacingVal");

  const radiusInput = document.getElementById("radius");
  const radiusVal = document.getElementById("radiusVal");

  const layoutBtn = document.getElementById("layoutToggle");

  spacingVal.textContent = spacing;
  radiusVal.textContent = radius;

