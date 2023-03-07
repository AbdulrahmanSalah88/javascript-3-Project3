// level3 lesson => Digital Clock
const timenow = () => {

    const time = new Date()
    let year = time.toDateString()
    let egy = time.getHours()
    let min = time.getMinutes()
    let soc = time.getSeconds()
    let pmam = `Am`


    if (egy > 12) {
        egy = egy - 12
        pmam = `pm`
    }
    if (egy == 0) {
        egy = `12`
    }
    if (egy < 10) {
        egy = `0${egy}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (soc < 10) {
        soc = `0${soc}`
    }


    const cloc =
        `<div id="years">${year}</div>
        <div id="clock">${egy} : ${min} : ${soc} ${pmam}</div>`


    zoontime.innerHTML = cloc

}

setInterval(timenow, 1000);



const years = new Date()
const now = years.getFullYear()



f.innerHTML = `© ${now}`