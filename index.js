const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Te amo mucho kbro Gracias por decir que si y quedarte conmigo 💙✨')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const ramdomX = parseInt(Math.random()*100);
    const ramdomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',ramdomY+'%');
    noBtn.style.setProperty('left',ramdomX+'%');
    noBtn.style.setProperty('transform',`translate(-${ramdomX}%,-${ramdomY}%)`);
})