var shades = [160,70,90,10,20,45,25,60,];

function setup() {
  createCanvas(640, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
	for (var i = 0; i< 8; i++) {
		fill(shades[i], 100, 100);
  rect([i]*400/shades.length, 0, width/shades.length, height);
	}
	}
