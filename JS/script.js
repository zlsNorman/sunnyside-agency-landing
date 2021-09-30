////<reference path="../JS/jquery-3.5.1.js" />
$(document).ready(()=>{
    
    $(window).scroll(()=>{
        let scrollValue = $(window).scrollTop();
        if(scrollValue === 0){
            console.log(scrollValue);
            $(".menueleiste").css("background-color","rgb(0 0 0 / 0%)");
        }else{
            $(".menueleiste").css("background-color","rgb(0 0 0 / 15%)");
        }
    });

    $(".burger").click(()=>{
        $(".menue").fadeToggle();
    });

})  