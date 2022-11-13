import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control<string>("", [Validators.required]),
      password: this.fb.control<string>("", [Validators.required]),
    });
  }

  login() {
    console.log("form", this.form);
    //send to backend
  }
}
