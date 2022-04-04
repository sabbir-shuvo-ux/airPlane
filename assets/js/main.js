$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// search bar

const searchBar = document.querySelector('.searcBar');

searchBar.addEventListener('click', function() {
    const search_box = document.querySelector('.search_box');

    search_box.classList.toggle('search_box_border')
    search_box.classList.toggle('active_search');
})













