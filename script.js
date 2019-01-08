var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var squares=document.querySelectorAll(".squares");
var pickedcolor=pickcolor();
var messagedisplay=document.getElementById("message");
var colordisplay =document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;
var h1=document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn=document.querySelector(".easy");
var hardbtn=document.querySelector(".hard");
easybtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares=3;
    colors = generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
           if(colors[i]) squares[i].style.backgroundColor=colors[i];
            else
                squares[i].style.display="none";
        }
})
hardbtn.addEventListener("click", function(){
    this.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquares=6;
    colors = generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
           squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
    
})
resetbutton.addEventListener("click",function(){
    colors = generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    this.textContent="New Color";
    for(var i=0;i<squares.length;i++)
        {
            squares[i].style.backgroundColor=colors[i];
        }
    h1.style.backgroundColor="steelblue";
    messagedisplay.textContent="";
})

for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].addEventListener("click",function(){
            var clickedcolor=this.style.backgroundColor;
            if(clickedcolor===pickedcolor)
                {
                    messagedisplay.textContent="Correct!";
                    changecolor(this.style.backgroundColor);
                    h1.style.backgroundColor=this.style.backgroundColor;
                    resetbutton.textContent="Play Again?";
                    
                }
            else{
                this.style.backgroundColor="#232323";
                messagedisplay.textContent="Try Again!";  
            }
        })
    }
function changecolor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}
function pickcolor(){
    return colors[Math.floor(Math.random()*colors.length)];
}
function generaterandomcolors(num){
    var arr=[];
    for(var i=0;i<num;i++)
        {
            arr.push(randomcolor());
        }
    return arr;
}
function randomcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    //rgb(r, g, b)
    return "rgb(" + r + ", " +g + ", " + b + ")";
    
}























