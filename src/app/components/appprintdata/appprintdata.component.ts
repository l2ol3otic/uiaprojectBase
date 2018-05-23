import { Component, OnInit } from '@angular/core';
import { ConnectApiService } from '../../services/connect-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataprocessingService } from '../../services/dataprocessing.service';

@Component({
  selector: 'app-appprintdata',
  templateUrl: './appprintdata.component.html',
  styleUrls: ['./appprintdata.component.css']
})
export class AppprintdataComponent implements OnInit {

  constructor(private connectAPI: ConnectApiService) { }

  dataUser = [];
  dataprint = [];
  printForm: FormGroup;

  ngOnInit() {

    this.connectAPI.getdataAPI("print").subscribe((response) => {
      this.dataprint = Array.prototype.slice.call(response);
      this.RenderTable(this.dataprint)
    })
    this.connectAPI.getdataAPI("user").subscribe((response) => {
      this.dataUser = Array.prototype.slice.call(response);
      console.log(this.dataUser);
    })

    //เตรียมข้อมูลสำหรับสร้าง modal
    var office = "สำนักงานใหญ่กรุงเทพ"
    this.printForm = new FormGroup({
      'poffice': new FormControl(null),
      'printbrand': new FormControl(null),
      'printmodel': new FormControl(null),
      'printserial': new FormControl(null),
      'printwarranty': new FormControl(null),
      'printuser': new FormControl(null),
   
    });
    //fix ค่าให้ modal
    this.printForm.patchValue({
      poffices: office
    });
  }
  RenderTable(dataJSON) {

    $(document).ready(function () {
      var table = $('#tablePrint').DataTable({
        responsive: true,
        data: dataJSON,
        columns: [
          { data: "mPrint_brand" },
          { data: "mPrint_model" },
          { data: "mPrint_serial" },
          { data: "mPrint_warEndDate" },
          { data: "user_name" },
          { defaultContent: "<button class=btn btn-primary>Edit!</button> " + "  " + " <button type=button class=btn btn-danger>Danger</button>" }
        ]
      });
      $('#example8 tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
        }
        else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
        }
      });

      $('#button').click(function () {
        table.row('.selected').remove().draw(false);
      });
    });
  }

}
