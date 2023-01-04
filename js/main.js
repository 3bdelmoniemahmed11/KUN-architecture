$(window).ready(()=>{
  let url=window.location.href;
  let url_split=url.split('/');
  let PageName=url_split[url_split.length-1].split('.')[0];
  let nav_Item_length=$('.nav-item .nav-link').length;
  let i=0;
  for(i;i<nav_Item_length;i++)
  {
    let nav_Item_href=$('.nav-item .nav-link')[i].getAttribute('href').split('.')[0];
    if(nav_Item_href.toLowerCase()==PageName.toLowerCase())
    {
        $('.nav-item')[i].classList.add('active');
        break;
    }
  }

  let language=url_split[url_split.length-2];
  switch(language)
  {
    case 'en':
      {
        $('.tr')[0].style.visibility='visible';
        $('.main-navbar')[0].style.visibility='hidden';
        console.log('ssssss');
        break;
      }
    
  }
});
  