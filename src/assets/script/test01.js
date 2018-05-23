$(function(){

    var date = new Date()
    var d    = date.getDate(),
        m    = date.getMonth(),
        y    = date.getFullYear()

    $('#calendar').fullCalendar({
        selectable: false,

        customButtons: {
            myCustomButton: {
              text: 'จองห้อง !!',
              backgroundColor: '#f39c12',
              click: function() {
                selectable: true
              }
            }
          },
        header: {
            left: 'prev,next  myCustomButton',  
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
        },  
        events :[
            {
                title          : 'All Day Event',
                start          : new Date(y, m, 1),
                backgroundColor: '#f56954', //red
                borderColor    : '#f56954' //red
            },
            {
                title          : 'Long Event',
                start          : new Date(y, m, d - 5),
                end            : new Date(y, m, d - 2),
                backgroundColor: '#f39c12', //yellow
                borderColor    : '#f39c12' //yellow
              },
        ],
        eventMouseover: function( event, jsEvent, view ){
            backgroundColor = '#f39c12'   
        },
        dayClick: function(date) {
            alert('clicked ' + date.format());
        },
        select: function(startDate, endDate) {
            alert('selected ' + startDate.format() + ' to ' + endDate.format());
        },  
        eventLimit:true,
        lang: 'th'
    });
});