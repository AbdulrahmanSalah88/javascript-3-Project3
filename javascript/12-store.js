const showitems = document.createElement("div")
const btnPrimary = document.querySelectorAll(".btn-primary")

// Calculate the => (total price)
const updateTotalePrice = () => {
    const itemconainer = document.querySelectorAll(".item-conainer")


    let totale = 0
    itemconainer.forEach(item => {
        const newPrice = Number(item.getElementsByClassName("price")[0].innerText.replace("$", ""))

        const counter = Number(item.getElementsByClassName("input-of-product")[0].value)



        totale = totale + (newPrice * counter)

    });

    totalPrice.innerText = `${totale}$`
}


// whend I click inside (BlackScreen)
zoonBlackScreen.addEventListener("click", (eo) => {
    updateTotalePrice()
})
// Whend I Change inside (BlackScreen)
zoonBlackScreen.addEventListener("change", (eo) => {
    updateTotalePrice()
})


zoonBlackScreen.addEventListener("click", (eo) => {

    if (eo.target.classList.contains("btn-secondary")) {
        eo.target.parentElement.remove()
        updateTotalePrice()

        const NameProducteInBlackScreen = eo.target.parentElement.getElementsByClassName("Name-product")[0].innerText

        const allcards = document.querySelectorAll(".card")

        allcards.forEach(item => {
            const AllNameProductInMyWep = item.getElementsByClassName("card-title")[0].innerText


            if (NameProducteInBlackScreen == AllNameProductInMyWep) {
                const undone = item.getElementsByClassName("btn btn-success")[0]
                undone.classList.remove("btn-success")
                undone.classList.add("btn-primary")
                undone.removeAttribute("disabled")
                undone.innerText = `Buy`
                // undone.

            }

        });

    }

})

btnPrimary.forEach(item => {
    item.addEventListener("click", (eo) => {

        { //  Change Buttons from "Buy" to "✔ Done"
            item.classList.remove("btn-primary")
            item.classList.add("btn-success")
            item.setAttribute("disabled", "")
            item.innerHTML = `&#10004;  Done`
        }

        {    // The congratulatory element
            const congratulations = document.createElement("div")
            body.prepend(congratulations)
            congratulations.classList.add("cong-of-clinte")
            congratulations.innerHTML = `  &#128525;	 مبروووووووك`
            setTimeout(() => {
                congratulations.style.transform = `translateX(-100vw)`
            }, 2000);
            setTimeout(() => {
                congratulations.remove()
            }, 4000);
        }

        {   // create Elements show Producte
            body.prepend(showitems)
            showitems.classList.add("show-product")
            showitems.innerHTML = `&#128722;        عرض المشتريات`
        }

        // The New Elements of Black Screen 
        const cards = item.parentElement.parentElement.parentElement
        const balackImg = cards.getElementsByTagName("img")[0].src
        const NameProducte = cards.getElementsByClassName("card-title")[0].innerText
        const priceProducte = cards.getElementsByClassName("price")[0].innerText


        const printInblackScreen = `
        <div dir="rtl" class="item-conainer">
        
        <div class="img-title-parent">
            <img src="${balackImg}" alt="">
            <p class="Name-product">${NameProducte}</p>
        </div>


        <div style="display: flex; align-items: center;">
            <input class="input-of-product" id="inputProducte" dir="ltr" min="1" value="1" type="number">
            <p style="margin: 0;">الكميه</p>
        </div>


        <div class="price">
        ${priceProducte}
        </div>


        <div class="btn btn-secondary">
            حذف
        </div>
        `
        zoonBlackScreen.innerHTML += printInblackScreen

        updateTotalePrice()
        console.group(updateTotalePrice)

    })
});


// When Click on (close) in black Screen
const closee = document.getElementById("close")
const backScrren = document.querySelector(".back-screen")

closee.addEventListener("click", (eo) => {
    backScrren.style.transform = `translateX(-100vw)`
})

// When Click on (عرض المشتريات) to show black Screen
showitems.addEventListener("click", (eo) => {
    backScrren.style.transform = `translateX(0vw)`


})