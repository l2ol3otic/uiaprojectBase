import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectApiService } from '../../services/connect-api.service';
import { DataprocessingService } from '../../services/dataprocessing.service';

@Component({
  selector: 'app-appcomdata',
  templateUrl: './appcomdata.component.html',
  styleUrls: ['./appcomdata.component.css']
})
export class AppcomdataComponent implements OnInit {

  constructor(private connectAPI: ConnectApiService, private dataprocessing: DataprocessingService) { }
  dataCom = [];
  dataWindow = [];
  dataUser = [];
  comForm: FormGroup;

  ngOnInit() {

    //gen datatable
    this.connectAPI.getdataAPI("com").subscribe((response) => {
      this.dataCom = Array.prototype.slice.call(response);
      this.RenderTable(this.dataCom)
    })
    this.connectAPI.getdataAPI("window").subscribe((response) => {
      this.dataWindow = Array.prototype.slice.call(response);
      console.log(this.dataWindow);
    })
    this.connectAPI.getdataAPI("user").subscribe((response) => {
      this.dataUser = Array.prototype.slice.call(response);
      console.log(this.dataUser);
    })

    //เตรียมข้อมูลสำหรับสร้าง modal
    var office = "สำนักงานใหญ่กรุงเทพ"
    this.comForm = new FormGroup({
      'offices': new FormControl(null),
      'pcnames': new FormControl(null),
      'ipaddress': new FormControl(null, Validators.required),
      'macaddress': new FormControl(null),
      'brand': new FormControl(null, Validators.required),
      'model': new FormControl(null, Validators.required),
      'cpu': new FormControl(null),
      'ram': new FormControl(null),
      'ramcap': new FormControl(null),
      'hdd': new FormControl(null),
      'window': new FormControl(null),
      'bit': new FormControl(null),
      'hddcap': new FormControl(null),
      'serial': new FormControl(null),
      'warranty': new FormControl(null),
      'user': new FormControl(null)
    });
    //fix ค่าให้ modal
    this.comForm.patchValue({
      bit: " 64 BIT",
      hddcap: " TB",
      ramcap: " GB",
      offices: office
    });
  }
  onSubmit() {
    console.log("submit")
    const comform = this.comForm.value;
    console.log(comform.pcnames)
    var usercode = this.dataprocessing.findusercode(this.dataUser,comform.user);
    var coms = {
      "mCom_pcname": comform.pcnames,
      "mCom_ip": comform.ipaddress,
      "mCom_mac": comform.macaddress,
      "mCom_brand": comform.brand,
      "mCom_model": comform.model,
      "mCom_serial": comform.serial,
      "mCom_cpu": comform.cpu,
      "mCom_ram": comform.ram + comform.ramcap,
      "mCom_hdd": comform.hdd + comform.hddcap,
      "mCom_window": comform.window,
      "mCom_warEndDate": comform.warranty,
      "mCom_user": usercode
    }
    console.log(coms)
    this.connectAPI.PostRequestAPI(coms, "postcoms");
    this.onReset();
  }
  RenderTable(dataJSON) {

    $(document).ready(function () {
      var table = $('#tableCom').DataTable({
        responsive: true,
        data: dataJSON,
        columns: [
          { data: "mCom_pcname" },
          { data: "mCom_ip" },
          { data: "mCom_brand" },
          { data: "mCom_model" },
          { data: "mCom_window" },
          { data: "mCom_warEndDate" },
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
  onReset() {
    var office = "สำนักงานใหญ่กรุงเทพ"
    this.comForm.reset();
    this.comForm.patchValue({
      bit: " 64 BIT",
      hddcap: " TB",
      ramcap: " GB",
      offices: office
    });
  }

}
