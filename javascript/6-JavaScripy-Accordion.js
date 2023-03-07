// level3 => accordion ♥

const plus = document.querySelectorAll("#plus")


plus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content = eo.target.parentElement.parentElement.getElementsByClassName("content-accordion")[0]
    //when click on => + 
    content.classList.toggle("active-acc")
    if (content.classList.contains("active-acc")) {
      content.style.height = `${content.scrollHeight}px`
    } else {
      content.style.height = `0px`
    }


    //when click on => + 
    item.classList.toggle("boda")
    if (item.classList.contains("boda")) {
      item.innerHTML = `ـــ`
      item.style.transform = `translateY(-10px)`
    } else {
      item.innerHTML = `+`
      item.style.transform = `translateY(0px)`
    }

  })
});

