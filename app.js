// var bg=document.getElementsByClassName('bg')

// function change1(e){
//     console.log(e.src)
//     bg.src = 'https://i.pinimg.com/originals/82/88/e9/8288e9eec7c66c0790ee546462b8e204.gif'
//     console.log(bg.src)
// }


// function change1(){
//     var bg = document.getElementById('bg').src = "https://i.pinimg.com/originals/82/88/e9/8288e9eec7c66c0790ee546462b8e204.gif"
    
//     }
// function change2(){
// var bg = document.getElementById('bg').src = "https://i.pinimg.com/originals/66/60/a2/6660a2a5695c1b5ca0eedc8560efe2ae.gif"

// }
// function change3(){
//     var bg = document.getElementById('bg').src = "https://technabob.com/blog/wp-content/uploads/2013/09/fighting_game_animation_7.gif"
    
//     }


//     window.onkeypress=function (e){

// if (e.keyCode == 49){
//     change1()
// }
// else if(e.keyCode == 50){
//     change2()

// }
// else if(e.keyCode == 51){
//     change3()

// }
//     }



//     setInterval(() => {
//         console.log(1)
//     }, 0.001);
var img = document.getElementById('car')
var score=0



// window.onkeypress=function (e){
//     // console.log(e.keyCode)
//     if(e.keyCode === 52){
//         move()
//     }
//     if(e.keyCode == 54){
//         moveright()}

// }










// function moveright(){
// var score=document.getElementById('num').value
    
//     // score=score+100
//     img.style.marginLeft= score + "px";
//     console.log("right" + score)


// }

// function move(){
    
//     // score=score-100
//     img.style.marginLeft= score + "px";
//     // console.log("left" + score)

// }



var interval;
var interval1;
var time;
var up=0;
var i=0
var j=0

function run1(){
    up=up+60;
    var timer=document.getElementById('timer').value=up;
}


function run(){
    score=score+i
    img.style.marginLeft= score + "px";
    
    if (score>=1000){
stop ()
    }
    j=i*up;
    var dis=document.getElementById('dis').value=j; }

    var index1;
    var num;

    function start(){
    interval1 =setInterval(run1,1000)
    interval=setInterval(run,100)
    
    
    num=+document.getElementById('num').value;
    i=num
    num=0
    

    
}
// var stop=setInterval(function() {
//     score=score+10
//     console.log(score)
//     img.style.marginLeft= score + "px";
//     console.log("right" + score)
// }, 300);

// }
function stop(){
    clearInterval(interval)
    clearInterval(interval1)
}