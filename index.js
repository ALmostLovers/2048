/**
 * Created by Asus on 2017/6/10.
 */
var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0xFFF8DC});
document.body.appendChild(app.view);

//标题
var basicText = new PIXI.Text('2048',{
    fontSize:100,
    fill:0xC7A97C
});
basicText.anchor.set(0.5);
basicText.x = app.renderer.width/2;
basicText.y = app.renderer.height / 4;
app.stage.addChild(basicText);


//初始化框
var grid = [];
for(var i = 0;i<4;i++)
{
    grid[i]=[0,0,0,0];
}


//背景框
var graphics = new PIXI.Graphics();
graphics.beginFill(0xC7A97C, 1);
graphics.drawRect(app.renderer.width/10-5, app.renderer.height/8*3-5,305, 305);
app.stage.addChild(graphics);

//生成随机数,赋值给数组prid
var columx = generateRandomNumber();
var columy = generateRandomNumber();
grid[columx][columy]=2;


//绘框
for(var i = 0;i<4;i++)
{
   for(var j = 0;j<4;j++)
   {
       drawcell(i,j,grid[i][j],0xFFFAF0);
   }
}





 document.addEventListener("keydown",function (event) {
    console.log("yes");
})



function drawcell(columx,columy,num) {

    if(num!=0)
    {
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFFAF0, 1);
        graphics.drawRect(app.renderer.width / 10 + columy * 75, app.renderer.height / 8 * 3 + columx * 75, 70, 70);
        app.stage.addChild(graphics);

        var number = new PIXI.Text(num, {
            fontSize: 50,
            fill: 0xC7A97C
        });
        number.anchor.set(0.5);
        number.x = app.renderer.width / 10 + 35 + columy * 75;
        number.y = app.renderer.height / 8 * 3 + 35 + columx * 75;
        app.stage.addChild(number);
    }
    else
    {
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFEBCD, 1);
        graphics.drawRect(app.renderer.width / 10 + columy * 75, app.renderer.height / 8 * 3 + columx * 75, 70, 70);
        app.stage.addChild(graphics);
    }

}

function generateRandomNumber() {

    return Math.floor(Math.random()*4);
}
