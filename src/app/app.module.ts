import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrequentlyComponent } from './left-menubar/frequently/frequently.component';
import { LeftMenubarComponent } from './left-menubar/left-menubar.component';
import { SearchBoxComponent } from './left-menubar/search-box/search-box.component';

import { RightMenubarComponent } from './right-menubar/right-menubar.component';
import { CenterComponent } from './center/center.component';
import { ReteComponent } from './rete/rete.component';
import { MyReteEditorModule } from "./rete/rete.module";




@NgModule({
  declarations: [
    AppComponent,
    LeftMenubarComponent,
    SearchBoxComponent,
    FrequentlyComponent,
    RightMenubarComponent,
    CenterComponent,
    
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyReteEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
