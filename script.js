let icons = [];
let infoText = "";
let causes = [];
let solutions = [];

function preload() {
  causes.push({ img: loadImage("assets/icon_kendaraan.png"), text: "Asap kendaraan menyebabkan polusi CO dan NO2." });
  causes.push({ img: loadImage("assets/icon_pabrik.png"), text: "Asap pabrik meningkatkan partikel PM2.5." });
  causes.push({ img: loadImage("assets/icon_sampah.png"), text: "Pembakaran sampah menghasilkan CO2 berlebih." });

  solutions.push({ img: loadImage("assets/icon_pohon.png"), text: "Menanam pohon menyerap CO2." });
  solutions.push({ img: loadImage("assets/icon_sepeda.png"), text: "Naik sepeda mengurangi emisi kendaraan." });
}

function setup() {
  let canvas = createCanvas(500, 300);
  canvas.parent("canvas-holder");
  textAlign(CENTER);
  imageMode(CENTER);
  textSize(14);
}

function draw() {
  background(230, 245, 255);
  fill(30);
  text("Klik ikon untuk mengetahui lebih lanjut", width / 2, 30);

  let spacing = width / (causes.length + 1);
  for (let i = 0; i < causes.length; i++) {
    image(causes[i].img, spacing * (i + 1), 100, 60, 60);
  }

  let solSpacing = width / (solutions.length + 1);
  for (let i = 0; i < solutions.length; i++) {
    image(solutions[i].img, solSpacing * (i + 1), 220, 60, 60);
  }

  fill(0);
  text(infoText, width / 2, height - 10);
}

function mousePressed() {
  infoText = "";

  for (let i = 0; i < causes.length; i++) {
    if (dist(mouseX, mouseY, (width / (causes.length + 1)) * (i + 1), 100) < 40) {
      infoText = causes[i].text;
    }
  }

  for (let i = 0; i < solutions.length; i++) {
    if (dist(mouseX, mouseY, (width / (solutions.length + 1)) * (i + 1), 220) < 40) {
      infoText = solutions[i].text;
    }
  }
}
