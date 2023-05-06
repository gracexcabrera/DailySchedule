
$(function () {

});

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(description);
    console.log(time);

    localStorage.setItem(time, description);
  });

  $('#hour-10 .description').val(localStorage.getItem('hour-10'));


  $('.time-block').each(function (){
    var now = dayjs().hour();
    var calendarHour = parseInt($(this).parent().attr('id').split('-')[1]);
    if(now > calendarHour){
      $(this).addClass('past');
    } else if (now === calendarHour){
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })


});

var today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY'));