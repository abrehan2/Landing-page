let search_btn = document.querySelector('#search-btn');
let search_bar = document.querySelector('.search-bar-container')
let form_close_btn = document.querySelector('#form-close') 
let form_container = document.querySelector('.login-form-container')
let user_btn = document.querySelector('#login-btn');
let menu_btn = document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")
let vid_btn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
    search_btn.classList.remove('fa-times');
    search_bar.classList.remove('active');
    navbar.classList.remove('active');
    form_container.classList.remove('active');
}

search_btn.addEventListener('click', () =>
{
    search_btn.classList.toggle('fa-times');
    search_bar.classList.toggle('active')
})


 user_btn.addEventListener("click", () => {
    form_container.classList.add('active');
    })

    form_close_btn.addEventListener("click", () => {
         form_container.classList.remove('active');
        })
        
        menu_btn.addEventListener("click", () =>
        {
             navbar.classList.toggle('active');
        })

        vid_btn.forEach(btn => {
            btn.addEventListener("click", () =>
            {
               document.querySelector('.controls .active').classList.remove('active'); // removing old slide control
               
               btn.classList.add('active');
          let src = btn.getAttribute('data-src');
          document.querySelector('#video-slider').src = src;

            });
        });