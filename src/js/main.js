let acc = document.querySelectorAll(".questions__item-info");
let menuBtn = document.querySelectorAll('.menu-btn');

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function (e) {
    console.log(this)

    if (e.target.classList.contains('menu-btn__plus') || e.target.classList.contains('accordion')) {
      this.classList.toggle("active");
      let panel = this.querySelector('.panel');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
};


new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-btn',
  },
  loop: true,
});
