canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");






canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    lpx = e.touches[0].clientX - "offsetLeft ";
    lpy = e.touches[0].clientY - "offsetTop";

    color = document.getElementById("colorv").value;
    width = document.getElementById("linev").value;
}


canvas.addEventListener("touchmove", my_touchmove);



function my_touchmove(e) {
    cpx = e.touches[0].clientX - "offsetLeft ";
    cpy = e.touches[0].clientY - "offsetTop";

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();

    lpx = cpx;
    lpy = cpy;




}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}