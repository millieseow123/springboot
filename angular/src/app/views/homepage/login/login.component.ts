import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { CalendarService } from "src/app/services/calendar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;
  constructor(private fb: FormBuilder, private calendarSvc: CalendarService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control<string>("", [Validators.required, Validators.email]),
      password: this.fb.control<string>("", [Validators.required]),
    });
  }

  login() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    this.calendarSvc.login(email, password)
    .then(result => {
      console.info('>>> result: ', result)
    }).catch(err => {
      console.log(err);
      alert("Incorrect email or password. Please try again.")
    })
  }
}
