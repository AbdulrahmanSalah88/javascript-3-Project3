// level3 lesson4 video#2
// random youtube videos from Array
{
  let i = 0;
  buttonVideo.addEventListener("click", (eo) => {
    const video = [
      `
    <iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/1ncTVEuESGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/HGWaRzc91xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/A7zCOOEBxhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/pJ0auP7dbcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/joIVkQvz6ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" width="560" height="315" src="https://www.youtube.com/embed/pRDuwblN2D4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    ];
    //   const random = Math.round(Math.random() * (arr.length - 1));

    conainer.innerHTML = video[i];

    
    i++
    if (i == video.length) {
      i = 0;
    }
    HeartAnimation();
  });
}



// level3 lesson4 video#3
// random quotes videos from Array
let index = 0
buttonquotes.addEventListener("click", (eo) => {
  const quot = [
    `<blockquote dir="rtl" class="sidekick">
    
    (إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَلَذِكْرُ اللَّهِ أَكْبَرُ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ)، وفي ذلك لتأكيد على أهمية الصلاة لأنها عماد الدين كما أكد رسول الله عليه وسلم.
  <cite> <br />العنكبوت</cite>`,

    `<blockquote dir="rtl" class="sidekick">
    قال رسول الله صلى الله عليه وسلم: (إنَّ اللهَ تعالى يحبُّ إذا عملَ أحدُكمْ عملًا أنْ يتقنَهُ)

  <cite> <br />النبيﷺ❤️ </cite>`,

    `<blockquote dir="rtl" class="sidekick">
    قال رسول الله صلى الله عليه وسلم :(لا ارى للمتحابين الا الزواج)✨ 
  <cite> <br />النبيﷺ❤️ </cite>`,

    `<blockquote dir="rtl" class="sidekick">
     عليك في حياتك بشكل عام أن تختار المعارك التي تخوضها والمعارك التي تهملها👌

  <cite> <br />بوده</cite>`,

    `<blockquote dir="rtl" class="sidekick">
    والنفس إن لم تشتغل بشيء شغلت صاحبها🧏‍♂️

  <cite> <br />بوده</cite>`,
  ];


  // const random = Math.round(Math.random() * (q.length - 1) )
  console.log(index)

  zoonqotes.innerHTML = quot[index]

  index++
  if (index >= quot.length) {
    index = 0
  }

  // index++
  // if (index > (quot.length - 1)) {
  //   index = 0
  // }

  // index++
  // if (index == q.length ) {
  //   index = 0
  // }

  // if (index < (q.length - 1) ) {
  //   index++
  // }else{
  //   index = 0
  // }

});
