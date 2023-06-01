//요일을 정의한다.
class DayBox {
    constructor(container, x, text) {
        this.div;
        this.container = container; //부모요소
        this.x = x;
        this.text = text;

        this.div = document.createElement("div");
        this.div.style.width = 100 + "px";
        this.div.style.height = 50 + "px";

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";

        this.div.innerText = this.text;
        this.div.style.textAlign = "center";
        this.div.style.fontSize = 20 + "px";
        this.div.style.fontWeight="bold";
        this.div.style.border="1px solid darkgray";
        this.div.style.boxSizing="border-box"
        this.div.style.paddingTop=10+"px"

        this.container.appendChild(this.div);
    }
}
