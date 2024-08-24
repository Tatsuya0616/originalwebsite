const photo = document.querySelector(".photo");

// マウスオーバー時の処理
photo.addEventListener('mouseover', () => {
    photo.style.transform = 'scale(1.1)'; // 画像を10%拡大
});

// マウスアウト時の処理
photo.addEventListener('mouseout', () => {
    photo.style.transform = 'scale(1)'; // 画像を元のサイズに戻す
});
console.log(photo)