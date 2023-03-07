



let counter = 1
const auto = () => {

    const prapraph = `courses4arab💻`
    hh.innerText = prapraph.slice(0,counter)
    counter++
    if (counter > prapraph.length) {
       clearInterval(stopint)
    }
}

const stopint = setInterval(auto, 200);