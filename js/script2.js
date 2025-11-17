// ---------- GENERACIÓN DE CÓDIGO QR ----------
document.addEventListener("DOMContentLoaded", () => {
  const qrContainer = document.getElementById("qrcode");
  if (qrContainer) {
    new QRCode(qrContainer, {
      text: "https://ssvqp.cl/", // contenido del QR
      width: 128,
      height: 128,
      colorDark: "#00ff99",
      colorLight: "#111111",
      correctLevel: QRCode.CorrectLevel.H,
    });
  } else {
    console.error("No se encontró el contenedor del QR 😢");
  }
});

// ---------- ANIMACIÓN DE FONDO (PARTÍCULAS VERDES) ----------
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Crear partículas
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

// Dibujar partículas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff99";
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}
draw();
