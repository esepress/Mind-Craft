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
    $("#main").click(function(){
        $("#main").hide();
    });
    $('#close').click(function(){
        $("#main").show();
    })
});

function openNav(){
        document.getElementById('myNav-bar').style.height = "400px";
}
function closeNav(){
        document.getElementById('myNav-bar').style.height = "0";
}

