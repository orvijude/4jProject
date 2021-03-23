var sign_up_btn = document.querySelector('#sign_up_here');
var sign_in_btn = document.querySelector('#sign_in_here');
var sign_in = document.querySelector('#sign_in');
var sign_up = document.querySelector('#sign_up');

sign_up_btn.addEventListener('click', () => {
    sign_in.classList.add('d_none');
    sign_up.classList.remove('d_none');
})
sign_in_btn.addEventListener('click', () => {
    sign_up.classList.add('d_none');
    sign_in.classList.remove('d_none');
})