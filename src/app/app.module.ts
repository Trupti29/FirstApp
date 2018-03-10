import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ProductComponent } from './product.componrent';
import { UsersService } from './Service';


import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { PRouting } from "./routing";
import { AutocompleteOverviewExample } from './Component/Form';

@NgModule({
  declarations: [
    AppComponent,FileSelectDirective,
    ProductComponent
    ,FormComponent,
    AutocompleteOverviewExample
  ],
  imports: [
    BrowserModule,
 FormsModule, ReactiveFormsModule ,
    RouterModule,
    HttpModule,
    PRouting
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
