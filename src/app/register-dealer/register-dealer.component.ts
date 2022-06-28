import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

import { Dealer } from '../dealer';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-register-dealer',
  templateUrl: './register-dealer.component.html',
  styleUrls: ['./register-dealer.component.css']
})
export class RegisterDealerComponent implements OnInit {

  registerForm: FormGroup | any;
    submitted = false;
 
    City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai', ]
 
    dealer:Dealer=new Dealer();

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', [Validators.required]],
      phoneNo:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 
  changeCity(e:string|any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }
 
  Dealer(): void {
   this.submitted = false;
   this.dealer= new Dealer();
 }

 onSubmit() {
   this.submitted = true;
this.dealer=this.registerForm.value;
// stop the process here if form is invalid
if (this.registerForm.invalid) {
  return;
}

this.save();
}

save() {

  this.authenticationService.saveDealer(this.dealer)
  .subscribe(data => console.log(data), error => console.log(error));
this.dealer= new Dealer();
// this.address=new Address();

this.gotoList();
}
gotoList() {
  this.router.navigate(['/login']);
}

}
