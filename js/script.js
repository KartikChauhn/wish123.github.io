console.log("hello");


$(document).ready(function() {
    var movementStrength = 55;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    var secondContainerHeight = $(window).height() ;
    $('.secondContainer').css("height", secondContainerHeight+"px");
    var halfHeight = $(window).height()/2;
    $('.fixedstars').css("box=shadow", "0px   "+ halfHeight+"px    "+"white");

    $("#first").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
        console.log(pageX);
        
    });
});




// document.getElementById("nextpage").addEventListener("click", function(e){
    
// });

document.querySelector('.nextpage').addEventListener('click', function(e) {
    $('#secondContainer').css('position', "fixed");
    $('#secondContainer').css('top', "0");
    $('#secondContainer').css('animation', "fadeOut  "+ "1s  " + "ease-in-out");
    
});

document.querySelector('.tofirst').addEventListener('click', function(e) {
    $('#secondContainer').css('position', "static");
    $('#secondContainer').css('animation', "none");

});


