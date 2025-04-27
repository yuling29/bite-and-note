
// ex3
let currentIndex = 0;
let itemsPerSlide = 1;

function getItemsPerSlide() {
    if (window.innerWidth <= 575) return 1;
    if (window.innerWidth >= 576 && window.innerWidth <= 992) return 2;
    return 3;
}

function updateCarousel() {
    itemsPerSlide = getItemsPerSlide();
    const track = document.querySelector('.carousel-track');
    const item = document.querySelector('.carousel_item');
    if (!item) return;

    const itemWidth = item.offsetWidth; // 含 margin=0 ( + 0)
    const totalItems = document.querySelectorAll('.carousel_item').length;
    const maxIndex = Math.max(0, Math.floor((totalItems - 1) / itemsPerSlide));

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const offset = -(itemWidth * itemsPerSlide * currentIndex);
    track.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex++;
    updateCarousel();
}

function prevSlide() {
    currentIndex--;
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);


document.addEventListener("DOMContentLoaded", function () {
    let mobileMenu = document.querySelector(".mobile-menu");
    let menuBtn = document.querySelector(".mobile-menu-burger .material-symbols-outlined");
    let closeBtn = document.querySelector(".mobile-menu-close .material-symbols-outlined");

    let contactLink = document.querySelector(".contact-link a"); // 選取最後一個 <li> 內的 <a>

    // 點擊 "menu" 圖示時，顯示 .mobile-menu
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    // 點擊 "close" 圖示時，隱藏 .mobile-menu
    closeBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    contactLink.addEventListener("click", function () {
        // 延遲 200ms 讓瀏覽器先完成跳轉再關閉選單
        setTimeout(() => {
            mobileMenu.classList.remove("active");
        }, 200);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // 取得所有 dropdown 裡的 <span>
    let dropdownIcons = document.querySelectorAll(".dropdown > a > .material-symbols-outlined");

    dropdownIcons.forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.preventDefault(); // 防止點擊時跳轉


            // 切換圖示
            if (icon.textContent.trim() === "expand_more") {
                icon.textContent = "expand_less";
            } else {
                icon.textContent = "expand_more";
            }
        });
    });
});

//點擊按鈕回到頁首
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // 監聽滾動事件
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // 滾動超過 50px 顯示按鈕
            // backToTopButton.style.display = "flex";
            backToTopButton.classList.add("show");
        } else {
            // backToTopButton.style.display = "none";
            backToTopButton.classList.remove("show");
        }
    });

    // 點擊按鈕回到頁首
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

//blog_liked
function toggleLike(element) {
    element.classList.toggle('liked');
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 防止表單提交（測試用）

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (firstName === "" || lastName === "" || email === "") {
        alert("請填寫所有必填欄位！");
        return;
    }

    alert("表單提交成功！");
});







