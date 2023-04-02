
function clock() {
    var a = document.getElementById('Hour');
    var b = document.getElementById('Min');
    var c = document.getElementById('Sec');
    var a1 = document.getElementById('AAM')
    var d = new Date().getHours();
    var e = new Date().getMinutes();
    var f = new Date().getSeconds();

    a.innerHTML = d;
    b.innerHTML = e;
    c.innerHTML = f;
    if (d >= 12) {
        a1.innerHTML = ('PM')
    }
}
var interval = setInterval(clock, 1000)

function surabhi(){
    let wake=document.getElementById("wake");
    let suchi=document.getElementById("suchi");
    let msg=document.getElementById("msg");
    let night=document.querySelector("#night");
    let lunch=document.querySelector("#lunch");
    let evng=document.querySelector("#evng");
    let img=document.querySelector(".image");
    let side=document.getElementsByClassName("side");

    let time=new Date();
    let hrs=time.getHours();
    if(hrs==parseInt(wake.value)){
       suchi.innerText="GOOD MORNING!! WAKE UP !!"; 
       msg.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
       side[0].innerHTML=wake.value;
    }
    else if(hrs==parseInt(lunch.value)){
        suchi.innerText="GOOD AFTERNOON!!TAKE SOME SLEEP";
        msg.innerText="LET'S HAVE SOME LUNCH";
        img.style.backgroundImage=("url(./lunch.svg)");
        side[1].innerHTML=lunch.value;
    }
    else if(hrs==parseInt(evng.value)){
        suchi.innerText="GOOD EVENING";
        msg.innerText="STOP YAWNING,GET SOME TEA...ITS JUST EVENING!";
        img.style.backgroundImage=("url(./evng.png)");
        side[2].innerHTML=evng.value;
    }
    else if(hrs==parseInt(night.value)){
          suchi.innerText="GOOD NIGHT !!";
          msg.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
          img.style.backgroundImage=("url(./goodnight.svg)");
          side[3].innerHTML=night.value;
    }
}