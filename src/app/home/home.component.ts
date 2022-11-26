import { Component, OnInit } from '@angular/core';
import { TestService } from '../_services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datos:any;

  constructor(
    private TestService:TestService
  ) { }

  ngOnInit(){
    this.TestService.inicial().subscribe(datos=>{
      this.datos=datos;
    })
  }

}
