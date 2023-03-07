// Section Change Background Click On "sectionbg"
// using Array & i++
// level 3 lesson 2 Video #4
{
  // const sectionbg = document.getElementById("sectionbg")
  //   const Color = ["#390099", "#ffba08", "#f72585", "#48cae4", "#e63946"];
  // let i = 0
  // sectionbg.addEventListener("click" , (eo) => {
  //   const ss = document.querySelectorAll("section")
  //   ss.forEach(item => {
  //     console.log(i);
  //     item.style.backgroundColor = Color[i]
  //   });

  //   i++
  // if (i > (Color.length - 1) ) {
  //   i = 0
  // }

  //  if (i < (Color.length - 1)) {
  //   i++
  // } else {
  //   i = 0
  // }
  //   // Abbreviation of  the if rule
  // i < Color.length - 1 ? i++ : i = 0
  // })
}

// Section Change Background Click On "sectionbg"
// using Array & Math.random()   ( floor & trunc )
// level 3 lesson 2 Video #5
{
  //     const Color = ["#390099", "#ffba08", "#f72585", "#48cae4", "#e63946"];
  //     sectionbg.addEventListener("click" , (eo) => {
  //       const  AllSection = document.querySelectorAll("section")
  // const random = Math.floor(Math.random() * Color.length  )
  // console.log(random)
  // AllSection.forEach(item => {
  //   item.style.backgroundColor = Color[random]
  // });
  //     })
}

// Section Change Background Click On "sectionbg"
// using rgb & Math.random() return function
// level 3 lesson 2 Video #6
{
  // const retrgb = (eo) => {
  //   return Math.round(Math.random() * 255)
  // }
  //   sectionbg.addEventListener("click" , (eo) => {
  //     const AllSection = document.querySelectorAll("section")
  //     const rgb1 = retrgb()
  //     const rgb2 = retrgb()
  //     const rgb3 = retrgb()
  //     AllSection.forEach(item => {
  //       console.log(rgb1,
  //         rgb2,
  //         rgb3);
  //     item.style.backgroundColor = `rgb(${rgb1},${rgb2} ,${rgb3} )`
  //     });
  //   })
}

// Section Change Background Click On "sectionbg"
// using hex
// level 3 lesson 2 Video #7
{
  // const hx = () => {
  //   return `#${Math.random().toString(16).slice(2, 8)}`
  // }

  // sectionbg.addEventListener("click", (eo) => {
  //   const Allsection = document.querySelectorAll("section")

  //   const ret = hx()

  //   Allsection.forEach(item => {
  //     item.style.backgroundColor = `${ret}`
  //   });

  // })


}

// Section Change Background Click On "sectionbg"
// using hex &   using \ for & for in & for of & while & for do While & for (;;) \
// level 3 lesson 2 Video
{

  const hx = () => {
    return `#${Math.random().toString(16).slice(2, 8)}`
  }

  sectionbg.addEventListener("click", (eo) => {
    const Allsection = document.querySelectorAll("section")
    const ret = hx()


  // let i = 0
  // do {
  //   const item = Allsection[i]
  //  item.style.backgroundColor = ret
  // i++

  // } while (i < Allsection.length);


// let i = 0
// while (i < Allsection.length) {
//   const item = Allsection[i]
//  item.style.backgroundColor = ret
// i++
// }



// for (const i in Allsection) {
//  const item = Allsection[i]
//  item.style.backgroundColor = ret
// }

// for (const i of Allsection) {
//  const item = Allsection[i]
//  item.style.backgroundColor = ret

// }




    //         let i = 0
    //  for (; ; ) {
    //   if (i < Allsection.length) {
    //     const item = Allsection[i];
    //     item.style.backgroundColor = ret
    //     i++
    //   }else{break}

    //     }



    for (let i = 0; i < Allsection.length; i++) {
      const item = Allsection[i];
      item.style.backgroundColor = ret
    }

  })
}
