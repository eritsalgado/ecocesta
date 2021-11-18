$( document ).ready(function() {
    $('.submenu-holder a').click( function(e){
        $('.submenu-holder').removeClass('open')
        $(this).parent().toggleClass('open')
        $('.open .submenu').toggleClass('display')
    })

    $('.toggle-btn').click(function(){
        $('.submenu-holder').removeClass('open')
        $('.submenu').removeClass('display')
        $('.toplevel').toggle()
    })
});