const bookNowBtns =document.querySelectorAll(".bookNow");
const myModal =document.getElementById("myModal");
const backdrop =document.getElementById("backdrop");
const myCloseArray=Array.from(document.querySelectorAll(".myClose"));


const backDropHandler =function(){
    backdrop.classList.toggle('visible')
}
const hideModal =function(){
    myModal.classList.remove('visible')
    backDropHandler();
}
const showModal =function(){
    myModal.classList.add('visible')
    backDropHandler()
}
bookNowBtns.forEach((ele) =>{
    ele.addEventListener("click",showModal)
})
myCloseArray.forEach((ele)=>{
    ele.addEventListener("click",hideModal)
})
backdrop.addEventListener("click",hideModal)