

const allcopy = document.querySelectorAll(".copycode")

allcopy.forEach(item => {
    item.addEventListener("click", (eo) => {
        const copied = item.nextElementSibling.innerText
        navigator.clipboard.writeText(copied)

        item.style.backgroundColor = `#fc4364`
            item.innerText = `copied!`

        setTimeout(() => {
        item.style.backgroundColor = `dodgerblue`

            item.innerText = `Copy!`
        }, 1100);
    })
});