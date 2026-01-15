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