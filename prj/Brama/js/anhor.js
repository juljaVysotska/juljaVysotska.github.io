

if(window.innerWidth >= 768){
    const scrollTop = document.querySelector('.selector').offsetTop - 150;
    window.scrollTo( 0, scrollTop );

}else{
    const scrollTop = document.querySelector('.tabs').offsetTop-70;
    window.scrollTo( 0, scrollTop );
}