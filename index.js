/**
 * Created by Asus on 2017/6/10.
 */
var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0xFFF8DC});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('2048',{
    fontSize:100,
    fill:0xC7A97C
});
basicText.anchor.set(0.5);
basicText.x = app.renderer.width/2;
basicText.y = app.renderer.height / 4;

app.stage.addChild(basicText);

var grid = [];
for(var i = 0;i<4;i++)
{
    grid[i]=[0,0,0,0];
}

//#B38A4D


var graphics = new PIXI.Graphics();
graphics.beginFill(0xC7A97C, 1);
graphics.drawRect(app.renderer.width/10-5, app.renderer.height/8*3-5,305, 305);
app.stage.addChild(graphics);



for(var i = 0;i<4;i++)
{
   for(var j = 0;j<4;j++)
   {
       var graphics = new PIXI.Graphics();
       graphics.beginFill(0xFFEBCD, 1);
       graphics.drawRect(app.renderer.width/10+j*75, app.renderer.height/8*3+i*75 ,70, 70);
       app.stage.addChild(graphics);
   }
}
var x = generateRandomNumber();
var y = generateRandomNumber();

var graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFAF0, 1);
graphics.drawRect(app.renderer.width/10+x*75, app.renderer.height/8*3+y*75 ,70, 70);
app.stage.addChild(graphics);

var number = new PIXI.Text('2',{
    fontSize:50,
    fill:0xC7A97C
});
number.anchor.set(0.5);
number.x = app.renderer.width/10+35+x*75;
number.y =  app.renderer.height/8*3+35+y*75;
app.stage.addChild(number);

function generateRandomNumber() {

    return Math.floor(Math.random()*4);
}
