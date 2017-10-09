var sizes = [40, 70, 90, 30, 60,10,5,8];

function setup() {
  createCanvas(600, 600);
	colorMode(HSB);
	var h=random(320);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(h,100,100);
		ellipse(25+i* 81, height/2, sizes[i], sizes[i]);
  }
}
