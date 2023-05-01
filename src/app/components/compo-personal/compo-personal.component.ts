import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-compo-personal',
  templateUrl: './compo-personal.component.html',
  styleUrls: ['./compo-personal.component.css']
})
export class CompoPersonalComponent implements OnInit {


  personal : any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {

    this._http.get('http://localhost:3900/personal')
    .subscribe(res =>{
      this.personal = res;
      console.log(this.personal)
    })



  }

}
