//change on scrolling
$(window).on("scroll",function(){
    if($(window).scrollTop()) {
        $('nav').addClass('blue');
    }
    else{
        $('nav').removeClass('blue');
    }
})


//toggle code 
function myfunction(ghjty){
    var x= document.getElementById("mydiv");
    if(x.style.display==="none")
    {
        x.style.display = "block";
    }
    else{
        x.style.display = "none"
    }
}
    
