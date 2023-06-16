const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generationBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generationBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        alert('Preencha o campo com uma URL ou texto')
        return;
    }
    generationBtn.innerText = "Gerando um Qr Code...";
    qrImg.scr = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load', () =>{
        generationBtn.innerText = "Gerar QrCode";
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value){
        container.classList.remove('active');
    };
});

