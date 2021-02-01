import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = new FormControl('', [Validators.required, Validators.minLength(10), this.fuckValidator]);
  age = new FormControl('', Validators.required);
  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  action(): void {
    console.log(this.myForm);
  }

  fuckValidator(inputData: AbstractControl): any {
    if (inputData.value.includes('fuck')) {
      return {fuck: true, msg: 'fuck is presented'};
    }
    return null;
  }
}
