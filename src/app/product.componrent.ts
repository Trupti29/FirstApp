
import { Component } from '@angular/core';
import { UsersService } from './Service';



@Component({
  selector: 'app-product',
  templateUrl: './product.comp.html' 
})
export class ProductComponent {
  title = 'app-Emp';
list:any;
  constructor(private _UsersService: UsersService) {

    alert(1);
  }

  ngOnInit()
  {
    alert(1);
      this._UsersService.getUsers().subscribe(
result=>{
alert(result);
  this.list=result;

}, response => {
  if (response.status == 404) {
   alert(response)
}}

      );

  }
}
