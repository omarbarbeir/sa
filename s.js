let menu = document.getElementById("menu")
let mnav = document.getElementById("m-nav")
let home = document.getElementById("home")
let head = document.getElementById("head")
let exit = document.getElementById("exit")
let who = document.getElementById("who")
let t = document.getElementById("t")
let closee = document.getElementById("close")
let btne = document.getElementById("showe")
let btnm = document.getElementById("showm")
let next = document.getElementById("next")
let timer = document.getElementById("timer")
let exitf = document.getElementById("exitf")
let five = document.getElementById("five")
let f = document.getElementById("f")

menu.onclick=()=>{
    mnav.classList.add("active")
    home.classList.add("active")
    head.classList.add("active")
}
exit.onclick=()=>{
    mnav.classList.remove("active")
    home.classList.remove("active")
    head.classList.remove("active")
}
t.onclick=()=>{
    who.classList.add("active")
}
closee.onclick=()=>{
    who.classList.remove("active")
}
f.onclick=()=>{
    five.classList.add("active")
}
exitf.onclick=()=>{
    five.classList.remove("active")
}
function change(){
    btnm.onclick=()=>{
        let {img,name} = photos[Math.floor(Math.random() * photos.length)];
        document.querySelector("#names").innerHTML = name;
        main.src= img;
        main.style.display="block"
    }
    btne.onclick=()=>{
        let{img,name} = players[Math.floor(Math.random()* players.length)];
        document.querySelector("#names").innerHTML = name;
        main.src= img;
        main.style.display="block"
    }
}
change()

function show(){
    next.onclick=()=>{
        let {quest} = quests[Math.floor(Math.random() * quests.length)];
        document.querySelector("#board").innerHTML = quest;
        timer.style.display = "block";
        timee();
        reset();
    }

}
show()

function timee(){
    timer.onclick=()=>{
        let time = 9;
        let stop = setInterval(() => {
            let seconds = time;
            timer.innerText = seconds;
            time--;
            if(seconds === 0){
                clearInterval(stop);
                timer.style.display = "none"
            }
        },800);
    }
}

function reset(){
    let time = 9;
    timer.innerText = time;
}




