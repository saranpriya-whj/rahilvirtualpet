class Food{
   constructor(){
       
       this.image = loadImage("Milk.png");
   }

   getfoodstock(){
    dataref = database.ref("food");

    dataref.on("value",function(data){
    foodstock = data.val()
    });

    //return this.foodstock;

   }

   getFeedTime(lastFed){
     this.lastFed=lastFed;
   }

   feedDog(){
    if(this.foodstock!==0){
      this.foodstock--;
      database.ref("/").update({
        food:this.foodstock
      })
  
      dog.addImage(doghappy);
      textSize(20);
      fill("black");
      stroke(70);
      text("hmm Yummy!",50,200);
    }
  
    else{
      textSize(20);
      fill("black");
      stroke(70);
      text("I am Hungry",50,200);
    }

    
  }

  addfoodstock(){
    this.foodstock++;
    database.ref("/").update({
      food:this.foodstock
    })
  }

  
 

    //getfoodstock(){
     // 
    //}

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodstock!=0){
        for(var i=0;i<this.foodstock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}