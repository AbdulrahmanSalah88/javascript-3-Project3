
const retreg = () => {

    if (Username.classList.contains("sucsess")
        && email.classList.contains("sucsess")
        && psw.classList.contains("sucsess")
        && pswrepeat.classList.contains("sucsess")) {
        btnreg.removeAttribute("disabled")
    } else {
        btnreg.setAttribute("disabled", "")

    }
}

Username.addEventListener("keyup", (eo) => {
    eo.target.classList.add("error")
    usermesseg.style.display = `block`

    if (eo.target.value.length > 3) {
        eo.target.classList.add("sucsess")
        eo.target.nextElementSibling.style.opacity = `1`
        usermesseg.style.display = `none`
    } else {
        eo.target.classList.remove("sucsess")
        eo.target.nextElementSibling.style.opacity = `0`
        usermesseg.style.display = `block`
    }
    retreg()
})


email.addEventListener("keyup", (eo) => {
    eo.target.classList.add("error")
    emailmesseg.style.display = `block`
    let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if (regx.test(email.value)) {
        eo.target.classList.add("sucsess")
        eo.target.nextElementSibling.style.opacity = `1`
        emailmesseg.style.display = `none`
    } else {
        eo.target.classList.remove("sucsess")
        eo.target.nextElementSibling.style.opacity = `0`
        emailmesseg.style.display = `block`
    }
    retreg()
})

psw.addEventListener("keyup", (eo) => {
    eo.target.classList.add("error")
    pswmesseg.style.display = `block`
    let regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (regx.test(psw.value)) {
        eo.target.classList.add("sucsess")
        eo.target.nextElementSibling.style.opacity = `1`
        pswmesseg.style.display = `none`
    } else {
        eo.target.classList.remove("sucsess")
        eo.target.nextElementSibling.style.opacity = `0`
        pswmesseg.style.display = `block`
    }
    retreg()
})


pswrepeat.addEventListener("keyup", (eo) => {
    eo.target.classList.add("error")
    repetmesseg.style.display = `block`

    if (psw.value == pswrepeat.value) {
        eo.target.classList.add("sucsess")
        eo.target.nextElementSibling.style.opacity = `1`
        repetmesseg.style.display = `none`
    } else {
        eo.target.classList.remove("sucsess")
        repetmesseg.style.display = `block`
        eo.target.nextElementSibling.style.opacity = `0`
    }
    retreg()
})



// 01000Aa@


// Zoom efcte

creatform.addEventListener("click", (eo) => {
    papaform.style.display = `flex`
    setTimeout(() => {
        formm.style.transform = `scale(1)`
    }, 50);
})


const closee = document.getElementById("close")

closee.addEventListener("click", (eo) => {
    formm.style.transform = `scale(0)`

    setTimeout(() => {
        papaform.style.display = `none`
    }, 650);

})