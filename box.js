class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'density' : 0.2
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image = loadImage("dustbingreen.png");

      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      
      push ();
    
      
      rectMode(CENTER);
      
      fill(255);
      imageMode(CENTER)
      image(this.image, pos.x, pos.y, this.width, this.height);
      //rect(pos.x, pos.y, this.width, this.height);
      pop();

      

    }
  };