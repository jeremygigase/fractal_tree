let angle;
let sliderAngle;
let sliderLength;
let sliderAmount;
let sliderAmountSquares;


function setup() {
    createCanvas(windowWidth, windowHeight);
    sliderAngle = createSlider(0, 360, 45, 0.01)
    sliderLength = createSlider(0, 150, 100, 1)
    sliderAmount = createSlider(1, 4, 2, 1)
    sliderAmountSquares = createSlider(0, 1000, 0, 1)
    let divInputs = createDiv('');
    divInputs.id('inputs');
    sliderAngle.parent(inputs);
    sliderLength.parent(inputs);
    sliderAmount.parent(inputs);
    sliderAmountSquares.parent(inputs);
    divInputs.style('text-align', "center");
}

function draw() {
    background(51);
    angleMode(DEGREES)
    createSquares()
    angle = sliderAngle.value();
    len = sliderLength.value();
    amount = sliderAmount.value();
    amountSquares = sliderAmountSquares.value();
    stroke(255)
    strokeWeight(2);
    for (i = 0; i < amount; i++){
        tree(windowWidth/2, height/2, 90 * i)
    }
    createSquares(amountSquares)
}

function createSquares(amountSquares) {
    for (let i = 0; i < amountSquares; i++) {
      fill(random(255), random(255), random(255), random(255));
      square(random(windowWidth), random(windowHeight), random(100)); 
  }
}

function tree(x, y, degree){
    push();
    translate(x, y);
    rotate(degree);
    branch(len);
    pop();
}


function branch(len){
   
    line(0, 0, 0, -len)
    translate(0, -len);
    
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67)
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
  
}