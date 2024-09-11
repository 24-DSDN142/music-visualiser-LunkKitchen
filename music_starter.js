let firstRun = true;
let currentImage = 0;
let lightningRandom = 0;
let cityScale = [0, 0];
let cityPosition = [-200. -200];
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let eye_images = [];
let city_images = [];
let lightning_images = [];
let overlay_images = [];

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  imageMode(CENTER);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let song_volume = vocal + drum + bass + other / 4;
   let bar_length = 480
   
   if (firstRun) {
    eye_images.push(loadImage("EyeLogo_1.png"));
    eye_images.push(loadImage("EyeLogo_1.png"));
    eye_images.push(loadImage("EyeLogo_2.png"));
    eye_images.push(loadImage("EyeLogo_3.png"));
    
    city_images.push(loadImage("CityScape_1.png"));
    city_images.push(loadImage("CityScape_2.png"));
    city_images.push(loadImage("CityScape_3.png"));

    lightning_images.push(loadImage("Lightning_2.png"));
    lightning_images.push(loadImage("Lightning_1.png"));
    lightning_images.push(loadImage("Lightning_3.png"));

    overlay_images.push(loadImage("BorderFrame.png"));
    overlay_images.push(loadImage("Arrows.png"));
    overlay_images.push(loadImage("BackgroundOverlay1.png"));
    overlay_images.push(loadImage("BackgroundOverlay2.png"));

    firstRun = false;
   }

   push();

  if (vocal >= 70) {
   push();
   background(83, 105, 71, 255)
   image(overlay_images[3], 960, 540)
   pop();
  } else {
   push();
   background(28, 36, 28, 255)
   image(overlay_images[2], 960, 540)
   pop();
  }
  


   // Dots in background
   push();
   if (song_volume > 190){
   for(let i = 1; i <= song_volume; i++){
    fill(47, 61, 47, 255);
    stroke(47, 61, 47, 255);
    ellipse(random(1920),random(1080),10,10);
   }
   }
   pop();
   //Moving city
   push();
   cityScale[0] = cityScale[0] + 0.002
   for(var i = 1; i < counter; i++) {
   translate(960, 1080);
   scale(cityScale[0]);
   image(city_images[0], 0, cityPosition[0]);
   cityPosition[0] = cityPosition[0]--;
   if (cityScale[0] >= 1.8) {
    cityScale[0] = 0;
    cityPosition[0] = -200;
   }
   }
   pop();
   
   if (cityScale[0] >= 0.2){
    push();
    cityScale[1] = cityScale[1] + 0.002
    for(var i = 1; i < counter; i++) {
    translate(960, 1080);
    scale(cityScale[1]);
    image(city_images[1], 0, cityPosition[1]);
    cityPosition[1] = cityPosition[1]--;
    if (cityScale[1] >= 1.8) {
     cityScale[1] = 0;
     cityPosition[1] = -200;
    }
    }
    pop();
  }

  if (cityScale[0] >= 0.4){
    push();
    cityScale[2] = cityScale[2] + 0.002
    for(var i = 1; i < counter; i++) {
    translate(960, 1080);
    scale(cityScale[2]);
    image(city_images[2], 0, cityPosition[2]);
    cityPosition[2] = cityPosition[2]--;
    if (cityScale[2] >= 1.8) {
     cityScale[2] = 0;
     cityPosition[2] = -200;
    }
    }
    pop();
  }

   // Moving bars at top of screen
   push();
   for(let i = 1; i <= vocal; i++){
    map(vocal, 0, 100, 0, 255);
    stroke(vocal);
    let bar_steps = i;
    line(480, bar_steps, bar_length*2, bar_steps);
   }
   pop();
 
   push();
   for(let i = 1; i <= drum; i++){
    map(drum, 0, 100, 0, 255);
    stroke(drum);
    let bar_steps = i;
    line(0, bar_steps, bar_length, bar_steps);
   }
   pop();

   push();
   for(let i = 1; i <= bass; i++){
    map(bass, 0, 100, 0, 255);
    stroke(bass);
    let bar_steps = i;
    line(bar_length*3, bar_steps, bar_length*4, bar_steps);
   }
   pop();
 
   push();
   for(let i = 1; i <= other; i++){
    map(other, 0, 100, 0, 255);
    stroke(other);
    let bar_steps = i;
    line(bar_length*2, bar_steps, bar_length*3, bar_steps);
   }
   pop();

   // Lightning drum effect
   if (counter % 100 == 0) {
    lightningRandom++;
   }

   if (lightningRandom >= lightning_images.length) {
    lightningRandom = 0;
   }
  
   push();
   if (drum > 90) {
    image(lightning_images[lightningRandom], 960, 540);
   }
   pop();

   // Arrows and frame overlay
   push();
   if (other > 75) {
    image(overlay_images[1], 960, 540);
   }
   pop();

   push();
   if (other <= 60) {
    image(overlay_images[0], 960, 540);
   }
   pop();

   // Eye image sequence
   let drumMap = int(map(drum, 0, 100, 0, 4));
   let bassScale = (map(bass,0, 100, 0.5, 1.2));
   
   push();
   scale(bassScale);
   image(eye_images[drumMap], 960/bassScale, 540/bassScale);
   pop();

}

