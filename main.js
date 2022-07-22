// знаходимо елемент і записуємо його в змінну, яку можна далі використовувати
const popup = document.querySelector('.backdrop');
const openPopupButton = document.querySelector('.offer__button');
const closePopupButton = document.querySelector('.modal__icon');

// очікуємо коли якась дія виконається, в данному випадку click
openPopupButton?.addEventListener('click', () => {
    // popup.style.visibility = 'visible'; можна на елементах безпосередньо змінювати стилі, але це погана практика
    popup.classList.add('visible'); // краще стилізувати через класи, а в js додавати або забирати такі класи
    requestAnimationFrame(() => {  // браузер, приміняє деякі дії одночасно, тому для анімування потрібно, щоб додавання наступного класу вібдулось пізніше
        popup.classList.add('animated');
    });
});

function removeAnimation(p) { // куски кода можна групувати в функції щоб потім перевикористовувати
    p.classList.remove('visible');
}

closePopupButton?.addEventListener('click', () => {
    // popup.style.visibility = 'hidden';
    popup.classList.remove('animated');
    // можна очікувати коли закінчиться перехід, і щось зробити
    popup.addEventListener('transitionend', () => removeAnimation(popup), { once: true });
});

// знаходимо елемент і записуємо його в змінну, яку можна далі використовувати
const IIPopup = document.querySelector('.backdrop');
const openIIPopupButton = document.querySelector('.offer__button');
const closeHeaderPopupButton = document.querySelector('.modal__icon');

// очікуємо коли якась дія виконається, в данному випадку click
openIIPopupButton.addEventListener('click', () => {
    // popup.style.visibility = 'visible'; можна на елементах безпосередньо змінювати стилі, але це погана практика
    IIPopup.classList.add('visible'); // краще стилізувати через класи, а в js додавати або забирати такі класи
    requestAnimationFrame(() => {  // браузер, приміняє деякі дії одночасно, тому для анімування потрібно, щоб додавання наступного класу вібдулось пізніше
        IIPopup.classList.add('animated');
    });
});

// function removeAnimation() { // куски кода можна групувати в функції щоб потім перевикористовувати
//     headerPopup.classList.remove('visible');
// }

closeIIPopupButton.addEventListener('click', () => {
    // popup.style.visibility = 'hidden';
    IIPopup.classList.remove('animated');
    // можна очікувати коли закінчиться перехід, і щось зробити
    IIPopup.addEventListener('transitionend', () => removeAnimation(headerPopup), { once: true });
});