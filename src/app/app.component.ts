import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'alexisapp';
  lang = 'es';

  constructor(
    public translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.translate.setDefaultLang(this.lang);
  }
  changeLanguage(lang: string) {
    this.lang = lang;
    this.translate.setDefaultLang(lang);
  }  
  

  // constructor(private translate: TranslateService) {
  //   translate.addLangs(['en', 'es']);
  //   const lang = translate.getBrowserLang()
  //   if ((lang !== 'es') && (lang !== 'en') ){
  //     translate.setDefaultLang('en');
  //   }
  //   translate.use('en');
  // }

}
