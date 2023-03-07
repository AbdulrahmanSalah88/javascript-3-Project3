// Dark Mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

{
  // When hover On Change Color
  const changecolor = document.getElementById("changecolor");
  changecolor.addEventListener("mousemove", (eo) => {
    hideenul.style.display = "block";
  });

  changecolor.addEventListener("mouseout", (eo) => {
    hideenul.style.display = "none";
  });
}

// header => Change BackGround when click on "headerbg"
{
const headedrbg = document.getElementById("headerbg");
const header = document.getElementById("heder");

headedrbg.addEventListener("click", (eo) => {
  const random = Math.round(Math.random() * 360);

  header.style.backgroundColor = `hsl(${random}, 45%, 59%)`;

  const h1Inheder = document.querySelector("#heder > h1");
  h1Inheder.style.backgroundColor = `hsl(${random}, 45%, 59%)`;

  const mode = document.getElementById("dark");
  mode.style.backgroundColor = `hsl(${Math.round(
    Math.random() * 360
  )}, 45%, 59%)`;
});
}


// title => Change BackGround when click on "titlebg"
{
  const titlebg = document.getElementById("titlebg");

  titlebg.addEventListener("click", (eo) => {
    const Alltitle = document.querySelectorAll("h1:not(#hh)");
    const random = Math.round(Math.random() * 360);
    Alltitle.forEach((item) => {
      console.log(random);
      item.style.backgroundColor = `hsl(${random}, 60%, 80%)`;
    });
  });
}


// Reusble Function
const changecolor = () => {
  return Math.round(Math.random() * 360);
};


// text h1 Change Color when click on "titlecolor"
{
  const titlecolor = document.getElementById("titlecolor");

  titlecolor.addEventListener("click", (eo) => {
    const texth1 = document.querySelectorAll("h1:not(#heder > h1)");

    texth1.forEach((item) => {
      item.style.color = `hsl( ${changecolor()}, 40%,50%)`;
    });
  });
}
