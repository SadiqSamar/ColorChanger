let btns=document.querySelectorAll("button")
let section=document.querySelector("section")
let heading=document.querySelector("h3")
btns.forEach((x)=>{
 x.addEventListener("mouseover",()=>{
   x.style.backgroundColor=x.innerText
   x.style.color="black"
   heading.innerText=`CLICK TO CHANGE TO ${x.innerText} THEME`
   heading.style.color=x.innerText
   heading.style.transition="4.6s"
   heading.style.transform="rotateX(360deg) scale(1.1)"
   if(x.innerText=="RESET")
   x.style.color="white"
  
 })
 x.addEventListener("mouseout",()=>{
   x.style.backgroundColor="black"
   x.style.color="white"
   heading.innerText=`CHOOSE YOUR DESIRED THEME`
   heading.style.transform=""

 })  
 x.addEventListener("click",()=>{
   section.style.backgroundColor=x.innerText
   heading.innerText=`WELCOME TO ${x.innerText} THEME`
   heading.style.color="white"
   if(x.innerText=="RESET")
   section.style.backgroundColor="black"
   
 })
})

