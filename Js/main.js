const ratingBox = document.querySelector('.rating-state');
const thankBox = document.querySelector('.thank-state');
const submitBtn = document.querySelector('button[type=submit]');
const result = document.querySelector('.result');
const ratingItems = document.querySelectorAll('.rating li');
let target;

// catch clicked target item
ratingItems.forEach(item =>{
    item.addEventListener('click',(e)=>{
     target= e.target;
     setClickedClass(item);
    })
});
const setClickedClass = el => {
    [...el.parentElement.children].forEach(sibling => sibling.classList.remove('clicked'))
     el.classList.add('clicked');
    }
// handle submit event when button clicked
submitBtn.addEventListener('click',(e)=>{
 e.preventDefault();
 ratingBox.style.display='none';
 thankBox.style.opacity='1';
 result.textContent= target.textContent;
});