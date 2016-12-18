/**
 * Created by yjf on 16-12-18.
 */
function Block() {
    this.upDivWrap = null;
    this.downDivWrap = null;
    this.downHeight = baseObj.randomNum(0,150);
    this.gapHeiht = baseObj.randomNum(150,160);
    this.upHeight = 312 - this.downHeight - this.gapHeiht;
    
    this.createDiv = function (url ,height,positionType,left,top) {
        var newDiv = document.createElement('div');
        newDiv.style.width = '62px';
        newDiv.style.height = height;
        newDiv.style.position = positionType;
        newDiv.style.top = top;
        newDiv.style.left = left;
        newDiv.style.backgroundImage = url;
        return newDiv;
    };

    //创建阻塞
    this.createBlock = ()=> {
        var upHeight = this.upHeight + 'px';
        var upDiv1 = this.createDiv("url(./images/up_mod.png)",upHeight);
        var upDiv2 = this.createDiv("url(./images/up_pipe.png)","60px");
        this.upDivWrap = this.createDiv(null,null,"absolute","450px");
        this.upDivWrap.appendChild(upDiv1);
        this.upDivWrap.appendChild(upDiv2);

        var downDiv1 = this.createDiv("url(./images/down_pipe.png)","60px");
        var downDiv2 = this.createDiv("url(./images/down_mod.png)",this.downHeight + 'px');
        this.downDivWrap = this.createDiv(null,null,"absolute","450px",363 - this.downHeight +'px');
        this.downDivWrap.appendChild(downDiv1);
        this.downDivWrap.appendChild(downDiv2);

        gameBackground.appendChild(this.upDivWrap);
        gameBackground.appendChild(this.downDivWrap);
    };
    //阻塞移动
    this.moveBlock = ()=>{
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px';
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft -3 +'px';
    }
}