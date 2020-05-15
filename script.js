var Teeth = function(x,y)
{
    this.x=x;
    this.vx=0;
    this.y=y;
    this.vy=0;
};

Teeth.prototype.move = function()
{
    var object = '<img class="rotate" src ="teethtard.jpg">';
    this.Element = $(object);
    this.Element.css(
    {
        position: "absolute",
        left: this.x,
        top: this.y
    }
    );
    $("body").append(this.Element);
};

Teeth.prototype.draw = function()
{
    this.x+=this.vx;
    this.y+=this.vy;
    this.Element.css
    (
    {
        left: this.x,
        top: this.y,
    }
    );
}

Teeth.prototype.up = function()
{
    this.vy = -10;
}

Teeth.prototype.down = function()
{
    this.vy = 10;
}

Teeth.prototype.left = function()
{
    this.vx = -10;
}

Teeth.prototype.right = function()
{
    this.vx = 10;
}

var teeth = new Teeth(420, 420);
teeth.move();

function move(k)
{
    if (k.keyCode == 38)
    {
        teeth.up();
    }
    
    if (k.keyCode == 40)
    {
        teeth.down();
    }
    
    if (k.keyCode == 37)
    {
        teeth.left();
    }
    
    if (k.keyCode == 39)
    {
        teeth.right();
    }
    
}
function stopMoving(k)
{
    if (k.keyCode == 38 || k.keyCode == 40) {
        teeth.vy=0;
    }

    if (k.keyCode == 37 || k.keyCode == 39) {
        teeth.vx=0;
    }
}

function draw() 
{
    teeth.draw();
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);

document.onkeydown = move;
document.onkeyup = stopMoving;