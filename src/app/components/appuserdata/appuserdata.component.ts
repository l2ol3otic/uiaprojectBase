import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectApiService } from '../../services/connect-api.service';
declare var require: any


@Component({
  selector: 'app-appuserdata',
  templateUrl: './appuserdata.component.html',
  styleUrls: ['./appuserdata.component.css']
})
export class AppuserdataComponent implements OnInit {
  

  constructor(private connectAPI:ConnectApiService) { }
  dataUser = [];
  nums: number[] = [1, 2, 3]
  
  newUserForm: FormGroup;

  ngOnInit() {
    this.connectAPI.getdataAPI("user").subscribe((response) => {
      this.dataUser = Array.prototype.slice.call(response);
      console.log(this.dataUser);
      this.RenderTable(this.dataUser)
       
    })
  }
  RenderTable(dataJSON){

    $(document).ready( function () {
      $('#example').DataTable({
        data: dataJSON,
        columns: [
            { data: "user_code" },
            { data: "user_name" },
            { data: "user_section" },
            { data: "user_status" },
            { data: "user_desc" }
        ]
      });
  } );
  }
  

}
