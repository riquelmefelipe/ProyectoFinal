function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');    
        
}
$( function() {
    $( "#descripcion" ).accordion();
    
    });

$(window).load(function() {
    $('.flexslider').flexslider({
        touch: true,
        pauseOnAction: false,
        pauseOnHover: false,
        });
    });