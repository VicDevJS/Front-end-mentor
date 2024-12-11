var buttons = {
    btn1 : document.querySelector("#button1"),
    btn2 : document.querySelector("#button2"),
    btn3 : document.querySelector("#button3"),
    btn4 : document.querySelector("#button4"),
    btn5 : document.querySelector("#button5"),
    btn6 : document.querySelector("#button6"),
    btn7 : document.querySelector("#button7"),
    btn8 : document.querySelector("#button8"),
}
var articles = {
    atc1 : document.querySelector("#article1"),
    atc2 : document.querySelector("#article2"),
    atc3 : document.querySelector("#article3"),
    atc4 : document.querySelector("#article4"),
}
var off = "d-off";

buttons.btn1.addEventListener('click', () => {
    buttons.btn1.classList.toggle(off);
    buttons.btn2.classList.toggle(off);
    articles.atc1.classList.toggle(off);
});

buttons.btn2.addEventListener('click', () => {
    buttons.btn1.classList.toggle(off);
    buttons.btn2.classList.toggle(off);
    articles.atc1.classList.toggle(off);
});

buttons.btn3.addEventListener('click', () => {
    buttons.btn3.classList.toggle(off);
    buttons.btn4.classList.toggle(off);
    articles.atc2.classList.toggle(off);
});

buttons.btn4.addEventListener('click', () => {
    buttons.btn3.classList.toggle(off);
    buttons.btn4.classList.toggle(off);
    articles.atc2.classList.toggle(off);
});


buttons.btn5.addEventListener('click', () => {
    buttons.btn5.classList.toggle(off);
    buttons.btn6.classList.toggle(off);
    articles.atc3.classList.toggle(off);
});

buttons.btn6.addEventListener('click', () => {
    buttons.btn5.classList.toggle(off);
    buttons.btn6.classList.toggle(off);
    articles.atc3.classList.toggle(off);
});

buttons.btn7.addEventListener('click', () => {
    buttons.btn7.classList.toggle(off);
    buttons.btn8.classList.toggle(off);
    articles.atc4.classList.toggle(off);
});

buttons.btn8.addEventListener('click', () => {
    buttons.btn7.classList.toggle(off);
    buttons.btn8.classList.toggle(off);
    articles.atc4.classList.toggle(off);
});

























// var buttons = {
//     b1: document.querySelector("#button1"),
//     b2: document.querySelector("#button2"),
//     b3: document.querySelector("#button3"),
//     b4: document.querySelector("#button4"),
//     b5: document.querySelector("#button5"),
//     b6: document.querySelector("#button6"),
//     b7: document.querySelector("#button7"),
//     b8: document.querySelector("#button8")
// }

// var x = 1

// var atc = {
//     atc1: document.querySelector("#article1"),
//     atc2: document.querySelector("#article2"),
//     atc3: document.querySelector("#article3"),
//     atc4: document.querySelector("#article4")
// }

// var article = document.querySelector("#article2");

// function onbox() {
//     if (x == 1) {
//         article.classList.remove("d-off");
//         article.classList.add("d-on");
//         this.classList;
//         this.classList;
//         x = 0;
//     } else {
//         article.classList.add("d-off");
//         article.classList.remove("d-on");
//         this.classList;
//         this.classList;
//         x = 1;
//     }
// }

// buttons.b3 = onbox()