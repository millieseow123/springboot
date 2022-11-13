import { Component, ElementRef, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  @ViewChild("toUpload")
  toUpload!: ElementRef;
  form!: FormGroup;
  imageURL!: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  processRegistration() {
    const profilePicture = this.toUpload.nativeElement.files[0];
    // const username = this.form.get("username")?.value;
    console.log("form value: ", this.form.value);
    console.log("profile", profilePicture);
  }

  onPasswordChange() {
    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ mismatch: true });
    }
  }
  
  get password(): AbstractControl {
    return this.form.controls['password'];
  }
  
  get confirmPassword(): AbstractControl {
    return this.form.controls['confirmPassword'];
  }

  selectFile(event: any) {
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.imageURL = reader.result; 
		}
	}

  private createForm() {
    return this.fb.group({
      username: this.fb.control(""),
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required]),
      confirmPassword: this.fb.control("", [Validators.required]),
      firstName: this.fb.control("", [Validators.required]),
      lastName: this.fb.control("", [Validators.required]),
      profilePicture: this.fb.control<any>(""),
    },
    );
  }
}
