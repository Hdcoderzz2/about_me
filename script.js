function age(){
    let d=new Date();
    return String(parseInt(d.getFullYear())-2009);
}
const content={
    greetings:"Hello! Nice to meet you :) ",
    hry:"Its fine. Thanks for asking",
    who:"...",
    fav_song:"Points of Authority by Linkin park",
    age:`About ${age()} years old`,
    inactive:"...to do something",
    grade:"11th ",
    height:"taller than most cactuses",
    bday:"Written in yellow banner in left side"
}
function disable_btns(){
    document.querySelectorAll(".console_btn").forEach(element => {
        element.disabled=true;
    });
}
function undisable_btns(){
    document.querySelectorAll(".console_btn").forEach(element => {
        element.disabled=false;
    });
}
function time_filter(t){
    if(t<10){
        return "0"+t;
    }else{
        return t;
    }
}
setInterval(()=>{
    let date=new Date();
    document.getElementById("time").innerText=`${date.getHours()}:${time_filter(date.getMinutes())}`;
    setTimeout(()=>{
         document.getElementById("time").innerText=`${date.getHours()} ${time_filter(date.getMinutes())}`;
    },1000)
},2000);
function more(){
    document.getElementById("options").style.display='block';
}
function typing_effect(key){
    console.log(key);
    let elem=document.getElementById("text");
    elem.innerHTML="";
    cls();
    disable_btns();
    let text=(content[key]).split("");
    var counter=0;
    var i=setInterval(()=>{
        elem.innerHTML+=text[counter];
        if(counter==(text.length-1)){
            elem.innerHTML+=".";
            let span=document.createElement("span");
            span.classList.add("blinker");
            span.innerText=" _";
            document.getElementById("text").appendChild(span);
            let e=document.getElementById("btn_container");
            e.style.display="grid";
            setTimeout(()=>{e.style.opacity="1"},100);
            undisable_btns();
            clearInterval(i);
        }
        else{
        counter++;
        }
    },80)
}
function cls(){
    document.getElementById("options").style.display="none";
}