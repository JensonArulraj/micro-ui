
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement} from '@angular/elements'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BundleComponent } from './bundle/bundle.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    BundleComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[AppComponent,BundleComponent]
})
export class AppModule {
  constructor(private injector:Injector) {}
  ngDoBootstrap():void{
    const {injector} =this;
    const bundleElement = createCustomElement(BundleComponent, {injector});
    customElements.define('micro-ui-bundle', bundleElement as any);
    const company = createCustomElement(CompanyComponent, {injector});
    customElements.define('micro-ui-company', company as any);
  }
 }
