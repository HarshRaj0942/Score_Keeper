var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var head = document.querySelector("h1");
var p1Display = document.querySelector("#disp1");
var p2Display = document.querySelector("#disp2");
var reset = document.querySelector("#rst");
var input = document.querySelector("input");
var p1score =0;
var p2score =0;
var winningScore = document.querySelector("#final");
var change = document.querySelector("#change");
var isChangeScore = false;

console.log("Final"+" "+final.textContent);
p1button.addEventListener("click",function(){

    p1score++;
    //console.log(p1score);
    p1Display.textContent = p1score;

    if(p1score === Number(final.textContent))
    {
       p1Display.style.color = "green";
       p1button.disabled = true;
       p2button.disabled = true;
    }  
})


p2button.addEventListener("click",function(){

    p2score++;
    p2Display.innerHTML = p2score;
    p2Display.textContent = p2score;

   if(p2score === Number(final.textContent))
    {
       p2Display.style.color = "green";
       p2button.disabled = true;
       p1button.disabled = true;
    }

})

reset.addEventListener("click",allOver)



input.addEventListener("change",function()
{

    change.addEventListener("click",function(){

       if(Number(input.value)>0){ 
        winningScore.textContent = Number(input.value); 
        input.classList.toggle("changedScore");
        change.classList.add("align");
        allOver();
       }
    })
 
})

function allOver() {
        p1score=0;
        p2score=0;
        p1button.disabled=false;
        p2button.disabled=false;
        p1Display.textContent=p1score;
        p2Display.textContent=p2score;
        p1Display.style.color="black";
        p2Display.style.color="black";
}