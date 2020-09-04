//Create variables here
var database;
var dog,dogimg,doghappy;
var dataref;
var foodstock;
var fedTime,lastFed;
var feed,add;
var food;
var foodStock;

function preload()
{
  //load images here
  dogimg = loadImage("Dog.png");
  doghappy = loadImage("happydog.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();

  food = new Food();
  food.getfoodstock();
  
  dog = createSprite(400,350,50,50);
  dog.addImage(dogimg);

  feed = createButton("Feed Dog");
   feed.position(350,50);
   

   add = createButton("add food");
   add.position(480,50);
  
  
  
}


function draw() {  
  background(46,139,87);

  feed.mousePressed(()=>{
    food.feedDog();
  });

  add.mousePressed(()=>{
    food.addfoodstock();
  });

  food.display();
  
  //textSize(30);
 // fill("red");
  //text("food: "+food,660,100);

  drawSprites();
  //add styles here
  textSize(30);
  fill("yellow");
  stroke(40);
  text("press up arrow key to feed the dog",200,650)

}

//function readStock(data){
  //foodstock=data.val();
  //food.updatefoodstock(foodstock);
//}


