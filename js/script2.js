const readMoreBtn = document.querySelector('.read-more-btn');
const text_about = document.querySelector('.text-about');

readMoreBtn.addEventListener('click',(e)=>{
    text_about.classList.toggle('show-more-about');
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less'
    }
    else{
        readMoreBtn.innerText = "Read More";  
    }
})