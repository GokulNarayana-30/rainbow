const button=document.querySelector("button");
const body=document.querySelector('body');
const color=['violet','indigo','blue','green','yellow','orange','red','purple',];
body.style.backgroundColor='black';
document.addEventListener('click',changeColor)
function changeColor(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
}