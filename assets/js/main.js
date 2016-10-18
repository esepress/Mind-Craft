/*Carousel view scripts*/
$(document).ready(function(){

    $("#testimonial").owlCarousel({
        items: 1,
        loop:true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        center: true,
        margin: 10,
        nav: true,
        autoHeight: true
    });
    /*Hover effect script for feature block*/
    
});

function openNav(){
        document.getElementById('myNav-bar').style.width = "600px";
}
function closeNav(){
        document.getElementById('myNav-bar').style.width = "0";
}

