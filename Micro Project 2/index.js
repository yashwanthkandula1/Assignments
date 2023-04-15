let c=0;
display()
function display(){
    document.getElementById('count').innerHTML=c;
}
function i1(){
    c+=1
    display();
}
function i5(){
    c+=5
    display();
}
function d1(){
    c-=1
    display();
}
function d5(){
    c-=5
    display();
}
function cus(){
    let x=Number(document.getElementById('ip').value)
    c+=x
    display()

}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        cus();
    }
});



