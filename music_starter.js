let firstRun = true;
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(28, 36, 28, 255)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  imageMode(CENTER);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let song_volume = vocal + drum + bass + other / 4;
   let bar_length = 480
   let eye_images = [];
   let city_images = [];
   let lightning_images = [];
   let overlay_images = [];
   
   if (firstRun) {
    eye_images.push(loadImage("EyeLogo_1.png"));
    eye_images.push(loadImage("EyeLogo_2.png"));
    eye_images.push(loadImage("EyeLogo_3.png"));

    city_images.push(loadImage("CityScape_1.png"));
    city_images.push(loadImage("CityScape_2.png"));
    city_images.push(loadImage("CityScape_3.png"));

    lightning_images.push(loadImage("Lightning_1.png"));
    lightning_images.push(loadImage("Lightning_2.png"));
    lightning_images.push(loadImage("Lightning_3.png"));

    overlay_images.push(loadImage("BorderFrame.png"));
    overlay_images.push(loadImage("Arrows.png"));

    firstRun = false;
   }


   // vocal 
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

   push();
   for(var i = 1; i <= vocal; i++){
    map(vocal, 0, 100, 0, 255);
    stroke(vocal);
    let bar_steps = i;
    line(480, bar_steps, bar_length*2, bar_steps);
   }
   pop();
 
   // drum
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
   
   push();
   for(var i = 1; i <= drum; i++){
    map(drum, 0, 100, 0, 255);
    stroke(drum);
    let bar_steps = i;
    line(0, bar_steps, bar_length, bar_steps);
   }
   pop();

   
 
   // bass 
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

   push();
   for(var i = 1; i <= bass; i++){
    map(bass, 0, 100, 0, 255);
    stroke(bass);
    let bar_steps = i;
    line(bar_length*3, bar_steps, bar_length*4, bar_steps);
   }
   pop();
 
   // other
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);

   push();
   for(var i = 1; i <= other; i++){
    map(other, 0, 100, 0, 255);
    stroke(other);
    let bar_steps = i;
    line(bar_length*2, bar_steps, bar_length*3, bar_steps);
   }
   pop();
  
   push();
   if (song_volume > 190){
   for(var i = 1; i <= song_volume; i++){
    fill(47, 61, 47, 255);
    stroke(47, 61, 47, 255);
    ellipse(random(1920),random(1080),10,10);
   }
   }

   if(counter > 0) {
   image(eye_images[0], 0, 0);
   }
   

   // display "words" 
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);


}

