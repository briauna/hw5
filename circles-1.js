var sizes = [40, 70, 90, 30, 60,10,5,8];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
		ellipse(25+i* 81, height/2, sizes[i], sizes[i]);
  }
}
