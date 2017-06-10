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
newcell();

newcell();

//绘框

flushUI();

document.addEventListener('keydown', function (event) {
   //右
    if (event.keyCode === 39) {
        moveCellToRight();
        newcell();
        flushUI();
    }
    if (event.keyCode ===38) {
        rotateArray(1);
        moveCellToRight();
        rotateArray(3);
        newcell();
        flushUI();
    }

    if (event.keyCode === 37) {
        rotateArray(2);
        moveCellToRight();
        rotateArray(2);
        newcell();
        flushUI();
    }

    if (event.keyCode === 40) {
        rotateArray(3);
        moveCellToRight();
        rotateArray(1);
        newcell();
        flushUI();
    }
});

function flushUI() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            drawcell(i, j);
        }
    }
}
function generateRandomNumber() {
    return Math.floor(Math.random()*4);
}
function newcell() {
    var columx = generateRandomNumber();
    var columy = generateRandomNumber();
    while(grid[columx][columy]!==0)
    {
        columx = generateRandomNumber();
        columy = generateRandomNumber();
    }
        grid[columx][columy] = 2;
}


function moveCellToRight() {
    for (var rowIndex = 0; rowIndex < 4; rowIndex++) {
        for (var columnIndex = 2; columnIndex >= 0; columnIndex--) {
            if (grid[rowIndex][columnIndex] === 0) continue;

            var theEmptyCellIndex = findTheFirstRightCell(rowIndex, columnIndex);
            if (theEmptyCellIndex !== -1) {
                grid[rowIndex][theEmptyCellIndex] = grid[rowIndex][columnIndex];
                grid[rowIndex][columnIndex] = 0;

            }
            var currentIndex = theEmptyCellIndex === -1 ? columnIndex : theEmptyCellIndex;

            if (grid[rowIndex][currentIndex] === grid[rowIndex][currentIndex + 1]) {
                grid[rowIndex][currentIndex+ 1] += grid[rowIndex][currentIndex];
                grid[rowIndex][currentIndex] = 0;
            }

        }
    }
}
function findTheFirstRightCell(rowIndex, columnIndex) {
    for (var i = 3; i > columnIndex; i--) {
        if (grid[rowIndex][i] === 0) {
            return i;
        }
    }

    return -1;
}
function rotateArray(rotateCount) {
    for (var i = 0 ; i < rotateCount; i ++) {
        grid = rotateArrayToRightOnce(grid);
    }

    function rotateArrayToRightOnce(array) {
        return array.map((row, rowIndex) => {
                return row.map((item, columnIndex) => {
                    return array[3 - columnIndex][rowIndex];
    })
    })
    }
}
function drawcell(columx,columy) {
    var num=grid[columx][columy];
    var color=GetColor(num);

    var graphics = new PIXI.Graphics();
    graphics.beginFill(color, 1);
    graphics.drawRect(app.renderer.width / 10 + columy * 75, app.renderer.height / 8 * 3 + columx * 75, 70, 70);
    app.stage.addChild(graphics);

    if(num!=0)
    {
        var number = new PIXI.Text(num, {
            fontSize: 50,
            fill: 0xC7A97C
        });
        number.anchor.set(0.5);
        number.x = app.renderer.width / 10 + 35 + columy * 75;
        number.y = app.renderer.height / 8 * 3 + 35 + columx * 75;
        app.stage.addChild(number);
    }


}
function GetColor(num) {
    var colorValue = {
        0: 0xFFEBCD,
        2: 0xFFFAF0,
        4: 0xFDF5E6,
        8: 0xFFE4B5,
        16:0xFFDAB9,
        32:0xF4A460,
        64:0xFFA500,
        128:0xFF8C00,
        256:0xDAA520,
        512:0xD2691E,
        1024:0xFF7F50,
        2048:0xFFA07A,
        4096:0xFF6347
    };

    return colorValue[num];

}
