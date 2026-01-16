/* 1 */
// https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4


/* 4 */
const sliderWrapper = document.querySelector('.swiper-wrapper');
/* 10 */
const offersWrapper = document.querySelector('.products');

/* 11 */
// const sliderDOM = `
//                         <div class="swiper-slide">
//                             <div class="slider-image">
//                                 <img src="images/${pro_img}" alt="slide image">
//                             </div>
//                             <div class="slider-text">
//                                 <h4>${pro_name}</h4>
//                                 <p>${pro_desc}</p>
//                                 <a href="#" class="common-button">자세히 보기</a>
//                             </div>
//                         </div>
//             `;

/* 2 */
async function getRequest (url) {
    return await fetch (url).then ((response) => {
        if(!response.ok) {
            throw new Error ('Error: ' + response.status);
        }
        return response.json();
    });
}

/* 3 */
async function getProducts(n, wrapper) {
    const getProductsUrl = 
    `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${n}`;

    try { // 요청 시도
        const data = await getRequest(getProductsUrl);
        console.log(data);

        /* 6 */
        let dataElement = '';

        /* 5 */
        data.map((item) => {
                /* 8 */
                const { pro_img, pro_name, pro_desc } = item;
            /* 7 */
            dataElement += `
                        <div class="swiper-slide">
                            <div class="slider-image">
                                <img src="images/${pro_img}" alt="slide image">
                            </div>
                            <div class="slider-text">
                                <h4>${pro_name}</h4>
                                <p>${pro_desc}</p>
                                <a href="#" class="common-button">자세히 보기</a>
                            </div>
                        </div>
            `;
        });

        /* 9 */
        wrapper.insertAdjacentHTML('beforeend', dataElement);
    } catch (error) { 
        // 요청시 에러 사항
        console.log(`Error: ${error}`);
    }
}

getProducts (4, sliderWrapper);