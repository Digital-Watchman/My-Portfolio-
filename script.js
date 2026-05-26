const canvas=document.getElementById("network");

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;

canvas.height=160;

}

resize();

window.addEventListener(
"resize",
resize
);

let particles=[];

for(let i=0;i<40;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

dx:(Math.random()-.5),

dy:(Math.random()-.5)

});

}

function draw(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
2,
0,
Math.PI*2
);

ctx.fillStyle="#00c49a";

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

if(
p.x<0||
p.x>canvas.width
)
p.dx*=-1;

if(
p.y<0||
p.y>canvas.height
)
p.dy*=-1;

});

requestAnimationFrame(draw);

}

draw();
