  $(document).ready(function(){
    $('#back').click(function()
    {    $('#calendar2').hide(500);
         $('h1').hide(500);
          setTimeout(function () 
          {
          createCalendar2(-1);
          }, 500);
      
         $('#calendar2').delay(200).show(500);
         $('h1').delay(200).show(500);
    });
    $('#next').click(function()
    {    $('#calendar2').hide(500);
         $('h1').hide(500);
          setTimeout(function () 
          {
          createCalendar2(+1);
          }, 500);
      
         $('#calendar2').delay(200).show(500);
         $('h1').delay(200).show(500);
    });
    }); 
