import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { WebStorage } from 'src/app/core/storage/web.storage';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
public password: boolean[] = [true];
  public routes = routes
  public Toggledata = true;
   
  public CustomControler: unknown;
  form = new UntypedFormGroup({
    email: new UntypedFormControl('admin@dreamguys.in', [Validators.required]),
    password: new UntypedFormControl('123456', [Validators.required]),
  });
  get f() {
    return this.form.controls;
  }


  ngOnInit() {
    localStorage.removeItem('LoginData');
  }

  submit() {
  }
  ngOnDestroy() {
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }
  otherPages(val: string) {
    localStorage.setItem(val, val);
  }
  

  public togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }

}
