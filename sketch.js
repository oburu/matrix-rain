let symbol;

function setup(){
  createCanvas(
    // 100% the viewport
    window.innerWidth,
    window.innerHeight
  );
  //background black
  background(0);
  symbol = new Symbol(
    width/2,
    height/2
  );
  symbol.setToRandomSymbol();
}
function draw(){
  symbol.render();
}

function Symbol(x,y){
  this.x = x;
  this.y = y;
  this.value;

  this.setToRandomSymbol = () => {
    this.value = String.fromCharCode(
      0x30A0 + round(random(0, 96))
    );
  }
  this.render = () => {
    fill(0,250,70);
    text(this.value, this.x, this.y);
  }
}

let Stream = () =>{

}
