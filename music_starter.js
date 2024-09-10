
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(28, 36, 28, 255)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let song_volume = vocal + drum + bass + other / 4;
   let bar_length = 480
   let eye_images = [];

   let firstrun = true
   
   if (firstrun) {
    eye_images.push
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
   if (song_volume > 200){
   for(var i = 1; i <= song_volume; i++){
    fill(47, 61, 47, 255);
    stroke(0);
    ellipse(random(1920),random(1080),10,10);
   }
   }
 
   // display "words" 
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}

