import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { setDefaultService } from 'selenium-webdriver/opera';


declare global {
  interface Window { win: any; }
}
@Component({
  selector: 'app-appreservecon',
  templateUrl: './appreservecon.component.html',
  styleUrls: ['./appreservecon.component.css']
})
export class AppreserveconComponent implements OnInit {

  dateselect: FormGroup;
  Reserve = {
    ReserveTittle: '',
    ReserveSec: '',
    ReserveDate: '',
    ReserveTimeStart: '',
    ReserveTimeEnd: '',
    ReserveDesc: '',
    ReserveUSER: 'PANITI TAPSONG'
  }
  constructor(public zone: NgZone) {

    window['AppreserveconComponent'] = {
      component: this,
      zone: zone
    }
    window.win = window.win || {};
    window.win.namespace = window.win.namespace || {};
    window.win.DisplayData = this.DisplayData.bind(this);

  }
  ngOnInit() {

    this.dateselect = new FormGroup({
      'ressec': new FormControl(''),
      'resdate': new FormControl(''),
      'restime1': new FormControl(''),
      'restime2': new FormControl(''),
      'restitle': new FormControl(''),
      'resdes': new FormControl('')

    })
    this.RenderCalendar();
  }
  onSubmit() {

    const ReserveData = this.Reserve.ReserveDate;
    const dateselect = this.dateselect.value;
    this.Reserve.ReserveSec = dateselect.ressec;
    this.Reserve.ReserveTittle = dateselect.restitle;
    this.Reserve.ReserveDate = dateselect.resdate;
    this.Reserve.ReserveTimeStart = dateselect.restime1;
    this.Reserve.ReserveTimeEnd = dateselect.restime2;
    this.Reserve.ReserveDesc = dateselect.resdes;
    console.log(this.Reserve.ReserveDate + " เวลา " + this.Reserve.ReserveTimeStart + " หัวข้อ " + this.Reserve.ReserveDesc + " โดย " + this.Reserve.ReserveUSER)
  }
  RenderCalendar() {

    var date = new Date()
    var d = date.getDate(),
      m = date.getMonth(),
      y = date.getFullYear()

    $('#calendar').fullCalendar({
      selectable: true,
      customButtons: {
        myCustomButton: {
          text: 'จองห้อง !!',
          backgroundColor: '#f39c12',
          click: function () {

          }
        }
      },
      header: {
        left: 'prev,next  myCustomButton',
        center: 'title',
        right: 'month,agendaWeek,agendaDay',
      },
      events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1),
          backgroundColor: '#f56954', //red
          borderColor: '#f56954' //red
        },
        {
          title: 'Long Event',
          start: new Date(y, m, d - 5),
          end: new Date(y, m, d - 2),
          backgroundColor: '#f39c12', //yellow
          borderColor: '#f39c12' //yellow
        },
      ],
      eventMouseover: function (event, jsEvent, view) {

      },
      dayClick: function (date) {
        //alert('clicked ' + date.format()); 
        window['AppreserveconComponent'].zone.run(() => {
          window['AppreserveconComponent'].component.DisplayData(date.format());
        })
      },
      select: function (startDate, endDate) {
        //alert('selected ' + startDate.format() + ' to ' + endDate.format());
        window['AppreserveconComponent'].zone.run(() => {
          window['AppreserveconComponent'].component.DisplayData(startDate.format() + " - " + endDate.format());
        })
      },
      eventLimit: true,
      lang: 'th'

    })

    var currColor = '#3c8dbc'
    var colorChooser = $('#color-chooser-btn')
    $('#color-chooser > li > a').click(function (e) {
      e.preventDefault()
      //Save color
      currColor = $(this).css('color')
      //Add color effect to button
      $('#add-new-event').css({ 'background-color': currColor, 'border-color': currColor })
    })
    $("#resdate").datepicker({
      datepicker: {
        dateFormat: 'dd/mm/yy',
        regional: 'th',
      }
    });
  }
  DisplayData(x) {
    //console.log("Success Pass Data");
    console.log(x);
    /*this.dateselect.patchValue({
      resdate: x
    })*/
    //$('#exampleModal').modal('show');
  }

}
