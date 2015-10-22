$(document).ready(function () {
    $('#sliderToggle').click(function(){
        $('#panel').slideToggle('slow');
    });
    
    $('#shapeshifter').click(function(){
       $(this).animate({height:'30px', width: '50%', marginLeft: '25%', float: 'none', opacity: '1.0'}, 'slow', 
         function(){
           $(this).html("Cool, huh? Now try to drag me.");
           $(this).draggable();
       }); 
    });
    
    $('#tabs').tabs();
});