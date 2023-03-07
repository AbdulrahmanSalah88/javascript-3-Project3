// Elements the photos
const Myimg = [
    `<img src="img/1.png" class="myimg">`,
    `<img src="img/2.png" class="myimg">`,
    `<img src="img/3.png" class="myimg">`,
    `<img src="img/4.png" class="myimg">`,
    `<img src="img/5.png" class="myimg">`,
];

let i = 0;
Zoonimg.innerHTML += Myimg[i];
Zoonimg.innerHTML += `<p>slide #${i + 1} of ${Myimg.length}</p>`;
Pre.setAttribute("disabled", "");

// when click on button => (Next)
Next.addEventListener("click", (eo) => {
    Pre.removeAttribute("disabled");
    i++;
    Zoonimg.innerHTML += Myimg[i];
    Zoonimg.innerHTML += `<p>slide #${i + 1} of ${Myimg.length}</p>`;

    if (i + 1 == Myimg.length) {
        Next.setAttribute("disabled", "");
    }
    parentbuttons.getElementsByClassName("active-num")[0].classList.remove("active-num");
    parentbuttons.getElementsByTagName("button")[i].classList.add("active-num");
});

// when click on button => (Pre)
Pre.addEventListener("click", (eo) => {
    Next.removeAttribute("disabled");
    i--;
    Zoonimg.innerHTML += Myimg[i];
    Zoonimg.innerHTML += `<p>slide #${i + 1} of ${Myimg.length}</p>`;

    if (i == 0) {
        Pre.setAttribute("disabled", "");
    }

    parentbuttons.getElementsByClassName("active-num")[0].classList.remove("active-num");
    parentbuttons.getElementsByTagName("button")[i].classList.add("active-num");
});

const mybutton = document.querySelectorAll(".mybutton");
const parentbuttons = document.getElementsByClassName("number-buttons")[0];

// when click on => (number Buttons)
mybutton.forEach((item, index) => {
    item.addEventListener("click", (eo) => {
        parentbuttons.getElementsByClassName("active-num")[0].classList.remove("active-num");
        eo.target.classList.add("active-num");
        Zoonimg.innerHTML += Myimg[index];
        Zoonimg.innerHTML += `<p>slide #${index + 1} of ${Myimg.length}</p>`;

        i = index;

        //The condition for The => (Next) and (Pre) when click on the => (Buttons Number)
        if (index == Myimg.length - 1) {
            Next.setAttribute("disabled", "");
            Pre.removeAttribute("disabled");
        } else if (index == 0) {
            Pre.setAttribute("disabled", "");
            Next.removeAttribute("disabled");
        } else {
            Pre.removeAttribute("disabled");
            Next.removeAttribute("disabled");
        }
    });
});
