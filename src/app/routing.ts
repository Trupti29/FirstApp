import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.componrent';
import { FormComponent } from './form.component';
import { AppComponent } from './app.component';
import { AutocompleteOverviewExample } from './Component/Form';


const Routes: Routes = [
  { path: '', component: AppComponent ,children:[
  { path: 'Product', component: ProductComponent }
  , { path: 'Form', component: FormComponent }
  , { path: 'AutoComp', component: AutocompleteOverviewExample  }
  ]
}
  
];

export const PRouting = RouterModule.forRoot(Routes);//RouterModule.forChild(Routes);