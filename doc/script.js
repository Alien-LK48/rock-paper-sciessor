let wins = 0;
let losses = 0;
let draws = 0;

function countPoints(result) {
    if (result.includes("win")) {
        wins++;
    } else if (result.includes("lose")) {
        losses++;
    } else {
        draws++;
    }
    document.getElementById("score").innerHTML = `Wins: ${wins} <br> Losses: ${losses} <br> Draws: ${draws}`;
}

let video = document.getElementById('vid');
let winvid= document.getElementById('win');
let losevid= document.getElementById('lose');
let drawvid= document.getElementById('draw');

function start (){
    document.getElementById(`vid`).style.display=`block`
    document.getElementById(`win`).style.display=`none`
    document.getElementById(`draw`).style.display=`none`
    document.getElementById(`lose`).style.display=`none`
    video.play();
}
function win(){
    let play=`win`
        document.getElementById(`res`).style.display=`block`
        document.getElementById(`win`).style.display=`block`
        document.getElementById(`lose`).style.display=`none`
        document.getElementById(`vid`).style.display=`none`
        document.getElementById(`draw`).style.display=`none`
        countPoints(play);
        winvid.play();
}
function lose (){
    let play= `lose`
        document.getElementById(`res`).style.display=`block`
        document.getElementById(`lose`).style.display=`block`
        document.getElementById(`win`).style.display=`none`
        document.getElementById(`vid`).style.display=`none`
        document.getElementById(`draw`).style.display=`none`
        countPoints(play);
        losevid.play();
}
function draw (){
    let play=`draw`
        document.getElementById(`res`).style.display=`block`
        document.getElementById(`draw`).style.display=`block`
        document.getElementById(`vid`).style.display=`none`
        document.getElementById(`win`).style.display=`none`
        document.getElementById(`lose`).style.display=`none`
        countPoints(play);
        drawvid.play();
}
function rock(){
    start();
    setTimeout(() => {
    
    let cpurock= Math.floor(Math.random()*3)+1

    if (cpurock==1){           /**r r */
        document.getElementById(`res`).style.backgroundImage=`url(meterials/rock/rr.jpg)`  
        draw()
    }
    else if (cpurock==2){            /** r p */
    document.getElementById(`res`).style.backgroundImage=`url(meterials/rock/rp.jpg)`
        lose()
    }
    else{                 // r s
        document.getElementById(`res`).style.backgroundImage=`url(meterials/rock/rp.jpg)`   
        win()
    }

}, 3000);
}


function paper(){
    start();
    setTimeout(() => {
       
    let cpupaper= Math.floor(Math.random()*3)+1
    
    if (cpupaper==1){         // p r
        document.getElementById(`res`).style.backgroundImage=`url(meterials/paper/pr.jpg)`
        win()
    }
    else if (cpupaper==2){     // p p
        document.getElementById(`res`).style.backgroundImage=`url(meterials/paper/pp.jpg)`
        draw()
    }
    else{                // p s
        document.getElementById(`res`).style.backgroundImage=`url(meterials/paper/ps.jpg)`
        lose()
    }
    
    }, 3000);
    }



    function sciessor(){
        start();
        setTimeout(() => {
           
        let cpusciessor= Math.floor(Math.random()*3)+1

        if (cpusciessor==1){            // s r
            document.getElementById(`res`).style.backgroundImage=`url(meterials/sciessor/sr.jpg)`
            lose()
        }
        else if (cpusciessor==2){      // s p
            document.getElementById(`res`).style.backgroundImage=`url(meterials/sciessor/sp.jpg)`
            win()
        }
        else{         
            draw()       // s s
            document.getElementById(`res`).style.backgroundImage=`url(meterials/sciessor/ss.jpg)`
        }
        
        }, 3000);
        }

 