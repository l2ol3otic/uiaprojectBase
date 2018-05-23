import { Injectable } from '@angular/core';
declare var require: any;
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()
export class ConnectApiService {

    constructor(private http: HttpClient) { }
    getdataAPI(codeget) {
        var stringgeturl;
        switch (codeget) {
            case "section":
                stringgeturl = 'http://127.0.0.1:8081/getSection'
                break;
            case "user":
                stringgeturl = 'http://127.0.0.1:8081/getUser'
                break;
            case "window":
                stringgeturl = 'http://127.0.0.1:8081/getWindow'
                break;
            case "comname":
                stringgeturl = 'http://127.0.0.1:8081/getComname'
                break;
            case "areadata":
                stringgeturl = 'http://127.0.0.1:8081/getAreadata'
                break;
            case "com":
                stringgeturl = 'http://127.0.0.1:8081/getCom'
                break;
            case "print":
                stringgeturl = 'http://127.0.0.1:8081/getPrint'
                break;
            default:
                stringgeturl = 'http://127.0.0.1:8081/'
        }
        console.log("service" + codeget, stringgeturl)
        var url = stringgeturl
        return this.http.get(url).map((res) => res);
    }
    getdataAPIAno(codeget) {
        var stringgeturl;
        switch (codeget) {
            case "section":
                stringgeturl = 'http://192.168.137.204:8081/getSection'
                break;
            case "user":
                stringgeturl = 'http://192.168.137.204:8081/getUser'
                break;
            case "window":
                stringgeturl = 'http://192.168.137.204:8081/getWindow'
                break;
            case "comname":
                stringgeturl = 'http://192.168.137.204:8081/getComname'
                break;
            case "areadata":
                stringgeturl = 'http://192.168.137.204:8081/getAreadata'
                break;
            case "com":
                stringgeturl = 'http://192.168.137.204:8081/getCom'
                break;
            default:
                stringgeturl = 'http://192.168.137.204:8081/  '
        }
        console.log("service" + codeget, stringgeturl)
        var url = stringgeturl
        return this.http.get(url).map((res) => res);
    }
    PostRequestAPI(dataforpost, codeforpost) {
        var posturl
        switch (codeforpost) {
            case "postcoms":
                posturl = 'http://127.0.0.1:8081/addCom'
                break;
            case "postuser":
                posturl = 'http://127.0.0.1:8081/addUser'
                break;
            case "postprint":
                posturl = 'http://127.0.0.1:8081/addPrint'
                break;
            default:
                posturl = 'http://192.168.137.204:8081/ิ  '
        }
        var request = require('request');
        var options = {
            url: posturl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            json: dataforpost
        };
        request(options, function (err, res, body) {
            if (res && (res.statusCode === 200 || res.statusCode === 201)) {
                console.log(body);
            }
        });
    }
    delRequestAPI(datafordel, codefordel) {
        var delurl
        switch (codefordel) {
            case "delcoms":
                delurl = 'http://127.0.0.1:8081/delCom'
                break;
            case "deluser":
                delurl = 'http://127.0.0.1:8081/delUser'
                break;
            case "upprint":
                delurl = 'http://127.0.0.1:8081/upPrint'
                break;
            default:
                delurl = 'http://192.168.137.204:8081/ิ  '
        }
        var request = require('request');
        var options = {
            url: delurl,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            json: datafordel
        };
        request(options, function (err, res, body) {
            if (res && (res.statusCode === 200 || res.statusCode === 201)) {
                console.log(body);
            }
        });
    }
}


