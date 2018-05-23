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

  constructor(private connectAPI: ConnectApiService, private dataprocessing: DataprocessingService) { }

  dataUser = [];
  dataprint = [];
  printForm: FormGroup;


  ngOnInit() {
    var x  = "0000008"
    //test del api
    var testdel = {
      "mPrint_id": x,
      "mPrint_brand": x,
      "mPrint_model": x
    }
    //console.log(testdel)
    this.connectAPI.delRequestAPI(testdel, "upprint");

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
      poffice: office
    });
  }
  RenderTable(dataJSON) {
    var self = this;
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
          { defaultContent: "<button class=btn btn-primary data-toggle=modal data-target=#upPrint>Edit!</button>" }
        ]
      });
      //แก้ไขข้อมูล
      $('#tablePrint tbody').on( 'click', 'button', function () {       
        var jquerydata = table.row( $(this).parents('tr') ).data();
        self.onEdit(jquerydata);
        //alert( data["mPrint_brand"] +"'s salary is: "+ data[ 2 ] );
    } );
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
  onSubmit() {
    console.log("submit")
    const printfrom = this.printForm.value;
    var usercode = this.dataprocessing.findusercode(this.dataUser, printfrom.printuser);
    var prints = {
      "mPrint_brand": printfrom.printbrand,
      "mPrint_model": printfrom.printmodel,
      "mPrint_serial": printfrom.printserial,
      "mPrint_warEndDate": printfrom.printwarranty,
      "mPrint_userId": usercode
    }
    console.log(prints)
    this.connectAPI.PostRequestAPI(prints, "postprint");
    this.onReset();
  }
  onReset() {
    var office = "สำนักงานใหญ่กรุงเทพ"
    this.printForm.reset();
    this.printForm.patchValue({
      poffices: office
    });
  }
  onEdit(jquerydata){
    console.log(jquerydata);
    var office = "สำนักงานใหญ่กรุงเทพ"
    this.printForm.patchValue({
      poffice: office,
      printbrand : jquerydata["mPrint_brand"],
      printmodel : jquerydata["mPrint_model"],
      printserial : jquerydata["mPrint_serial"],
      printwarranty : jquerydata["mPrint_warEndDate"],
      printuser : jquerydata["user_name"]
    });
  }
  onUpdate(jquerydata){
    console.log("update")
    const printfrom = this.printForm.value;
    var usercode = this.dataprocessing.findusercode(this.dataUser, printfrom.printuser);
    var prints = {
      "mPrint_brand": printfrom.printbrand,
      "mPrint_model": printfrom.printmodel,
      "mPrint_serial": printfrom.printserial,
      "mPrint_warEndDate": printfrom.printwarranty,
      "mPrint_userId": usercode
    }
    console.log(prints)
    this.connectAPI.PostRequestAPI(prints, "postprint");
  }

}
