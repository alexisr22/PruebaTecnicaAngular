import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../brand.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss']
})
export class BrandFormComponent implements OnInit {

  data:any;
  id:any;

  _url:any;
  page=true;


  formGroup = new FormGroup({
    name: new FormControl(''),
    status: new FormControl('')
  })

  constructor(
    private BrandService:BrandService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const routeParams = this.ActivatedRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this._url = this.router.url

    if(this._url == '/brand/add'){
    this.page = false;
    }

    if(this.page == true ){
      this.BrandService.find(this.id).subscribe((data:any)=>{
        this.data = data;
      })
      }
  }

  add(form:any){
    parseInt(form.status);
    this.data = {
      'name':form.name,
      'enable':form.status
    };
    this.BrandService.addBrand(this.data as any).subscribe(data=>{
      this.data = data;
    });
    this.router.navigate(['/brand']);
  }


  edit(form:any){
    parseInt(form.status);
    this.data = {
      'name':form.name,
      'enable':form.status
    };
    this.BrandService.update(this.id, this.data).subscribe((res)=>{
    this.router.navigate(['/brand']);
    });
    this.router.navigate(['/brand']);
  }

}
