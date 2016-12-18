/**
 * Created by yjf on 16-12-18.
 */
var gameBackground = document.getElementById('gameBackground');
var jsHeadTitle =document.getElementById('beginTitle');
var jsHeadBird =document.getElementById('headBird');

var Y = 3;
var index = 0;
var imgArr = ["./images/bird0.png","./images/bird1.png"];
var headWaveTimer = setInterval(headWave,200);

//动态小鸟
function headWave() {
    Y *= -1;
    jsHeadTitle.style.top =jsHeadTitle.offsetTop + Y + 'px';
    jsHeadBird.src = imgArr[index++];
    if(index == 2){
        index = 0;
    }
}

var jsGrassLand1 = document.getElementById('grassLand1');
var jsGrassLand2 = document.getElementById('grassLand2');

var blockArr = [];
var blockDistance = baseObj.randomNum(130,250);
var landTimer = setInterval(lanRun,30);

//动态草地
function lanRun() {
    if(jsGrassLand1.offsetLeft <= -343){
        jsGrassLand1.style.left = "343px";
    }
    if(jsGrassLand2.offsetLeft <= -343){
        jsGrassLand2.style.left = "343px"
    }
    jsGrassLand1.style.left = jsGrassLand1.offsetLeft - 3 + "px";
    jsGrassLand2.style.left = jsGrassLand2.offsetLeft - 3 +　"px";

    if(blockArr.length){
        for(var i = 0; i< blockArr.length; i++){
            blockArr[i].moveBlock();
            var x = baseObj.rectangleCrashExamine(blockArr[i].downDivWrap,bird.div);
            var y = baseObj.rectangleCrashExamine(blockArr[i].upDivWrap,bird.div);
            var z = bird.div.offsetTop >= 390;
            if(x || y || z){
                window.clearInterval(landTimer);
                bird.fallSpeed = 0;
                gameBackground.onclick = null;
            }
        }
        if(blockArr[blockArr.length - 1].downDivWrap.offsetLeft < (450 - blockDistance)){
            blockDistance = baseObj.randomNum(130,250);
            var newBlock = new Block();
            newBlock.createBlock();
            blockArr.push(newBlock);
        }
        if(blockArr[0].downDivWrap.offsetLeft < -50){
            gameBackground.removeChild(blockArr[0].downDivWrap);
            gameBackground.removeChild(blockArr[0].upDivWrap);
            //删除数组第一个元素并返回该元素
            blockArr.shift(blockArr[0]);
        }
        if(blockArr[0].downDivWrap.offsetLeft == -12){
            count++;
            if(count < 10){
                num1.style.backgroundImage = "url(./images/" + count + ".jpg)";
            }
            else if(count < 100){
                num2.style.display = 'block';
                num1.style.backgroundImage = "url(./images/" + parseInt(count/10)　+　".jpg)";
                num2.style.backgroundImage = "url(./images/" +count%10 +".jpg)";
            }
            else if(count < 1000){
                num3.style.display = "block";
                num1.style.backgroundImage = "url(./images/" + parseInt(count/100) + ".jpg)";
                num2.style.backgroundImage = "url(images/" + parseInt(count/10)%10 + ".jpg)";
                num3.style.backgroundImage = "url(images/" + count%10 + ".jpg)";

            }
        }
    }
}

var start = document.getElementById('start');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var count = 0;

start.onclick = (e)=> {
    e.preventDefault();
    jsHeadTitle.style.display = "none";
    clearInterval(headWaveTimer);
    start.style.display = "none";
    num1.style.display = 'block';
    bird.showBird(gameBackground);
    bird.flyBird();
    bird.wingWave();
    gameBackground.onclick = (e)=>{
        bird.fallSpeed = -8;
    };
    var block = new Block();
    block.createBlock();
    blockArr.push(block);
};
