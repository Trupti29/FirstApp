import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.componrent';
import { FormComponent } from './form.component';
import { AppComponent } from './app.component';

import { FormValidComponent } from './form-valid/form-valid.component';


const Routes: Routes = [
  { path: '', component: AppComponent ,children:[
  { path: 'Product', component: ProductComponent }
  , { path: 'Form', component: FormComponent }  
  , { path: 'FormValid', component: FormValidComponent  }
  ]
}
  
];

export const PRouting = RouterModule.forRoot(Routes);//RouterModule.forChild(Routes);