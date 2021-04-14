class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			density: 1.2,
			friction:0,
			restitution:0.3		
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
		this.image=loadImage("paper.png");
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push();
			translate(paperPos.x, paperPos.y);
			fill(255)
			rectMode(CENTER);
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop();
	}
}