let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 今天要画一个太极八卦图！
 * 首先要准备一个div
 */
#div1{
    border:1px solid black;
    width:300px;
    height:300px;
}
/* 再把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 然后把这个圆涂成一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%); 
}
/* 画一个小球
 */
#div1::before{  
    background: black;
    width:50%;
    height:50%;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    
}
/* 再画一个小球
 */
#div1::after{
    background: white;
    width:50%;
    height:50%;
    border-radius:50%;
    top:50%;
    left:50%;
    transform:translateX(-50%);
}
/* 在小球的中间再加一个小球
*/
#div1::before{  
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);    
}
`;
let string2 = "";
let index = 0;
let step = () => {
  setTimeout(() => {
    if (string[index] === "\n") {
      string2 += "<br>";
    } else if (string[index] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[index];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, index);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    index += 1;
    if (index < string.length) {
      step();
    }
  }, 15);
};

step();
