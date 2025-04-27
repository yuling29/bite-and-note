// ===== 選取 DOM 元素 =====
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// ===== URL 處理 =====

//將目前的 tabId 寫入 URL
function setTabInURL(tabId) {
    const url = new URL(window.location);
    url.searchParams.set('tab', tabId);
    window.history.pushState({}, '', url);
}
// 從 URL 中讀取目前的 tabId
function getTabFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab');
}

// ===== 切換 tab =====
function switchTab(tabId) {
    // 切換按鈕的 active 狀態
    tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    // 切換內容區塊的 active 狀態
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });

    // 更新 URL
    setTabInURL(tabId);
}

// ===== 點擊 tab 時切換內容 =====
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        switchTab(tabId);
    });
});

// ===== 頁面初始化時，根據 URL 設定初始 Tab =====
window.addEventListener('load', () => {
    const tabFromURL = getTabFromURL();
    const targetButton = document.querySelector(`.tab-button[data-tab="${tabFromURL}"]`);
    if (targetButton) {
        targetButton.click(); // 有參數對應 tab
    } else {
        tabButtons[0].click(); // 沒參數就預設第一個 tab
    }
});

// ===== 支援瀏覽器前進/後退按鈕 =====
window.addEventListener('popstate', () => {
    const tabFromURL = getTabFromURL();
    const targetButton = document.querySelector(`.tab-button[data-tab="${tabFromURL}"]`);
    if (targetButton) {
        targetButton.click();
    }
});

window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});