// start div-scroll
let client=document.documentElement.clientHeight; 
let bdHeight=document.documentElement.scrollHeight; 
let height = bdHeight - client; 
let div_scroll=document.getElementsByClassName('div-scroll')[0];
window.addEventListener('scroll', () => {
    let top=document.documentElement.scrollTop; 
    div_scroll.style.width=`${(top/height)*100}%`; 
})
// end div-scroll
// start btn-top 
let btn_top=document.getElementsByClassName('btn-top')[0]; 
window.addEventListener('scroll', () => {
    let top=document.documentElement.scrollTop; 
    if(top >= 600){
        btn_top.style.display="flex";
    }
    else {
        btn_top.style.display="none";
    }
})
btn_top.addEventListener('click', () => {
    window.scrollTo(0,0); 
})
// end btn-top 

// start slider leading
let images=document.getElementsByClassName("images")[0];
let left_btn=document.getElementsByClassName('left')[0]; 
let right_btn=document.getElementsByClassName("right")[0]; 
let li=document.querySelectorAll(".leading li");
let count=0, left=false, right=true;
left_btn.addEventListener('click', () => {
    if(count>0){
        scroll_left(); 
    }
})
right_btn.addEventListener('click', () => {
    if(count < 2){
        scroll_right(); 
    }
})
function scroll_right(){
    let x=images.offsetWidth;
    count++; 
    for(let i = 0; i < li.length; i++){
        li[i].className=''; 
    }
    li[count].className='active'; 
    images.scrollBy({
        top:0,
        left:x, 
        behavior:"smooth"
    })
}
function scroll_left(){
    let x=images.offsetWidth; 
    count--; 
    for(let i = 0; i < li.length; i++){
        li[i].className=""; 
    }
    li[count].className='active';
    images.scrollBy({
        top:0,
        left:-x, 
        behavior:"smooth"
    })
}
window.setInterval(() => {
    if(right){
        scroll_right(); 
        if(count == 2){
            right=false; 
            left=true; 
        }
    }
    else{
        scroll_left(); 
        if(count == 0){
            left=false; 
            right=true;
        }
    }
},3000)
// end slider leading
// start skills
let previouse=document.getElementsByClassName("previouse")[0]; 
let next=document.getElementsByClassName("next")[0]; 
let users=document.getElementsByClassName("users")[0]; 
let user_a=document.querySelectorAll(".skills ul li a"); 
let user_count=0; 
user_a.forEach(a => {
    a.addEventListener("click", () => {
        setActive(a); 
        setCount(a);
    })
})
function setCount(a){
    let num=parseInt(a.getAttribute("data-num")); 
    user_count=num;
}
function setActive(a){ 
    removeActive(); 
    a.className='active';
}
function removeActive(){
    user_a.forEach(a => {
        a.className=""; 
    })
}
next.addEventListener("click", () => {
    if(user_count < 2){
        user_count++; 
        slide(user_count); 
    }
})
previouse.addEventListener("click", () => {
    if(user_count > 0){
        user_count--; 
        slide(user_count); 
    }
})
function slide(coun){
    location.href=`/#user-${coun}`;
    setActive(user_a[coun]);
}
// end skills