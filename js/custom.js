/** Scroll Reveal Effect **/
/* 6 */
const sr = ScrollReveal({
    reset: false, // 스크롤 시 한 번만 실행
});

/* 7 */
sr.reveal('.landing-text-box', {
    duration: 1000,
    origin: "right", // 방향
    distance: "80px", // 얼마나
});

/* 8 */
sr.reveal('.meet-text-box', {
    duration: 1000,
    origin: "bottom", // 방향
    distance: "40px", // 얼마나
});

/* 9, 10 .feature 추가함 */
sr.reveal('.meet-wrapper img, .feature', {
    duration: 1000,
    origin: "bottom", // 방향
    distance: "40px", // 얼마나
    interval: 200, // 0.2초 간격으로 차례로 효과 진행
});


/** Swiper Slider Effect **/
/* 12 */
setTimeout(() => {
    /* 11 */
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
}, 300);


/** Fit Insta Image Height **/
/* 13 */
const instaImageHeight = document.querySelector('#h').scrollHeight;
/* 14 */
document.querySelector('#fh').style.height = instaImageHeight + 'px';

/* 15 */
window.addEventListener('resize', () => {
    /* 16 */
    const instaImageHeight = document.querySelector('#h').scrollHeight;
    /* 17 */
    document.querySelector('#fh').style.height = instaImageHeight + 'px';
});