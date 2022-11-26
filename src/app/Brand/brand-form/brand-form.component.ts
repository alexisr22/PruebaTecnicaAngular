import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../brand.service';


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
        console.log(this.data);
      })
      }
  }

  add(name:string, status:any){
    parseInt(status);
    this.data = {
      'name':name,
      'enable':status
    };
    this.BrandService.addBrand(this.data as any).subscribe(data=>{
      this.data = data;
    });
    this.router.navigate(['/brand']);
  }


  edit(name:string, status:any){
    parseInt(status);
    this.data = {
      'name':name,
      'enable':status

    };
    console.log(this.data);
    this.BrandService.update(this.id, this.data).subscribe((res)=>{
    this.router.navigate(['/brand']);
    });
    this.router.navigate(['/brand']);


  }

}
