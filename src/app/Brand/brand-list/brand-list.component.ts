import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brands:any;

  constructor(
    private BrandService:BrandService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.showBrands();
  }

  showBrands(){
    this.brands = this.BrandService.listBrands().subscribe(brand=>{
      this.brands = brand;
      console.log(this.brands);
    })
  }

  delete(id:any){
    this.BrandService.delete(id).subscribe();
    this.router.navigate(['/brand']);

  }

}
