let acc = document.querySelectorAll(".questions__item-info");
let menuBtn = document.querySelectorAll('.menu-btn');

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function (e) {
    console.log(this)

    if (e.target.classList.contains('menu-btn__plus') || e.target.classList.contains('accordion')) {
      acc.forEach(item => {
        item.classList.remove('active');
        let i = item.querySelector('.panel')
        console.log(i)
        i.style.maxHeight = null
      })

      this.classList.toggle("active");
      let panel = this.querySelector('.panel');
      console.log(acc)

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
  slidesPerView: 1,
  centeredSlides: true,

  centeredSlides: true,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    701: {
      slidesPerView: 3,

    },
  }
});




let modalFeedback = document.querySelector('.modal__feedback');
modalFeedback.addEventListener('click', () => {
  modalFeedback.classList.remove('active')
})

function openFeedback() {
  modalFeedback.classList.add('active')

}
$('.phone-field').inputmask("+7(999)999-9999");


jQuery.validator.addMethod("checkMaskPhone", function (value, element) {
  return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});
jQuery.validator.addMethod("placeholder", function (value, element) {
  return value != $(element).attr("placeholder");
}, jQuery.validator.messages.required);

$("#feedback").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true,
      placeholder: true
    },
    message: {
      required: true,

    },
    agree: {
      required: true
    },
    phone: {
      checkMaskPhone: true,

    }
  },
  messages: {
    email: "Неверно введён e-mail",
    name: 'Необходимо заполнить поле',
    agree: 'Необходимо дать согласие на обработку персональных данных',
    message: 'Необходимо заполнить поле',
    phone: 'Введите корректный номер телефона'

  },
  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      error.insertAfter($(element).parents('.checkbox-value'));
    } else if (element.attr('name') == 'message') {
      element.attr("placeholder", error[0].outerText);
      error.insertBefore($(element));
    } else {
      element.attr("placeholder", error[0].outerText);
      error.insertBefore($(element).parents('.txt-field'));
    }

  },

  submitHandler: function (form, event) {
    event.preventDefault();

    openFeedback()
    document.getElementById("feedback").reset();

  }
});
document.querySelector('.btn-form').addEventListener('click', () => {
  $("#feedback").submit()
})


let list = document.querySelector('.cost__adaptive-all');
let itemsTitle = document.querySelectorAll('.cost__adaptive-name-title');
let firstTitle = document.querySelector('.first-title');
let items = document.querySelectorAll('.cost__adaptive-item');
let firstItem = document.querySelector('.first-item');
let titles = document.querySelectorAll('.cost__adaptive-name-title');
let listItems = document.querySelectorAll('.cost__adaptive-all-block')
document.addEventListener('DOMContentLoaded', () => {
  firstTitle.classList.add('visible');
  firstItem.classList.add('visible')
  list.classList.remove('visible')
})

titles.forEach((item, i) => {
  item.addEventListener('click', (e) => {

    itemsTitle.forEach(item => {
      item.classList.remove('visible')
    })
    items.forEach(item => {
      item.classList.remove('visible')
    })
    list.classList.add('visible')
    e.target.classList.add('visible')

  })
});
listItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    list.classList.remove('visible')
    items[i].classList.add('visible')
    firstTitle.classList.remove('visible')
    itemsTitle.forEach((item, i) => {
      item.classList.remove('visible')
    });

    itemsTitle[i].classList.add('visible')

  })
});



let destinationList = document.querySelector('.destination-list')
let destinationListItems = document.querySelectorAll('.item');



destinationList.addEventListener('click', function(e) {
  destinationListItems.forEach(item => {
    item.classList.remove('active')
  })
  console.log(e)
  e.target.parentElement.parentElement.classList.add('active')
})