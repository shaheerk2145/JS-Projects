// generate random color

const randColor = function(){
    let hex= '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];   
    }
    
    return color;
};
// console.log(randColor());

let changes;
function startChangeOfColor(){
    if(!changes){
        changes  = setInterval(changeColor,1000);
        // console.log(changes);
        
    }
    
    function changeColor(){
        document.body.style.backgroundColor = randColor();
        if(randColor(changeColor) === "#000"){
            document.body.style.color= "white";
        }
    }
};
function stopChangeOfColor(){
    clearInterval(changes);
    changes = null;
}
document.querySelector('#start').addEventListener('click',startChangeOfColor);
document.querySelector('#stop').addEventListener('click',stopChangeOfColor);