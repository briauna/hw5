var sizes = [120, 90, 70, 60, 30,25,15,5];

function setup() {
  createCanvas(900, 600);
	colorMode(HSB);
	var h=random(320);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(h,100,100);
		ellipse(60+i* 107, height/2, sizes[i], sizes[i]);
  }
}
