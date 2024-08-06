function insertLineBreaksAfterPeriod(text) {
    return text.replace(/』/g, '』<br><br>');
}

const textDiv = document.getElementById('text');
textDiv.innerHTML = insertLineBreaksAfterPeriod(textDiv.innerHTML);

// 横スクロール用のJavaScriptを追加
const container = document.querySelector('.vertical-text');

const titleOverlay = document.querySelector('.title-overlay');
const content = document.querySelector('.content');

// タイトルを5秒間表示し、フェードアウトする
setTimeout(() => {
    titleOverlay.style.opacity = '0';
    setTimeout(() => {
        titleOverlay.style.display = 'none';
        // 本文をフェードインする
        content.style.opacity = '1';
    }, 1000);
}, 2000);

container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft -= e.deltaY * 0.2;
});

const highlights = document.querySelectorAll('.highlight');
const section2 = {
highlight: document.getElementById('No2'),
content: document.querySelector('.section_2')
};

function checkSectionVisibility() {
const containerRect = container.getBoundingClientRect();
const containerRight = containerRect.right;

const highlightRect = section2.highlight.getBoundingClientRect();
const highlightRight = highlightRect.right;
console.log("highlightRight:",highlightRight);
console.log("containerRight:",containerRight);

if (highlightRight >=1160) {
    section2.content.style.transition = 'opacity 1s ease-in-out';  
    section2.content.style.opacity = '1';

}
}

container.addEventListener('scroll', checkSectionVisibility);

// 初期表示設定
window.addEventListener('load', () => {
content.style.opacity = '1';
section2.content.style.opacity = '0';
container.scrollLeft = 0;
    checkSectionVisibility();
});