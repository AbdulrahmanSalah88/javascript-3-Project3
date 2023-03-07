// animation heart
//  level3 lesson2 video#2

const HeartAnimation = () => {

  //The new Elements is in side => (containerHeart)
  const smallcontainer = document.createElement("div")
  smallcontainer.classList.add("Test")
  containerHeart.prepend(smallcontainer)

  // (heart)=> Elements Implement it in 50s seconds
  const stopheart = setInterval(() => {
    const heart = document.createElement("div")
    heart.classList.add("Heart")
    heart.innerHTML = `&#128139;`
    heart.style.left = `${Math.random() * 100}%`
    heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`

    const heart2 = document.createElement("div")
    heart2.classList.add("Heart")
    heart2.innerHTML = `&#128521;	`
    heart2.style.left = `${Math.random() * 100}%`
    heart2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
    smallcontainer.prepend(heart)
    smallcontainer.prepend(heart2)

  }, 50);

  setTimeout(() => {
    clearInterval(stopheart)
  }, 2000);


  setTimeout(() => {
    smallcontainer.remove()
  }, 8000);

}
buttonheart.addEventListener("click", (eo) => {
  HeartAnimation()
})