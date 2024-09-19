const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body  = document.querySelector('body');
console.log(body);
const h2 = document.querySelector('h2');
console.log(h2);


buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click' , function(click){
        // console.log(click);
        // console.log(click.target);
        switch (click.target.id) {
            case 'grey':
                body.style.backgroundColor = click.target.id;
                h2.style.color = "white";
                h2.style.fontFamily="calibri"
                break;
            case 'blue':
                body.style.backgroundColor = click.target.id;
                h2.style.color = "white";
                h2.style.fontFamily="calibri"
                break;
            case 'red':
                body.style.backgroundColor = click.target.id;
                h2.style.color = "white";
                h2.style.fontFamily="calibri"
                break;
            case 'orange':
                body.style.backgroundColor = click.target.id;
                h2.style.color = "black";
                h2.style.fontFamily="calibri"
                break;
            case 'yellow':
                body.style.backgroundColor = click.target.id;
                h2.style.color = "black";
                h2.style.fontFamily="calibri"
                break;
            case 'green':
                body.style.backgroundColor = click.target.id;
                h2.style.color = "white";
                h2.style.fontFamily="calibri"
                break;
        
            default:
                body.style.backgroundColor === "white";
                h2.style.fontFamily="calibri"
                break;
        }
    });
        
    
    
    
});