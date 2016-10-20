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

    /*$('#close').hide();
    $("#main").click(function(){
        $("#main").hide();
        $('#close').show();
    });
    $('#close').click(function(){
        $("#main").show();
        $('#close').hide();
    })*/
});

/*function openNav(){
        document.getElementById('myNav-bar').style.height = "80px";
}
function closeNav(){
        document.getElementById('myNav-bar').style.height = "0";
}*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.height = "100%";
    /*document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";*/            
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("overlay").style.height = "0%";
}