btn = document.querySelector('.button');
heart = document.querySelector('.heart');

para = document.querySelector('.para')
container = document.querySelector('.container');


btn.addEventListener('click',()=>{
    if(btn.innerText == "Open"){
        btn.innerText = "Close"
        setTimeout(() => {
            heart.style.display = 'none'
            para.innerText = "Lots Of Love.."
        }, 500);
    }else{
        btn.innerText = "Open"
        setTimeout(() => {
            heart.style.display = 'block'
        }, 1200);
    }
    container.classList.toggle('flip');

})
