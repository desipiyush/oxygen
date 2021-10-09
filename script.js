var body = document.body;

var doa=true;

body.onmousemove=(e)=>{
    if (doa==true){
        makeo2(e);
        setTimeout(() =>{
            doa=true
        },10);
        doa=false;
    }
}

body.onmousemove = (e) => {
    makeo2(e)
}
function makeo2(e) {
    var x = e.clientX;
    var y = e.clientY;
    var sc = Math.random();

    var elem = document.createElement('div');
    elem.setAttribute('class', 'o2');
    elem.setAttribute('style', `left: ${x}px; top: ${y}px; transform: scale(0);`)
    elem.innerHTML = 'O<sub>2</sub>';

    setTimeout(() => {
        elem.style.transition = `all .5s`;
        elem.style.transform = `scale(${sc})`
    }, 10);
    
    setTimeout(() => {
        elem.style.transition = `all 2s`;
        elem.style.transform = `scale(0)`
        elem.style.left = window.innerWidth / 2 + 'px';
        elem.style.top = window.innerHeight / 2 + 'px';
        
    }, 500);
    
    setTimeout(() => {
        elem.remove()
    }, 3500);



    body.insertAdjacentElement("afterbegin", elem);
}