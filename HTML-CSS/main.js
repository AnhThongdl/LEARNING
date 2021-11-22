$(window).scroll(function(){
    let otop = $(".section-2").offset().top - window.innerHeight;
    if($(window).scrollTop() > otop){
        $('.navbar').addClass('.sticky');
    } 
    else{
        $('.navbar').removeClass('.sticky');
    }
})
let ncount = selector =>{
    $(selector).each(function(){
        $(this).animate({
            Counter: $(this).text()
        },{
            duration: 4000,
            easing: "swing",
            step: function(value){
                $(this).text(Math.ceil(value))
            }
        })
    })
}
let position = 0;
$(window).scroll(function(){
    let otop = $(".numbers").offset.top - window.innerHeight;
    if(position == 0 && $(window).scrollTop() >= otop){
        position++;
        ncount(".rect > h1")
    }
})
