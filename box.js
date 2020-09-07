class Box {
  constructor(x, y, width, height){
    this.body = Bodies.rectangle(x,y,width,height,{isStatic: false})
    this.width=width;
    this.height=height;
    this.visibility=255;
        
    World.add(world,this.body)
  }
  display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    if(this.body.speed>2){
      World.add(world,this.body)
      push();
      this.visibility=this.visibility-5
      tint(255,this.visibility)
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      pop();
    }
  }
  score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }
  }

};
