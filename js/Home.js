$(document).ready(function(){
  
    $( ".navbar-toggler")[0].addEventListener('click',()=> {
      if($('.carousel-control-prev')[0].style.top=="")
      {
        $('.carousel-control-prev').css("top","50%");
        $('.carousel-control-next').css("top","50%");
      }
      else
      {
        $('.carousel-control-prev').css("top","");
        $('.carousel-control-next').css("top","");
      }
  
  }); 
 
 
  });
    window.addEventListener('resize', ()=>
    {
      if(document.body.offsetWidth>=991)
      {
        $('.carousel-control-prev').css("top","");
        $('.carousel-control-next').css("top","");
      }
    });  