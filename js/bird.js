/**
 * Created by yjf on 16-12-18.
 */
var bird = {
    flyTimer:null,
    wingTimer:null,

    div:document.createElement('div'),
    showBird:function (parentObj) {
        var show = this.div.style;
        show.width = "40px";
        show.height = "28px";
        show.backgroundImage = "url(./images/bird0.png)";
        show.backgroundRepeat = "no-repeat";
        show.position = "absolute";
        show.left = "50px";
        show.top = "200px";
        show.zIndex = "1";
        console.log(show.width);
        parentObj.appendChild(this.div);
    },
    fallSpeed:0,
    flyBird:function () {
        bird.flyTimer = setInterval(fly,40);
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ +"px";
            if(bird.div.offsetTop < 0){
                bird.fallSpeed = 2;
            }
            //小鸟坠落
            if(bird.div.offsetTop >= 395){
                bird.fallSpeed = 0;
                clearInterval(bird.flyTimer);
                clearInterval(bird.wingTimer);
                var over = document.getElementById('gameOver');
                var okBtn = document.getElementById('ok');
                over.style.display = 'block';
                okBtn.onclick=()=>{
                    //刷新页面
                    window.location.href="index.html";
                }
            }
            if(bird.fallSpeed > 12){
                bird.fallSpeed = 12;
            }
        }
    },
    wingWave: function () {
        var up = ["url(./images/bird0.png)","url(./images/bird1.png)"];
        var down = ["url(./images/down_bird0.png)","url(./images/down_bird1.png)"];
        var i = 0, j = 0;
        bird.wingTimer = setInterval(wing,120);
        function wing() {
            if(bird.fallSpeed > 0){
                bird.div.style.backgroundImage = down[i++];
                if(i == 2){
                    i = 0;
                }
            }
            if(bird.fallSpeed < 0){
                bird.div.style.backgroundImage = up[j++];
                if(j == 2){
                    j = 0;
                }
            }
        }
    }
};
