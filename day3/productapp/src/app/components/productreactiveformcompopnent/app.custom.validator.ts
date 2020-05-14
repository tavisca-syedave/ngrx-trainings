import { AbstractControl } from '@angular/forms';
import { Logic } from 'src/app/models/app.logic';

// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }
  static checkUniqueProduct(ctrl: AbstractControl) : any {
    let logic: Logic;
    logic= new Logic();
    const val: number  = parseInt(ctrl.value);
    const prds= logic.getProducts();

    let checkProductExist= prds.some( a=> {
      return a.ProductId == val;
    });
    if (checkProductExist ==true) {
       return {isProductExist:true};
    } else {
      return null;
    }
  }
}
