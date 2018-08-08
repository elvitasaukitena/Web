$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
    var a = $(this).attr("href");
    
     $(".mainimg").attr("src", a);
     $(".mainimg").attr("href", a);
    

});
$(document).on('click', '[data-toggle="lightbox3"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
   

});

$(document).on('click', '[data-toggle="lightbox2"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
    

});