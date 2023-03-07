const tgbtn = document.querySelectorAll("#tgbtn")
const tooglebt = document.querySelector(".toogle-bt")
const parentofcontent = document.querySelector(".parent-of-content")

tgbtn.forEach((item,index) => {
    item.addEventListener("click" , (eo) => {
        // toggle between => (buttons)
        tooglebt.getElementsByClassName("active-taps")[0].classList.remove("active-taps")
        eo.target.classList.add("active-taps")


        // toggle between => (articale)
        parentofcontent.getElementsByClassName("active-cont")[0].classList.remove("active-cont")
        parentofcontent.getElementsByClassName("content-toogle")[index].classList.add("active-cont")
        

    })
});