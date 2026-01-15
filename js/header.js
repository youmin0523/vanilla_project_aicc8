/** Header Change Effect **/
/* 5 */
const header = document.querySelector('#header');

/* 1 */
const stickyHeader = () => {
    /* 3 */
    const scry = window.scrollY;
    /* 4 */
    if (scry > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

/* 2 */
window.addEventListener('scroll', stickyHeader); /* 마우스 스크롤 하게 되면 const stickyHeader의 함수가 실행된다 */


/* custom.js 에서 header.js로 분리함 */

/** Menu Elements Clone For Mobile**/
/* 16 */
const mobileMenus = document.querySelector('.mobile-menus');

/* 17 */
const navs = document.querySelector('.nav-lists').cloneNode(true);

/* 18 */
const info = document.querySelector('.info').cloneNode(true);

/* 19 */
mobileMenus.appendChild(navs);
mobileMenus.appendChild(info);


/** Mobile Menu Toggle **/
/* 10 */
const mobileBtn = document.querySelector('.mobile-btn');

/* media.css 12 이후 */
/* 16 */
const menuHeight = mobileMenus.scrollHeight;

/* 12 */
toggleMobileBtn = (e) => {
    /* 13 */
    const target = e.currentTarget;
    /* 15 */
    target.classList.toggle('active');
    /* 14 */
    if (target.classList.contains('active')) {
        target.classList.remove('not-active');
        /* 17 */
        mobileMenus.style.height = menuHeight + 'px';
    } else {
        target.classList.add('not-active');
        /* 18 */
        mobileMenus.style.height = 0;
    }
}

/* 11 */
mobileBtn.addEventListener('click', toggleMobileBtn);
