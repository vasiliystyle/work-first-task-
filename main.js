var thisdate=new Date();
var year=thisdate.getFullYear();
var month=thisdate.getMonth();
var m=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октбярь","Ноябрь","Декабрь"];
var selectedDay;

function createCalendar2(shift)
{
  
  var cell=document.getElementsByTagName("td"); //выбираем все ячейки таблицы

  if (shift==-1) //смещение месяца в зависимости от нажатия кнопки
  {
    month-=1;
    if (month==-1)
    {
      year-=1;
      month=11;
    } 
  }
  if (shift==1) 
  {
    month+=1;
    if (month==12) 
    {
      year+=1;
      month=0;
    }
  }
  var d = new Date(year, month); //наша дата
  var firstDay=getDay(d); //номер дня с которого начинается месяц
  var countDays=32-new Date(year,month,32).getDate(); //кол-во дней в месяце
  var dd=0; //переменная для заполения ячеек дней
  var cc=0; //кол-во необходимых ячеек
  console.log("кол-во ячеек="+cell.length);
  console.log("кол-во дней в месяце"+countDays);
  console.log("первый день месяца"+firstDay);
 if (cell.length-18<countDays+firstDay) 
  {
    cell[cell.length-17].hidden=false; 
    cell[cell.length-18].hidden=false; 
  }
  else
  {
    cell[cell.length-17].hidden=true; 
    cell[cell.length-18].hidden=true; 
  } 
  ;

  document.getElementById("month").innerHTML=m[month]+" "+year;
  for (var i = 0; i < firstDay; i++) //заполняем все пустые дни в начале месяца
  {
    cell[i].innerHTML="";
    cell[i].id="";
    $('td:eq('+i+')').empty();
  }
  for (var i = firstDay; i <countDays+firstDay; i++) //заполняем все дни с числами
  {
    dd++;
    cell[i].id=dd;
    cell[i].innerHTML="<p>"+dd+"</p>";
    if (firstDay==6 ) 
    {
      cell[i].hidden=false;
    }

  }
  for (var i = countDays+firstDay; i < cell.length; i++) //заполняем все пустые дни в конце месяца
  {
    cell[i].innerHTML="";
    cell[i].id="";
    $('td:eq('+i+')').empty();
  }
  $('td:parent').mouseenter(function(){
  $(this).css('background-color','yellow'); 
  });   
  //при выхода за границы ячейки
  $('td:parent').mouseleave(function(){
  $(this).css('background-color','white'); 
  });
  $('td:empty').mouseenter(function(){
  $(this).css('background-color','white'); 
  });

};

      function getDay(date) // получить номер дня недели, от 0(пн) до 6(вс)
      { 
        var day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
      };

      function selectCell(id) //Отображение времени при выборе даты
      {
        if (id!=null && id!="") 
        {

         $('#calendar2').hide(500);
         $('h1').hide(500);
         var dayX=document.getElementById("month");
         dayX.innerHTML=id+" "+m[month]+" "+year; 
         $('#dayz').delay(200).show(500);
         $('h1').delay(200).show(500);
         createDays();
        }
      };

      function goBack() //возвращение с времени на выбор даты
      {

         $('#dayz').hide(500);
         $('h1').hide(500);
         var dayX=document.getElementById("month");
         dayX.innerHTML=m[month]+" "+year;
         $('#calendar2').delay(200).show(500);
         $('h1').delay(200).show(500);
      };


function createDays() //заполнение таблицы с возможными временем
{
  var cell=document.getElementsByClassName("hours"); 
  var h="10";
  var m="00";

  for (var i = 0; i < cell.length; i++) 
  {
    cell[i].innerHTML=h+":"+m;
    if (m==30) 
    {
      m="00";
      h=+h+1;
    }
    else
    m="30";
  }

  $('td:parent').mouseenter(function(){
  $(this).css('background-color','yellow'); 
  });   
  //при выхода за границы ячейки
  $('td:parent').mouseleave(function(){
  $(this).css('background-color','white'); 
  });
  $('td:empty').mouseenter(function(){
  $(this).css('background-color','white'); 
  });

};

